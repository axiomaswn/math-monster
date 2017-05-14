var body = document.body;
var energyPlayer  = 0;
var energyMonster = 0;
var waktuTimeoutMonster = '';
var berhentiAnimasiGame = '';
var berhentiAnimasiDepan ='';
var henti1 = '', henti2 = '', henti3 = '', henti4 = '', henti5 = '', henti6='', henti7='', henti8='', henti9='', henti10='';

kontenJS = document.createElement('div');
kontenJS.setAttribute('id', 'konten');
body.appendChild(kontenJS);

playerDepan = document.createElement('img');
playerDepan.setAttribute('id','animasiDepan');
kontenJS.appendChild(playerDepan);

buttonPlayJS = document.createElement('button');
buttonPlayJS.setAttribute('id','buttonPlay');
buttonMulaiText = document.createTextNode('play');
buttonPlayJS.appendChild(buttonMulaiText);

buttonPlayAgainJS = document.createElement('button');
buttonPlayAgainJS.setAttribute('id','buttonPlayAgain');
buttonLagiText = document.createTextNode('play again');
buttonPlayAgainJS.appendChild(buttonLagiText);

inputanJS = document.createElement('input');
inputanJS.setAttribute('type','text');
inputanJS.setAttribute('maxlength','4');
inputanJS.setAttribute('id','inputanJawab');

waktuJS = document.createElement('h3');
waktuJS.setAttribute('id','hitungWaktu');
waktuJSText = document.createTextNode('');
waktuJS.appendChild(waktuJSText);

soal = document.createElement('h1');
soal.setAttribute('id','soal');
soalText = document.createTextNode('');
soal.appendChild(soalText);

energyP = document.createElement('h2');
energyP.setAttribute('id','energyP');
energyPText = document.createTextNode('Energy '+energyPlayer);
energyP.appendChild(energyPText);

energyM = document.createElement('h2');
energyM.setAttribute('id','energyM');
energyMText = document.createTextNode('Mons+er '+energyMonster);
energyM.appendChild(energyMText);

hitP = document.createElement('h5');
hitP.setAttribute('id','playerHit');
hitPText = document.createTextNode('');
hitP.appendChild(hitPText);

hitM = document.createElement('h5');
hitM.setAttribute('id','monsterHit');
hitMText = document.createTextNode('');
hitM.appendChild(hitMText);

keteranganMain = document.createElement('h5');
keteranganMain.setAttribute('id','keterangan');
keteranganMainText = document.createTextNode('submit your answer and press enter');
keteranganMain.appendChild(keteranganMainText);

playerCharJS = document.createElement('img');
playerCharJS.setAttribute('id','playerChar');
kontenJS.appendChild(playerCharJS);
document.getElementById("playerChar").src = "images/player/playerHit.png";

monsterCharJS = document.createElement('img');
monsterCharJS.setAttribute('id','monsterChar');
kontenJS.appendChild(monsterCharJS);
document.getElementById("monsterChar").src = "images/monster/monsterHit.png";
//background all
backgroundHomeJS = document.createElement('img');
backgroundHomeJS.setAttribute('id','backgroundHome');
kontenJS.appendChild(backgroundHomeJS);
document.getElementById("backgroundHome").src = 'images/background/main.png';

backgroundCaraJS = document.createElement('img');
backgroundCaraJS.setAttribute('id','backgroundCara');
kontenJS.appendChild(backgroundCaraJS);
document.getElementById("backgroundCara").src = 'images/background/cara.png';

backgroundLoseJS = document.createElement('img');
backgroundLoseJS.setAttribute('id','backgroundLose');
kontenJS.appendChild(backgroundLoseJS);
document.getElementById("backgroundLose").src = 'images/background/lose.png';

backgroundWinJS = document.createElement('img');
backgroundWinJS.setAttribute('id','backgroundWin');
kontenJS.appendChild(backgroundWinJS);
document.getElementById("backgroundWin").src = 'images/background/win.png';

backgroundGameJS = document.createElement('img');
backgroundGameJS.setAttribute('id','backgroundGame');
kontenJS.appendChild(backgroundGameJS);
document.getElementById("backgroundGame").src = 'images/background/game.png';

