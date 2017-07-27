var waveOneOne;
var waveOneTwo;
var waveOneThree;
var waveOneFour;
var waveOneFive;
var waveOneSix;
var waveOneSeven;
var waveOneEight;
var waveOneNine;
var waveOneTen;

function enemyManager(){
	waveOneOne = setTimeout(waveOne, 15000, true);
	waveOneTwo = setTimeout(waveOne, 40000, true);
	waveOneThree = setTimeout(waveTwo, 65000, true);
	waveOneFour = setTimeout(waveTwo, 90000, true);
	waveOneFive = setTimeout(waveThree, 115000, true);
	waveOneSix = setTimeout(waveThree, 140000, true);
	waveOneSeven = setTimeout(waveFour, 165000, true);
	waveOneEight = setTimeout(waveFive, 197000, true);
	waveOneNine = setTimeout(waveSix, 229000, true);
	waveOneTen = setTimeout(waveSeven, 261000, true);

};

function enemyManagerStop(){
	clearTimeout(waveOneOne);
	clearTimeout(waveOneTwo);
	clearTimeout(waveOneThree);
	clearTimeout(waveOneFour);
	clearTimeout(waveOneFive);
	clearTimeout(waveOneSix);
	clearTimeout(waveOneSeven);
	clearTimeout(waveOneEight);
	clearTimeout(waveOneNine);
	clearTimeout(waveOneTen);
}

function enemyManager2(){
	waveOneOne = setTimeout(waveOne2, 15000, true);
	waveOneTwo = setTimeout(waveOne2, 37000, true);
	waveOneThree = setTimeout(waveTwo2, 59000, true);
	waveOneFour = setTimeout(waveTwo2, 81000, true);
	waveOneFive = setTimeout(waveThree2, 103000, true);
	waveOneSix = setTimeout(waveThree2, 125000, true);
	waveOneSeven = setTimeout(waveFour2, 140000, true);
	waveOneEight = setTimeout(waveFive2, 155000, true);
	waveOneNine = setTimeout(waveSix2, 170000, true);
	waveOneTen = setTimeout(waveSeven2, 185000, true);
};

function enemyManager3(){
	waveOneOne = setTimeout(waveOne3, 15000, true);
	waveOneTwo = setTimeout(waveTwo3, 36000, true);
	waveOneThree = setTimeout(waveThree3, 75000, true);
	waveOneFour = setTimeout(waveFour3, 90000, true);
	waveOneFive = setTimeout(waveFive3, 108000, true);
	waveOneSix = setTimeout(waveSix3, 126000, true);
	waveOneSeven = setTimeout(waveSeven3, 151000, true);
	waveOneEight = setTimeout(waveSeven3, 169000, true);
	waveOneNine = setTimeout(waveEight3, 187000, true);
	waveOneTen = setTimeout(waveNine3, 212000, true);
};

function enemyManager4(){
	waveOneOne = setTimeout(waveOne4, 15000, true);
	waveOneTwo = setTimeout(waveTwo4, 36000, true);
	waveOneThree = setTimeout(waveThree4, 75000, true);
	waveOneFour = setTimeout(waveFour4, 90000, true);
	waveOneFive = setTimeout(waveFive4, 108000, true);
	waveOneSix = setTimeout(waveSix4, 126000, true);
	waveOneSeven = setTimeout(waveSeven4, 151000, true);
	waveOneEight = setTimeout(waveEight4, 169000, true);
	waveOneNine = setTimeout(waveNine4, 187000, true);
	waveOneTen = setTimeout(waveTen4, 212000, true);
};

function waveOne(){

	me.game.world.addChild(me.pool.pull("Enemy", 1*32, 6*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 1*32, 12*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 13*32, 1*32), 3);
	game.data.wave += 1;
}

function waveTwo(){

	me.game.world.addChild(me.pool.pull("Enemy", 1*32, 6*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 1*32, 12*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 13*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 17*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 13*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 17*32, 19*32), 3);
	game.data.wave += 1;
}


function waveThree(){

	me.game.world.addChild(me.pool.pull("Enemy", 1*32, 6*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 1*32, 12*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 13*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 17*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 13*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 17*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 2*32, 6*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 2*32, 12*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 18*32, 1*32), 3);
	game.data.wave += 1;
}


