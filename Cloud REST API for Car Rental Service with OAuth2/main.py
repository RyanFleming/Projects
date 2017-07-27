#!/opt/local/bin/python2.7

from google.appengine.ext import ndb
from google.appengine.api import urlfetch
import logging
import webapp2
import json
import string
import random
import urllib
from google.appengine.api import memcache

class Car(ndb.Model):
    model = ndb.StringProperty(required=True)
    manufacturer = ndb.StringProperty()
    checkedIn = ndb.BooleanProperty()
    id = ndb.StringProperty(required=True)
    user = ndb.StringProperty(required=True)
    vin = ndb.StringProperty()

class Customer(ndb.Model):
    name = ndb.StringProperty(required=True)
    balance = ndb.FloatProperty()
    checked_out = ndb.StringProperty(repeated=True)
    id = ndb.StringProperty(required=True)
    user = ndb.StringProperty(required=True)
    license = ndb.StringProperty()

def getUserByToken(new_auth):
    try:
        new_headers = {'Authorization': new_auth}
        new_result = urlfetch.fetch(
            url='https://www.googleapis.com/plus/v1/people/me',
            method=urlfetch.GET,
            headers=new_headers
        )
    except urlfetch.Error:
        logging.exception('Caught exception fetching url')
    new_data = json.loads(new_result.content)
    try:
        result_url = new_data['url']
    except:
        result_url = None
    return result_url

globalListOfStates = []
globalListOfTokens = []
initialized = False

class OauthHandler(webapp2.RequestHandler):
    def get(self):
        global globalListOfStates
        global initialized
        tempState = self.request.GET['state']
        if tempState in globalListOfStates:
            try:
                auth_code = self.request.get('code')
                headers = {'Content-Type': 'application/x-www-form-urlencoded'}
                parameters = {
                    'code': auth_code,
                    'client_id': '1058038285098-v89g24dko8rl5n0ok3tb83ja0v968d2e.apps.googleusercontent.com',
                    'client_secret': 'moAQGdNdNrkTesTpmFf-X9nP',
                    'redirect_uri': 'http://natural-region-161321.appspot.com/oauth',
                    'grant_type': 'authorization_code'
                }
                result = urlfetch.fetch(
                    url='https://www.googleapis.com/oauth2/v4/token',
                    payload=urllib.urlencode(parameters),
                    method=urlfetch.POST,
                    headers=headers
                )
            except urlfetch.Error:
                logging.exception('Caught exception fetching url')
            data = json.loads(result.content)
            access_token = data['access_token']
            globalListOfTokens.append(access_token)
            new_headers = {'Authorization': 'Bearer ' + access_token}
            new_result = urlfetch.fetch(
                url='https://www.googleapis.com/plus/v1/people/me',
                method=urlfetch.GET,
                headers=new_headers
            )
            new_data = json.loads(new_result.content)
            name = new_data['name']
            first_name = name['givenName']
            last_name = name['familyName']
            result_url = new_data['url']
            link = '<a href="' + result_url + '">' + result_url + '<a/>'
            self.response.write('First name: ' + first_name)
            self.response.write('<br \>')
            self.response.write('Last name: ' + last_name)
            self.response.write('<br \>')
            self.response.write('Google+ URL: ' + link)
            self.response.write('<br \>')
            self.response.write('New Token: ' + access_token)
        else:
            #This block is needed because for some reason the first time auth handler is called
            #After it has been launched it deletes the first entry from globalListOfStates
            #Afterwards all other entries work.
            #This block allows a passthrough for the first and then turns it off with the boolean flag
            if not initialized:
                globalListOfStates.append(tempState)
                if tempState in globalListOfStates:
                    try:
                        auth_code = self.request.get('code')
                        headers = {'Content-Type': 'application/x-www-form-urlencoded'}
                        parameters = {
                            'code': auth_code,
                            'client_id': '1058038285098-v89g24dko8rl5n0ok3tb83ja0v968d2e.apps.googleusercontent.com',
                            'client_secret': 'moAQGdNdNrkTesTpmFf-X9nP',
                            'redirect_uri': 'http://natural-region-161321.appspot.com/oauth',
                            'grant_type': 'authorization_code'
                        }
                        result = urlfetch.fetch(
                            url='https://www.googleapis.com/oauth2/v4/token',
                            payload=urllib.urlencode(parameters),
                            method=urlfetch.POST,
                            headers=headers
                        )
                    except urlfetch.Error:
                        logging.exception('Caught exception fetching url')
                    data = json.loads(result.content)
                    access_token = data['access_token']
                    new_headers = {'Authorization': 'Bearer ' + access_token}
                    new_result = urlfetch.fetch(
                        url='https://www.googleapis.com/plus/v1/people/me',
                        method=urlfetch.GET,
                        headers=new_headers
                    )
                    new_data = json.loads(new_result.content)
                    name = new_data['name']
                    first_name = name['givenName']
                    last_name = name['familyName']
                    result_url = new_data['url']
                    link = '<a href="' + result_url + '">' + result_url + '<a/>'
                    self.response.write('First name: ' + first_name)
                    self.response.write('<br \>')
                    self.response.write('Last name: ' + last_name)
                    self.response.write('<br \>')
                    self.response.write('Google+ URL: ' + link)
                    self.response.write('<br \>')
                    self.response.write('New Token: ' + access_token)
                    initialized = True