backgroundInputJS = document.createElement('img');
backgroundInputJS.setAttribute('id','backgroundInput');
kontenJS.appendChild(backgroundInputJS);
document.getElementById("backgroundInput").src = 'images/background/input.png';

backgroundHighscoreJS = document.createElement('img');
backgroundHighscoreJS.setAttribute('id','backgroundHighscore');
kontenJS.appendChild(backgroundHighscoreJS);
document.getElementById("backgroundHighscore").src = 'images/background/highscore.png';

// end background all
function fungsiAnimasiDepan() {
	z = (z === images.length - 1) ? 0 : z + 1;
	document.getElementById("animasiDepan").src = images[z];
}
var images = [], z = -1;
var images = [
	"images/player/frame-1.png",
	"images/player/frame-2.png",
	"images/player/frame-3.png",
	"images/player/frame-4.png",
	"images/player/frame-5.png",
	"images/player/frame-6.png",
], z = -1;

function fungsiMulaiAnimasiDepan() {
	berhentiAnimasiDepan = setInterval(fungsiAnimasiDepan, 150);
};
fungsiMulaiAnimasiDepan();
document.getElementById("animasiDepan").style.visibility='hidden';

function fungsiAnimasiGame() {
	xx = (xx === playerPict.length - 1) ? 0 : xx + 1;
	document.getElementById("playerChar").src = playerPict[xx];
	yy = (yy === monsterPict.length - 1) ? 0 : yy + 1;
	document.getElementById("monsterChar").src = monsterPict[yy];
};
var playerPict = ["images/player/player1.png","images/player/player2.png"], xx = -1;
var monsterPict = ["images/monster/monster2.png","images/monster/monster1.png"], yy = -1;

function fungsiMulaiAnimasiGame() {
	berhentiAnimasiGame = setInterval(fungsiAnimasiGame, 700);
};
fungsiMulaiAnimasiGame();
document.getElementById('monsterChar').style.visibility ='hidden';
document.getElementById('playerChar').style.visibility ='hidden';

// fungsi button klik
buttonPlayJS.addEventListener('click', function() {
	kontenJS.removeChild(buttonPlayJS);
	fungsiCara();
});
buttonPlayAgainJS.addEventListener('click', function() {
	kontenJS.removeChild(buttonPlayAgainJS);
	fungsiCara();
});
// end fungsi button klik
function mulaiHitungWaktu(){
	henti1 = setTimeout(function(){
	document.getElementById('hitungWaktu').innerHTML = '10';
	},800);
	henti2 = setTimeout(function(){
	document.getElementById('hitungWaktu').innerHTML = '9';
	},1600);
	henti3 = setTimeout(function(){
	document.getElementById('hitungWaktu').innerHTML = '8';
	},2400);
	henti4 = setTimeout(function(){
	document.getElementById('hitungWaktu').innerHTML = '7';
	},3200);
	henti5 = setTimeout(function(){
	document.getElementById('hitungWaktu').innerHTML = '6';
	},4000);
	henti6 = setTimeout(function(){
	document.getElementById('hitungWaktu').innerHTML = '5';
	},4800);
	henti7 = setTimeout(function(){
	document.getElementById('hitungWaktu').innerHTML = '4';
	},5600);
	henti8 = setTimeout(function(){
	document.getElementById('hitungWaktu').innerHTML = '3';
	},6400);
	henti9 = setTimeout(function(){
	document.getElementById('hitungWaktu').innerHTML = '2';
	},7200);
	henti10 = setTimeout(function(){
	document.getElementById('hitungWaktu').innerHTML = '1';
	},8000);
}
function hentikanWaktu(){
    clearTimeout(henti1);
    clearTimeout(henti2);
    clearTimeout(henti3);
    clearTimeout(henti4);
    clearTimeout(henti5);
    clearTimeout(henti6);
    clearTimeout(henti7);
    clearTimeout(henti8);
    clearTimeout(henti9);
    clearTimeout(henti10);
};