function waveFour(){

	me.game.world.addChild(me.pool.pull("Enemy", 1*32, 6*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 1*32, 12*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 13*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 17*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 13*32, 19*32), 3);
	game.data.wave += 1;
}


function waveFive(){

	me.game.world.addChild(me.pool.pull("Enemy2", 1*32, 6*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 1*32, 12*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 13*32, 1*32), 3);
	game.data.wave += 1;
}

function waveSix(){
	me.game.world.addChild(me.pool.pull("Enemy", 1*32, 6*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 1*32, 12*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 13*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 17*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 13*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 17*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 2*32, 6*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 2*32, 12*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 18*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 18*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 1*32, 7*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 1*32, 13*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 14*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 14*32, 19*32), 3);
	game.data.wave += 1;
}

function waveSeven(){
	me.game.world.addChild(me.pool.pull("Enemy", 1*32, 6*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 1*32, 12*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 13*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 17*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 13*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 17*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 2*32, 6*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 2*32, 12*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 18*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 18*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 1*32, 7*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 1*32, 13*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 14*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 14*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3*32, 6*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3*32, 12*32), 3);
	game.data.wave += 1;
}
	
function waveOne2(){
	me.game.world.addChild(me.pool.pull("Enemy", 24*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 25*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 26*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 27*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 28*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 24*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 25*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 26*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 27*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 28*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 18*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 17*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 16*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 14*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 13*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 12*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 27*32, 2*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 28*32, 2*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 28*32, 18*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 27*32, 18*32), 3);
	game.data.wave += 1;
}

function waveTwo2(){
	me.game.world.addChild(me.pool.pull("Enemy", 24*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 25*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 26*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 27*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 28*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 24*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 25*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 26*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 27*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 28*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 18*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 17*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 16*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 14*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 13*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 12*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 27*32, 2*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 28*32, 2*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 28*32, 18*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 27*32, 18*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 26*32, 2*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 25*32, 2*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 26*32, 18*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 25*32, 18*32), 3);
	game.data.wave += 1;
}

function waveThree2(){
	me.game.world.addChild(me.pool.pull("Enemy", 24*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 25*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 26*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 27*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 28*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 24*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 25*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 26*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 27*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 28*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 18*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 17*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 16*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 14*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 13*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 12*32, 19*32), 3);
	game.data.wave += 1;
}

function waveFour2() {
	me.game.world.addChild(me.pool.pull("Enemy3", 24 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 25 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 26 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 27 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 28 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 24 * 32, 19 * 32), 3);
	game.data.wave += 1;
}

function waveFive2(){
	me.game.world.addChild(me.pool.pull("Enemy", 24*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 25*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 26*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 27*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 28*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 24*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 25*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 26*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 27*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 28*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 18*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 17*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 16*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 14*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 13*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 12*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 27*32, 2*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 28*32, 2*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 28*32, 18*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 27*32, 18*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 26*32, 2*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 25*32, 2*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 26*32, 18*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 25*32, 18*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 26*32, 17*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 25*32, 17*32), 3);
	game.data.wave += 1;
}

function waveSix2() {
	me.game.world.addChild(me.pool.pull("Enemy3", 24 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 25 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 26 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 27 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 28 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 24 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 25 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 26 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 27 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 28 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 18 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 17 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 16 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 14 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 13 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 12 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 27 * 32, 2 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 28 * 32, 2 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 28 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 27 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 26 * 32, 2 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 25 * 32, 2 * 32), 3);
	game.data.wave += 1;
}

function waveSeven2() {
	me.game.world.addChild(me.pool.pull("Enemy", 24 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 25 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 26 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 27 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 28 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 24 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 25 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 26 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 27 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 28 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 18 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 17 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 16 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 14 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 13 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 12 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 27 * 32, 2 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 28 * 32, 2 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 28 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 27 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 26 * 32, 2 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 25 * 32, 2 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 26 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 25 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 26 * 32, 17 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 25 * 32, 17 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 26 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 25 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 26 * 32, 17 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 25 * 32, 17 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 24 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 25 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 26 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 27 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 28 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 24 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 25 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 26 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 27 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 28 * 32, 19 * 32), 3);
	game.data.wave += 1;
}