class MainPage(webapp2.RequestHandler):
    def get(self):
        global globalListOfStates
        thisState = ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(15))
        globalListOfStates.append(thisState)
        self.response.write('MAKE NEW ACCESS TOKEN')
        url = 'https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=1058038285098-v89g24dko8rl5n0ok3tb83ja0v968d2e.apps.googleusercontent.com&redirect_uri=http://natural-region-161321.appspot.com/oauth&scope=email&state=' + thisState
        try:
            result = urlfetch.fetch(url)
            if result.status_code == 200:
                self.response.write(result.content)
            else:
                self.response.status = result.status_code
        except urlfetch.Error:
            logging.exception('Caught exception fetching url')

    def delete(self):
        r = self.request.headers
        try:
            new_auth = r['Authorization']
        except:
            self.response.set_status(401)
            return
        result_url = getUserByToken(new_auth)
        if result_url != None:
            carQuery = Car.query()
            allCars = carQuery.fetch()
            if len(allCars) < 1:
                self.response.out.write("[]")
                self.response.set_status(200)
            else:
                customerQuery = Customer.query()
                allCustomers = customerQuery.fetch()
                for car in allCars:
                    for cust in allCustomers:
                        cust.checked_out = []
                        cust.put()
                    k = car.put()
                    k.delete()
                self.response.set_status(200)
            customerQuery = Customer.query()
            allCustomers = customerQuery.fetch()
            if len(allCustomers) < 1:
                self.response.out.write("[]")
                self.response.set_status(200)
            else:

                for customer in allCustomers:
                    cust_dict = customer.to_dict()
                    counter = 0
                    for n in cust_dict['checked_out']:
                        new_word = json.dumps(cust_dict['checked_out'][counter])
                        if new_word.startswith('"/cars/'):
                            new_word = new_word[8:]
                        if new_word.endswith('"'):
                            new_word = new_word[:-1]
                        car = ndb.Key(urlsafe=new_word).get()
                        car.checkedIn = True
                        car.put()
                        counter += 1
                    k = customer.put()
                    k.delete()
                self.response.set_status(200)
        else:
            self.response.set_status(401)

