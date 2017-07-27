-- Ryan Fleming
-- CS 340 Final Project

-- Tables



CREATE TABLE brewery (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
address VARCHAR(255) NOT NULL,
phone VARCHAR(255) NOT NULL,
website VARCHAR(255) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE region (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE glassware (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE pairing (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE temperature (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL
) ENGINE=InnoDB;


CREATE TABLE style (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
description VARCHAR(255) NOT NULL,
glassware_id INT,
pairing_id INT,
temperature_id INT,
FOREIGN KEY (glassware_id) REFERENCES glassware (id) ON DELETE CASCADE,
FOREIGN KEY (pairing_id) REFERENCES pairing (id) ON DELETE CASCADE,
FOREIGN KEY (temperature_id) REFERENCES temperature (id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE beer (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
description VARCHAR(255) NOT NULL,
availability VARCHAR(255) NOT NULL,
abv VARCHAR(255) NOT NULL,
style_id INT,
brewery_id INT,
FOREIGN KEY (style_id) REFERENCES style (id) ON DELETE CASCADE,
FOREIGN KEY (brewery_id) REFERENCES brewery (id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- relationships

CREATE TABLE market (
beer_id INT NOT NULL,
region_id INT NOT NULL,
PRIMARY KEY (beer_id, region_id),
FOREIGN KEY (beer_id) REFERENCES beer (id) ON DELETE CASCADE,
FOREIGN KEY (region_id) REFERENCES region (id) ON DELETE CASCADE
) ENGINE=InnoDB;


-- insert
INSERT INTO brewery (name, address, phone, website)
VALUES ('Russian River Brewing Company', '725 4th St Santa Rosa, California 95405 United States', '(707)545-2337', 'www.rrbeer.com'), ('The Alchemist', '35 Crossroad Waterbury, Vermont 05676 United States', '(802)244-7744', 'www.alchemistbeer.com'), ('Brouwerij Westvleteren', 'Donkerstraat 12 Westvleteren, 8640 Belgium', '+32 (0)57 40 03 76', 'www.sintsixtus.be'), ('Founders Brewing Company', '235 Grandville Ave SW Grand Rapids, Michigan 49503 United States', '(616)776-1195', 'www.foundersbrewing.com'), ('Brasserie Cantillon', 'Rue Gheude 56 Anderlecht Brussels, 1070 Belgium', '+32 25 21 49 28', 'www.cantillon.be'), ('Goose Island Beer Co.', '1800 W Fulton St Chicago Illinois 60612 United States', '(312)226-1119', 'www.gooseisland.com'), ('3 Floyds Brewing Co.', '9750 Indiana Pkwy Munster, Indiana 46321 United States', '(219)922-4425', 'www.3floyds.com');

INSERT INTO region (name)
VALUES ('Great Lakes'), ('Mid-Atlantic'), ('Midwest'), ('Mountain'), ('New England'), ('Northwest'), ('Pacific'), ('South'), ('South-Atlantic'), ('Southwest'), ('Belgium');

INSERT INTO glassware (name)
VALUES ('Snifter, Tulip, Oversized Wine Glass'), ('Snifter, Tulip, Goblet (or Chalice)'), ('Pint Glass (or Becker, Nonic, Tumbler), Snifter, Oversized Wine Glass'), ('Flute, Snifter, Tulip, Stange (Slender Cylinder)'), ('Flute, Tulip, Oversized Wine Glass'), ('Goblet (or Chalice)'), ('Pint Glass (or Becker, Nonic, Tumbler), Snifter');

INSERT INTO pairing (name)
VALUES ('Cuisine (Barbecue) Cheese (peppery; Monterey / Pepper Jack, sharp; Blue, Cheddar, pungent; Gorgonzola, Limburger) Meat (Game, Grilled Meat, Salmon)'), ('Cheese (buttery; Brie, Gouda, Havarti, Swiss, sharp; Blue, Cheddar) General (Digestive) Meat (Beef, Smoked Meat, Game)'), ('Cheese (buttery; Brie, Gouda, Havarti, Swiss) General (Chocolate, Digestive) Meat (Beef, Smoked Meat, Game, Grilled Meat)'), ('General (Chocolate, Salad, Dessert, Apéritif)'), ('Cheese (peppery; Monterey / Pepper Jack, pungent; Gorgonzola, Limburger) General (Salad)'), ('General (Chocolate, Dessert, Digestive)'), ('Cheese (buttery; Brie, Gouda, Havarti, Swiss, pungent; Gorgonzola, Limburger) General (Chocolate) Meat (Beef)');

INSERT INTO temperature (name)
VALUES ('Cellar @ 45-50F, Serve @ 50-55F'), ('Cellar @ 45-50F, Serve @ 45-50F'), ('Cellar @ 40-45F, Serve @ 45-50F');