function loadingAwal(){
	loadingIconJS = document.createElement('img');
	loadingIconJS.setAttribute('id','loadingIcon');
	kontenJS.appendChild(loadingIconJS);
	document.getElementById("loadingIcon").src = 'images/background/comment.gif';

	loadingTextJS = document.createElement('h1');
	loadingTextJS.setAttribute('id','loadingText');
	loadingTextJSText = document.createTextNode('NOw loadinG');
	loadingTextJS.appendChild(loadingTextJSText);

	kontenJS.appendChild(loadingTextJS);
	kontenJS.removeChild(backgroundGameJS);
	kontenJS.removeChild(backgroundWinJS);
	kontenJS.removeChild(backgroundLoseJS);
	kontenJS.removeChild(backgroundCaraJS);
	kontenJS.removeChild(backgroundHomeJS);
	kontenJS.removeChild(backgroundInputJS);
	kontenJS.removeChild(backgroundHighscoreJS);
	setTimeout(function() {
		home();
	}, 5000);
}

function home(){
	kontenJS.removeChild(loadingTextJS);
	kontenJS.removeChild(loadingIconJS);
	suaraMenu.play();
	kontenJS.appendChild(buttonPlayJS);
	kontenJS.appendChild(backgroundHomeJS);
	document.getElementById("animasiDepan").style.visibility='visible';
};

function fungsiCara(){
	energyPlayer  = 700;
	energyMonster = 1200;
	suaraGameOver.pause();
	suaraMenu.play();
	clearTimeout(berhentiAnimasiDepan);
	document.getElementById('animasiDepan').style.visibility ='hidden';
	kontenJS.appendChild(backgroundHomeJS);
	kontenJS.appendChild(backgroundWinJS);
	kontenJS.appendChild(backgroundLoseJS);
	kontenJS.removeChild(backgroundHomeJS);
	kontenJS.removeChild(backgroundWinJS);
	kontenJS.removeChild(backgroundLoseJS);
	kontenJS.appendChild(backgroundCaraJS);
	setTimeout(function() {
		game();
	}, 7000);
};

function game() {
	suaraGameOver.pause();
	suaraMenu.pause();
	suaraGame.play();
	kontenJS.removeChild(backgroundCaraJS);
	kontenJS.appendChild(backgroundGameJS);
	kontenJS.appendChild(soal);
	kontenJS.appendChild(energyP);
	kontenJS.appendChild(energyM);
	kontenJS.appendChild(hitP);
	kontenJS.appendChild(hitM);
	kontenJS.appendChild(inputanJS);
	kontenJS.appendChild(waktuJS);
	kontenJS.appendChild(keteranganMain);
	setTimeout(function() {
		kontenJS.removeChild(keteranganMain);
	}, 4000);

	document.getElementById('monsterChar').style.visibility ='visible';
	document.getElementById('playerChar').style.visibility ='visible';

	pertanyaan();
};
var nilaiAkhir = 'kosong';//dijadikan nilai akhir score
function pertanyaan() {
	x = Math.floor((Math.random() * 100) + 33);
	y = Math.floor((Math.random() * 100) + 33);
	z = 0;
	var randomAngka = Math.floor((Math.random() * 100) + 20);
	var tampilkan ='';
	if (randomAngka%2===0){
		z = x+y;
		tampilkan = x+'+'+y;
	}
	if (randomAngka%2!==0){
		z = x-y;
		tampilkan = x+'-'+y;
	}

	document.getElementsByTagName('h2')[0].innerHTML = 'Energy '+energyPlayer;
	document.getElementsByTagName('h2')[1].innerHTML = 'Mons+er '+energyMonster;
	document.getElementsByTagName('h1')[0].innerHTML = tampilkan;
	if(energyPlayer>0){
	mulaiHitungWaktu();
	}
	waktuTimeoutMonster = setInterval(function(){
			document.getElementById("playerChar").src = "images/player/playerHit.png";
			hitPlayer = Math.floor((Math.random() * 100) + 30)
			console.log('Mons+er defense '+hitPlayer);
			suaraHitP.play();
			document.getElementsByTagName('h5')[0].innerHTML = 'Energy -'+hitPlayer;
			setTimeout(function() {
			document.getElementsByTagName('h5')[0].innerHTML = '';
			}, 1500);
			energyPlayer = energyPlayer-hitPlayer;
			inputanJS.value='';
				clearTimeout(waktuTimeoutMonster);
				pertanyaan();

	}, 8000);

		if (energyPlayer<=0){
			document.getElementById('inputanJawab').disabled = true;
			document.getElementsByTagName('h1')[0].innerHTML = ' ';
			document.getElementsByTagName('h2')[0].innerHTML = 'Energy 0';
			setTimeout(function() {
				kalah();
			}, 1500);
			hentikanWaktu();
			clearTimeout(waktuTimeoutMonster);

		}
		if (energyMonster<=0){
			document.getElementById('inputanJawab').disabled = true;
			document.getElementsByTagName('h1')[0].innerHTML = ' ';
			document.getElementsByTagName('h2')[1].innerHTML = 'Mons+er 0';
			setTimeout(function() {
				menang();
			}, 1500);
			hentikanWaktu();
			clearTimeout(waktuTimeoutMonster);
		}
	inputanJS.focus();
}