class CarHandler(webapp2.RequestHandler):
    def get(self, id=None):
        r = self.request.headers
        try:
            new_auth = r['Authorization']
        except:
            self.response.set_status(401)
            return
        result_url = getUserByToken(new_auth)
        if result_url != None:
            if id:
                b = ndb.Key(urlsafe=id).get()
                b_d = b.to_dict()
                if b_d['user'] == result_url:
                    b_d['self'] = "/cars/" + id
                    self.response.write(json.dumps(b_d))
                    self.response.set_status(200)
                else:
                    self.response.set_status(403)
            else:
                checkedIn_value=self.request.get('checkedIn')
                if checkedIn_value == "true":
                    qry = Car.query(Car.checkedIn == True, Car.user == result_url)
                    car_list = list()
                    for items in qry:
                        item_dict = items.to_dict()
                        car_list.append(item_dict)
                    self.response.write(json.dumps(car_list))
                elif checkedIn_value == "false":
                    qry = Car.query(Car.checkedIn == False, Car.user == result_url)
                    car_list = list()
                    for items in qry:
                        item_dict = items.to_dict()
                        car_list.append(item_dict)
                    self.response.write(json.dumps(car_list))
                else:
                    carQuery = Car.query(Car.user == result_url)
                    allCars = carQuery.fetch()
                    if len(allCars) < 1:
                        self.response.out.write("[]")
                        self.response.set_status(200)
                    else:
                        my_list = list()
                        for car in allCars:
                            my_list.append(car.to_dict())
                        self.response.write(json.dumps(my_list))
                        self.response.set_status(200)
        else:
            self.response.set_status(401)


    def post(self):
        r = self.request.headers
        try:
            new_auth = r['Authorization']
        except:
            self.response.set_status(401)
            return
        result_url = getUserByToken(new_auth)
        if result_url != None:
            car_data = json.loads(self.request.body)
            new_car = Car(model=car_data['model'], manufacturer=car_data['manufacturer'], user=result_url, id='tempID', checkedIn=car_data['checkedIn'], vin=car_data['vin'])
            new_car.put()
            new_id = new_car.key.urlsafe()
            new_car.id = new_id
            new_car.put()
            car_dict = new_car.to_dict()
            car_dict['self'] = '/cars/' + new_id
            self.response.write(json.dumps(car_dict))
            self.response.set_status(201)
        else:
            self.response.set_status(401)

    def put(self, id=None):
        r = self.request.headers
        try:
            new_auth = r['Authorization']
        except:
            self.response.set_status(401)
            return
        result_url = getUserByToken(new_auth)
        if result_url != None:
            if id:
                b = ndb.Key(urlsafe=id).get()
                b_d = b.to_dict()
                if b_d['user'] == result_url:
                    car_data = json.loads(self.request.body)
                    b.model = car_data['model']
                    b.manufacturer = car_data['manufacturer']
                    b.user = result_url
                    b.id = id
                    b.vin = car_data['vin']
                    b.checkedIn = car_data['checkedIn']
                    b.put()
                    b_d = b.to_dict()
                    b_d['self'] = "/cars/" + id
                    self.response.write(json.dumps(b_d))
                    self.response.set_status(201)
                else:
                    self.response.set_status(403)
            else:
                car_data = json.loads(self.request.body)
                new_car = Car(model=car_data['model'], manufacturer=car_data['manufacturer'], user=result_url, id='tempID', checkedIn=car_data['checkedIn'], vin=car_data['vin'])
                new_car.put()
                new_id = new_car.key.urlsafe()
                new_car.id = new_id
                new_car.put()
                car_dict = new_car.to_dict()
                car_dict['self'] = '/cars/' + new_id
                self.response.write(json.dumps(car_dict))
                self.response.set_status(201)
        else:
            self.response.set_status(401)

    def patch(self, id=None):
        r = self.request.headers
        try:
            new_auth = r['Authorization']
        except:
            self.response.set_status(401)
            return
        result_url = getUserByToken(new_auth)
        if result_url != None:
            b = ndb.Key(urlsafe=id).get()
            b_d = b.to_dict()
            if b_d['user'] == result_url:
                car_data = json.loads(self.request.body)
                if car_data.get('model'):
                    b.model = car_data['model']
                if car_data.get('manufacturer'):
                    b.manufacturer = car_data['manufacturer']
                if car_data.get('checkedIn'):
                    b.checkedIn = car_data['checkedIn']
                if car_data.get('vin'):
                    b.checkedIn = car_data['vin']
                b.put()
                b_d = b.to_dict()
                b_d['self'] = "/cars/" + id
                self.response.write(json.dumps(b_d))
                self.response.set_status(201)
            else:
                self.response.set_status(403)
        else:
            self.response.set_status(401)

    def delete(self, id=None):
        r = self.request.headers
        try:
            new_auth = r['Authorization']
        except:
            self.response.set_status(401)
            return
        result_url = getUserByToken(new_auth)
        if result_url != None:
            if id:
                b = ndb.Key(urlsafe=id).get()
                b_d = b.to_dict()
                if b_d['user'] == result_url:
                    customerQuery = Customer.query()
                    allCustomers = customerQuery.fetch()
                    for cust in allCustomers:
                        car_dict = b.to_dict()
                        car_dict['self'] = "/cars/" + id
                        cust.checked_out.remove(car_dict['self'])
                        cust.put()
                    b_d = b.to_dict()
                    b_d['self'] = "/cars/" + id
                    self.response.write(json.dumps(b_d))
                    k = b.put()
                    k.delete()
                    self.response.set_status(200)
                else:
                    self.response.set_status(403)
            else:
                carQuery = Car.query(Car.user == result_url)
                allCars = carQuery.fetch()
                if len(allCars) < 1:
                    self.response.out.write("[]")
                    self.response.set_status(200)
                else:
                    customerQuery = Customer.query()
                    allCustomers = customerQuery.fetch()
                    for car in allCars:
                        for cust in allCustomers:
                            cust.checked_out = []
                            cust.put()
                        k = car.put()
                        k.delete()
                    self.response.out.write("[]")
                    self.response.set_status(200)
        else:
            self.response.set_status(401)