function waveOne3(){
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 2 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 3 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 4 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 5 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 6 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 7 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 8 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 9 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 10 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 11 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 12 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 13 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 14 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 15 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 16 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 17 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 2 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 3 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 4 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 5 * 32), 3);
	game.data.wave += 1;
}

function waveTwo3(){
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 3 * 32, 2 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 3 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 3 * 32, 4 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 5 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 3 * 32, 6 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 7 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 3 * 32, 8 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 9 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 3 * 32, 10 * 32), 3);
	game.data.wave += 1;
}

function waveThree3(){
	me.game.world.addChild(me.pool.pull("Enemy3", 3 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 3 * 32, 2 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 3 * 32, 3 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 3 * 32, 4 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 3 * 32, 5 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 3 * 32, 6 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 3 * 32, 7 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 3 * 32, 8 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 3 * 32, 9 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 3 * 32, 10 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 3 * 32, 11 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 3 * 32, 12 * 32), 3);
	game.data.wave += 1;
}

function waveFour3(){
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 2 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 3 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 4 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 5 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 6 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 7 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 8 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 9 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 10 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 11 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 12 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 13 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 14 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 15 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 16 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 17 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 2 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 3 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 4 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 5 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 6 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 7 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 8 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 9 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 10 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 11 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 12 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 13 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 14 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 15 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 16 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 17 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 5 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 5 * 32, 2 * 32), 3);
	game.data.wave += 1;
}

function waveFive3(){
	me.game.world.addChild(me.pool.pull("Enemy3", 3 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 3 * 32, 2 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 3 * 32, 3 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 3 * 32, 4 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 3 * 32, 5 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 3 * 32, 6 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 3 * 32, 7 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 3 * 32, 8 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 3 * 32, 9 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 3 * 32, 10 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 11 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 12 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 13 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 14 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 15 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 16 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 17 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 2 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 3 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 4 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 5 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 6 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 7 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 8 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 9 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 10 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 11 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 12 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 13 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 14 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 15 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 16 * 32), 3);
	game.data.wave += 1;
}

function waveSix3(){
	me.game.world.addChild(me.pool.pull("Enemy2", 3 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 3 * 32, 2 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 3 * 32, 3 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 3 * 32, 4 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 3 * 32, 5 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 3 * 32, 6 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 3 * 32, 7 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 3 * 32, 8 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 3 * 32, 9 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 3 * 32, 10 * 32), 3);
	game.data.wave += 1;
}

function waveSeven3(){
	me.game.world.addChild(me.pool.pull("Enemy2", 3 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 2 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 3 * 32, 3 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 4 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 3 * 32, 5 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 6 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 3 * 32, 7 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 8 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 3 * 32, 9 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 10 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 3 * 32, 11 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 12 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 3 * 32, 13 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 14 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 3 * 32, 15 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 16 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 3 * 32, 17 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 3 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 4 * 32, 2 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 3 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 4 * 32, 4 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 5 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 6 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 7 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 8 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 9 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 10 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 11 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 12 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 13 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 14 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 15 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 16 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 17 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 18 * 32), 3);
	game.data.wave += 1;
}

function waveEight3(){
	me.game.world.addChild(me.pool.pull("Enemy2", 3 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 3 * 32, 2 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 3 * 32, 3 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 3 * 32, 4 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 3 * 32, 5 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 3 * 32, 6 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 3 * 32, 7 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 3 * 32, 8 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 3 * 32, 9 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 3 * 32, 10 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 3 * 32, 11 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 3 * 32, 12 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 3 * 32, 13 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 3 * 32, 14 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 3 * 32, 15 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 3 * 32, 16 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 3 * 32, 17 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 3 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 3 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 4 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 4 * 32, 2 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 4 * 32, 3 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 4 * 32, 4 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 4 * 32, 5 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 4 * 32, 6 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 4 * 32, 7 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 8 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 9 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 10 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 11 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 12 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 13 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 14 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 15 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 16 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 17 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 5 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 5 * 32, 2 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 5 * 32, 3 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 5 * 32, 4 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 5 * 32, 5 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 5 * 32, 6 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 5 * 32, 7 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 5 * 32, 8 * 32), 3);
	game.data.wave += 1;
}