inputanJS.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
    	z = z.toString();
		if(inputanJS.value===z){
			document.getElementById("monsterChar").src = "images/monster/monsterHit.png";
			hitMonster = Math.floor((Math.random() * 100) + 50)
			console.log('Power hit '+hitMonster);
			suaraHitM.play();
			document.getElementsByTagName('h5')[1].innerHTML = 'Energy -'+hitMonster;
			setTimeout(function() {
			document.getElementsByTagName('h5')[1].innerHTML = '';
			}, 1500);
			energyMonster = energyMonster-hitMonster;
			nilaiAkhir = energyPlayer; // tentukan nilai akhir score
			inputanJS.value='';
		}
		else{
			document.getElementById("playerChar").src = "images/player/playerHit.png";
			hitPlayer = Math.floor((Math.random() * 100) + 50)
			console.log('Mons+er defense '+hitPlayer);
			suaraHitP.play();
			document.getElementsByTagName('h5')[0].innerHTML = 'Energy -'+hitPlayer;
			setTimeout(function() {
			document.getElementsByTagName('h5')[0].innerHTML = '';
			}, 1500);
			energyPlayer = energyPlayer-hitPlayer;
			inputanJS.value='';
		}
		clearTimeout(waktuTimeoutMonster);
		hentikanWaktu();
		pertanyaan();
    }
});

function menang(){
	document.getElementById('inputanJawab').disabled = false;
	document.getElementById('hitungWaktu').innerHTML = '';
	suaraMenu.pause();
	suaraGame.pause();
	suaraGameOver.play();
	kontenJS.removeChild(soal);
	kontenJS.removeChild(energyM);
	kontenJS.removeChild(energyP);
	inputanJS.value='';
	kontenJS.removeChild(inputanJS);
	kontenJS.removeChild(waktuJS);
	kontenJS.removeChild(hitP);
	kontenJS.removeChild(hitM);
	kontenJS.removeChild(backgroundGameJS);
	kontenJS.appendChild(backgroundWinJS);
	document.getElementById('monsterChar').style.visibility ='hidden';
	document.getElementById('playerChar').style.visibility ='hidden';
	setTimeout(function() {
		kontenJS.removeChild(backgroundWinJS);
		fungsiInputUser();
	}, 3000);

}

function kalah(){
	document.getElementById('inputanJawab').disabled = false;
	document.getElementById('hitungWaktu').innerHTML = '';
	suaraMenu.pause();
	suaraGame.pause();
	suaraGameOver.play();
	kontenJS.removeChild(soal);
	kontenJS.removeChild(energyM);
	kontenJS.removeChild(energyP);
	inputanJS.value='';
	kontenJS.removeChild(inputanJS);
	kontenJS.removeChild(waktuJS);
	kontenJS.removeChild(hitP);
	kontenJS.removeChild(hitM);
	kontenJS.removeChild(backgroundGameJS);
	kontenJS.appendChild(backgroundLoseJS);
	document.getElementById('monsterChar').style.visibility ='hidden';
	document.getElementById('playerChar').style.visibility ='hidden';
	setTimeout(function() {
		kontenJS.removeChild(backgroundLoseJS);
		fungsiHighScore();
	}, 3000);

}
var user = [['mangata','210'],['alfamart','24'],['ruth','237'],['qwerty','187'],['zero','78'],['wizt','43']];