class CustomerHandler(webapp2.RequestHandler):
    def get(self, id=None):
        r = self.request.headers
        try:
            new_auth = r['Authorization']
        except:
            self.response.set_status(401)
            return
        result_url = getUserByToken(new_auth)
        if result_url != None:
            if id:
                c = ndb.Key(urlsafe=id).get()
                c_d = c.to_dict()
                if c_d['user'] == result_url:
                    c_d['self'] = "/customers/" + id
                    self.response.write(json.dumps(c_d))
                    self.response.set_status(200)
                else:
                    self.response.set_status(403)
            else:
                customerQuery = Customer.query(Customer.user == result_url)
                allCustomers = customerQuery.fetch()
                if len(allCustomers) < 1:
                    self.response.out.write("[]")
                    self.response.set_status(200)
                else:
                    my_list = list()
                    for customer in allCustomers:
                        my_list.append(customer.to_dict())
                    self.response.write(json.dumps(my_list))
                    self.response.set_status(200)
        else:
            self.response.set_status(401)


    def post(self):
        r = self.request.headers
        try:
            new_auth = r['Authorization']
        except:
            self.response.set_status(401)
            return
        result_url = getUserByToken(new_auth)
        if result_url != None:
            customer_data = json.loads(self.request.body)
            new_customer = Customer(name=customer_data['name'], balance=customer_data['balance'], user=result_url, id='tempID', checked_out=customer_data['checked_out'], license=customer_data['license'])
            new_customer.put()
            new_id = new_customer.key.urlsafe()
            new_customer.id = new_id
            new_customer.put()
            customer_dict = new_customer.to_dict()
            customer_dict['self'] = '/customers/' + new_customer.key.urlsafe()
            self.response.write(json.dumps(customer_dict))
            self.response.set_status(201)
        else:
            self.response.set_status(401)

    def put(self, id=None):
        r = self.request.headers
        try:
            new_auth = r['Authorization']
        except:
            self.response.set_status(401)
            return
        result_url = getUserByToken(new_auth)
        if result_url != None:
            if id:
                c = ndb.Key(urlsafe=id).get()
                c_d = c.to_dict()
                if c_d['user'] == result_url:
                    customer_data = json.loads(self.request.body)
                    c.name = customer_data['name']
                    c.balance = customer_data['balance']
                    c.checked_out = customer_data['checked_out']
                    c.id = id
                    c.license = customer_data['license']
                    c.user = result_url
                    c.put()
                    c_d = c.to_dict()
                    c_d['self'] = "/customers/" + id
                    self.response.write(json.dumps(c_d))
                    self.response.set_status(201)
                else:
                    self.response.set_status(403)
            else:
                customer_data = json.loads(self.request.body)
                new_customer = Customer(name=customer_data['name'], balance=customer_data['balance'], user=result_url, id='tempID', checked_out=customer_data['checked_out'], license=customer_data['license'])
                new_customer.put()
                new_id = new_customer.key.urlsafe()
                new_customer.id = new_id
                new_customer.put()
                customer_dict = new_customer.to_dict()
                customer_dict['self'] = '/customers/' + new_customer.key.urlsafe()
                self.response.write(json.dumps(customer_dict))
                self.response.set_status(201)
        else:
            self.response.set_status(401)

    def patch(self, id=None):
        r = self.request.headers
        try:
            new_auth = r['Authorization']
        except:
            self.response.set_status(401)
            return
        result_url = getUserByToken(new_auth)
        if result_url != None:
            c = ndb.Key(urlsafe=id).get()
            c_d = c.to_dict()
            if c_d['user'] == result_url:
                customer_data = json.loads(self.request.body)
                if customer_data.get('name'):
                    c.name = customer_data['name']
                if customer_data.get('balance'):
                    c.balance = customer_data['balance']
                if customer_data.get('checked_out'):
                    c.checked_out = customer_data['checked_out']
                if customer_data.get('license'):
                    c.checked_out = customer_data['license']
                c.put()
                c_d = c.to_dict()
                c_d['self'] = "/customers/" + id
                self.response.write(json.dumps(c_d))
                self.response.set_status(201)
            else:
                self.response.set_status(403)
        else:
            self.response.set_status(401)

    def delete(self, id=None):
        r = self.request.headers
        try:
            new_auth = r['Authorization']
        except:
            self.response.set_status(401)
            return
        result_url = getUserByToken(new_auth)
        if result_url != None:
            if id:
                c = ndb.Key(urlsafe=id).get()
                cust_dict = c.to_dict()
                if cust_dict['user'] == result_url:
                    counter = 0
                    for n in cust_dict['checked_out']:
                        new_word = json.dumps(cust_dict['checked_out'][counter])
                        if new_word.startswith('"/cars/'):
                            new_word = new_word[8:]
                        if new_word.endswith('"'):
                            new_word = new_word[:-1]
                        car = ndb.Key(urlsafe=new_word).get()
                        car.checkedIn = True
                        car.put()
                        counter += 1
                    c_d = c.to_dict()
                    c_d['self'] = "/customers/" + id
                    self.response.write(json.dumps(c_d))
                    k = c.put()
                    k.delete()
                    self.response.set_status(200)
                else:
                    self.response.set_status(403)
            else:
                customerQuery = Customer.query(Customer.user == result_url)
                allCustomers = customerQuery.fetch()
                if len(allCustomers) < 1:
                    self.response.out.write("[]")
                    self.response.set_status(200)
                else:
                    for customer in allCustomers:
                        cust_dict = customer.to_dict()
                        counter = 0
                        for n in cust_dict['checked_out']:
                            new_word = json.dumps(cust_dict['checked_out'][counter])
                            if new_word.startswith('"/cars/'):
                                new_word = new_word[8:]
                            if new_word.endswith('"'):
                                new_word = new_word[:-1]
                            car = ndb.Key(urlsafe=new_word).get()
                            car.checkedIn = True
                            car.put()
                            counter += 1
                        k = customer.put()
                        k.delete()
                    self.response.out.write("[]")
                    self.response.set_status(200)
        else:
            self.response.set_status(401)