function waveNine3(){
	me.game.world.addChild(me.pool.pull("Enemy4", 3 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 2 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 3 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 4 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 5 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 6 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 7 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 8 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 9 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 10 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 11 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 12 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 13 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 14 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 15 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 16 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 17 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 2 * 32), 3);
	game.data.wave += 1;
}

function waveOne4(){
	me.game.world.addChild(me.pool.pull("Enemy2", 6 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 7 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 8 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 9 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 10 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 15 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 16 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 17 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 18 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 22 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 23 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 24 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 25 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 6 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 7 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 8 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 9 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 10 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 15 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 16 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 17 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 18 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 22 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 23 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 24 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 25 * 32, 18 * 32), 3);
	game.data.wave += 1;
}

function waveTwo4(){
	me.game.world.addChild(me.pool.pull("Enemy2", 6 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 7 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 8 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 9 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 10 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 15 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 16 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 17 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 18 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 22 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 23 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 24 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 25 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 6 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 7 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 8 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 9 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 10 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 15 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 16 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 17 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 18 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 22 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 23 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 24 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 25 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 25 * 32, 17 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 6 * 32, 17 * 32), 3);
	game.data.wave += 1;
}

function waveThree4(){
	me.game.world.addChild(me.pool.pull("Enemy2", 6 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 7 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 8 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 9 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 10 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 15 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 16 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 17 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 18 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 22 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 23 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 24 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 25 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 6 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 7 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 8 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 9 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 10 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 15 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 16 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 17 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 18 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 23 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 24 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 25 * 32, 18 * 32), 3);
	game.data.wave += 1;
}

function waveFour4(){
	me.game.world.addChild(me.pool.pull("Enemy", 6 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 7 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 8 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 9 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 10 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 15 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 16 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 17 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 18 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 22 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 23 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 24 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 25 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 6 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 7 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 8 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 9 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 10 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 15 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 16 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 17 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 18 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 22 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 23 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 24 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 25 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 2 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 5 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 11 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 12 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 13 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 14 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 19 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 20 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 21 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 26 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 27 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 28 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 29 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 25 * 32, 17 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 6 * 32, 17 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 7 * 32, 17 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 8 * 32, 17 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 9 * 32, 17 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 10 * 32, 17 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 11 * 32, 17 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 12 * 32, 17 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 13 * 32, 17 * 32), 3);
	game.data.wave += 1;
}

function waveFive4(){
	me.game.world.addChild(me.pool.pull("Enemy2", 6 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 7 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 8 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 9 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 10 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 15 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 16 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 17 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 18 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 22 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 23 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 24 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 25 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 6 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 7 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 8 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 9 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 10 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 15 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 16 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 17 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 18 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 22 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 23 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 24 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 25 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 2 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 4 * 32, 18 * 32), 3);
	game.data.wave += 1;
}
function waveSix4(){
	me.game.world.addChild(me.pool.pull("Enemy3", 6 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 7 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 8 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 9 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 10 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 15 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 16 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 17 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 18 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 22 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 23 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 24 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 25 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 6 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 7 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 8 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 9 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 10 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 15 * 32, 18 * 32), 3);
	game.data.wave += 1;
}

function waveSeven4(){
	me.game.world.addChild(me.pool.pull("Enemy2", 6 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 7 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 8 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 9 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 10 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy4", 15 * 32, 19 * 32), 3);
	game.data.wave += 1;
}

function waveEight4(){
	me.game.world.addChild(me.pool.pull("Enemy2", 6 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 7 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 8 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 9 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 10 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 15 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 16 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 17 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 18 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 22 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 23 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 24 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 25 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 6 * 32, 18 * 32), 3);
	game.data.wave += 1;
}

function waveNine4(){
	me.game.world.addChild(me.pool.pull("Enemy2", 6 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 7 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 8 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 9 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 10 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 15 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 16 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 17 * 32, 19 * 32), 3);
	game.data.wave += 1;
}

function waveTen4(){
	me.game.world.addChild(me.pool.pull("Enemy4", 6 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy4", 7 * 32, 19 * 32), 3);
	game.data.wave += 1;
}