function fungsiInputUser() {
	kontenJS.appendChild(backgroundInputJS);
	inputUserJS = document.createElement('input');
	inputUserJS.setAttribute('type','text');
	inputUserJS.setAttribute('maxlength','7');
	inputUserJS.setAttribute('placeholder','your name?');
	inputUserJS.setAttribute('id','inputUser');
	kontenJS.appendChild(inputUserJS);
	inputUserJS.focus();

	buttonInputJS = document.createElement('button');
	buttonInputJS.setAttribute('id','buttonInput');
	buttonInputJSText = document.createTextNode('submit');
	buttonInputJS.appendChild(buttonInputJSText);
	kontenJS.appendChild(buttonInputJS);

	buttonInputJS.addEventListener('click', function() {
		if(inputUserJS.value===''){
			inputUserJS.value = 'no name';
		}
		user.push([inputUserJS.value,nilaiAkhir]);

		kontenJS.removeChild(buttonInputJS);
		kontenJS.removeChild(inputUserJS);
		setTimeout(function() {
		fungsiHighScore();
		kontenJS.removeChild(backgroundInputJS);
	}, 1000);
	});
}

function fungsiHighScore(){

	user = user.sort(function(a,b){return b[1]-a[1]});
	kontenHighScoreJS = document.createElement('div');
	kontenHighScoreJS.setAttribute('id', 'kontenHighScore');
	kontenJS.appendChild(kontenHighScoreJS);

	kontenHighScoreJS.appendChild(backgroundHighscoreJS);
	for(let i=0 ; i<5 ; i++){

		scoreUserJS = document.createElement('h4');
		scoreUserJS.setAttribute('id','namaUser'+i);
		scoreUserJSText = document.createTextNode(user[i][0]);
		scoreUserJS.appendChild(scoreUserJSText);
		kontenHighScoreJS.appendChild(scoreUserJS);

		nilaiUserJS = document.createElement('h4');
		nilaiUserJS.setAttribute('id','nilaiUser'+i);
		nilaiUserJSText = document.createTextNode(user[i][1]);
		nilaiUserJS.appendChild(nilaiUserJSText);
		kontenHighScoreJS.appendChild(nilaiUserJS);
	};

	homeScoreJS = document.createElement('h4');
	homeScoreJS.setAttribute('id','homeScore');
	homeScoreJSText = document.createTextNode('home');
	homeScoreJS.appendChild(homeScoreJSText);
	kontenHighScoreJS.appendChild(homeScoreJS);

	buttonPlayScoreJS = document.createElement('button');
	buttonPlayScoreJS.setAttribute('id','buttonPlayScore');
	buttonPlayScoreJSJSText = document.createTextNode('play again');
	buttonPlayScoreJS.appendChild(buttonPlayScoreJSJSText);
	kontenHighScoreJS.appendChild(buttonPlayScoreJS);

	homeScoreJS.addEventListener('click', function() {
		kontenJS.removeChild(kontenHighScoreJS);
		homeLagi();
	});

	buttonPlayScoreJS.addEventListener('click', function() {
		kontenJS.removeChild(kontenHighScoreJS);
		fungsiCara();
	});
}

function homeLagi(){
	suaraGameOver.pause();
	suaraMenu.play();
	kontenJS.appendChild(buttonPlayJS);
	kontenJS.appendChild(backgroundHomeJS);
	function fungsiAnimasiDepan() {
		z = (z === images.length - 1) ? 0 : z + 1;
		document.getElementById("animasiDepan").src = images[z];
	}
	var images = [], z = -1;
	var images = [
		"images/player/frame-1.png",
		"images/player/frame-2.png",
		"images/player/frame-3.png",
		"images/player/frame-4.png",
		"images/player/frame-5.png",
		"images/player/frame-6.png",
	], z = -1;

	function fungsiMulaiAnimasiDepan() {
		berhentiAnimasiDepan = setInterval(fungsiAnimasiDepan, 150);
	};
	fungsiMulaiAnimasiDepan();
	document.getElementById("animasiDepan").style.visibility='visible';
};

//MULAIIIIIII
loadingAwal();