class CheckInHandler(webapp2.RequestHandler):
    def get(self, cust_id=None, car_id=None):
        r = self.request.headers
        try:
            new_auth = r['Authorization']
        except:
            self.response.set_status(401)
            return
        result_url = getUserByToken(new_auth)
        if result_url != None:
            if car_id:
                cust = ndb.Key(urlsafe=cust_id).get()
                car = ndb.Key(urlsafe=car_id).get()
                car_dict = car.to_dict()
                cust_dict = cust.to_dict()
                if cust_dict['user'] == result_url and car_dict['user'] == result_url:
                    car_dict['self'] = "/cars/" + car_id
                    self.response.write(json.dumps(car_dict))
                    self.response.set_status(200)
                else:
                    self.response.set_status(403)
            else:
                cust = ndb.Key(urlsafe=cust_id).get()
                my_list = list()
                cust_dict = cust.to_dict()
                if cust_dict['user'] == result_url:
                    counter = 0
                    for n in cust_dict['checked_out']:
                        new_word = json.dumps(cust_dict['checked_out'][counter])
                        if new_word.startswith('"/cars/'):
                            new_word = new_word[8:]
                        if new_word.endswith('"'):
                            new_word = new_word[:-1]
                        car = ndb.Key(urlsafe=new_word).get()
                        car_dict = car.to_dict()
                        car_dict['self'] = "/cars/" + new_word
                        my_list.append(car_dict)
                        counter += 1
                    self.response.write(my_list)
                    self.response.set_status(200)
                else:
                    self.response.set_status(403)
        else:
            self.response.set_status(401)

    def put(self, cust_id=None, car_id=None):
        r = self.request.headers
        try:
            new_auth = r['Authorization']
        except:
            self.response.set_status(401)
            return
        result_url = getUserByToken(new_auth)
        if result_url != None:
            cust = ndb.Key(urlsafe=cust_id).get()
            car = ndb.Key(urlsafe=car_id).get()
            car_dict = car.to_dict()
            cust_dict = cust.to_dict()
            if cust_dict['user'] == result_url and car_dict['user'] == result_url:
                car_dict['self'] = "/cars/" + car_id
                cust.checked_out.append(car_dict['self'])
                car.checkedIn = False
                cust.put()
                car.put()
                self.response.set_status(201)
            else:
                self.response.set_status(403)
        else:
            self.response.set_status(401)

    def delete(self, cust_id=None, car_id=None):
        r = self.request.headers
        try:
            new_auth = r['Authorization']
        except:
            self.response.set_status(401)
            return
        result_url = getUserByToken(new_auth)
        if result_url != None:
            cust = ndb.Key(urlsafe=cust_id).get()
            car = ndb.Key(urlsafe=car_id).get()
            car_dict = car.to_dict()
            cust_dict = cust.to_dict()
            if cust_dict['user'] == result_url and car_dict['user'] == result_url:
                car_dict['self'] = "/cars/" + car_id
                cust.checked_out.remove(car_dict['self'])
                car.checkedIn = True
                cust.put()
                car.put()
                self.response.set_status(200)
            else:
                self.response.set_status(403)
        else:
            self.response.set_status(401)

allowed_methods = webapp2.WSGIApplication.allowed_methods
new_allowed_methods = allowed_methods.union(('PATCH',))
webapp2.WSGIApplication.allowed_methods = new_allowed_methods
app = webapp2.WSGIApplication([
    ('/', MainPage),
    ('/customers/(.*)/cars', CheckInHandler),
    ('/customers/(.*)/cars/(.*)', CheckInHandler),
    ('/cars', CarHandler),
    ('/cars/(.*)', CarHandler),
    ('/customers', CustomerHandler),
    ('/customers/(.*)', CustomerHandler),
    ('/oauth', OauthHandler)
], debug=True)
