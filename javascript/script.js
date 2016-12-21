var body = document.body;

kontenJS = document.createElement('div'); //membuat div konten
kontenJS.setAttribute('id', 'konten');
body.appendChild(kontenJS);        

	var energyPlayer  = 0;
	var energyMonster = 0;
	var waktuTimeoutMonster = '';
	var berhentiAnimasiGame = '';
	var berhentiAnimasiDepan ='';

playerDepan = document.createElement('img'); //animasi gerak player home
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
inputanJS.setAttribute('id','inputan');

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

monsterCharJS = document.createElement('img');
monsterCharJS.setAttribute('id','monsterChar');
kontenJS.appendChild(monsterCharJS);
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

//background all
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
// fungsi button klik
function loading(){

};

function home(){
suaraMenu.play();	
kontenJS.appendChild(buttonPlayJS);
kontenJS.removeChild(backgroundWinJS);
kontenJS.removeChild(backgroundLoseJS);
kontenJS.removeChild(backgroundCaraJS);
kontenJS.removeChild(backgroundGameJS);
document.getElementById("animasiDepan").style.visibility='visible';
};

home();

function fungsiCara(){
	energyPlayer  = 700;
	energyMonster = 1200;
	suaraGameOver.pause();
	suaraMenu.play();
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
	}, 4000);
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
	kontenJS.appendChild(keteranganMain);
	(function() {
		kontenJS.removeChild(keteranganMain);
	}, 5000);

	document.getElementById('monsterChar').style.visibility ='visible';
	document.getElementById('playerChar').style.visibility ='visible';

	waktuTimeoutMonster = setInterval(function(){ 
				document.getElementById("playerChar").src = "images/player/playerHit.png";
				suaraHitP.play();
				hitPlayer = Math.floor((Math.random() * 100) + 50)
				console.log('Mons+er menyerang '+hitPlayer);
				energyPlayer = energyPlayer-hitPlayer;
				document.getElementsByTagName('h2')[0].innerHTML = 'Energy '+energyPlayer;
				document.getElementsByTagName('h2')[1].innerHTML = 'Mons+er '+energyMonster;
				document.getElementsByTagName('h5')[0].innerHTML = 'Energy -'+hitPlayer;
				setTimeout(function() {
					document.getElementsByTagName('h5')[0].innerHTML = '';
				}, 1500);
				if (energyPlayer<=0){
					document.getElementsByTagName('h1')[0].innerHTML = ' ';
					document.getElementsByTagName('h2')[0].innerHTML = 'Energy 0';
					alert('YOU LOSE');
					setTimeout(function() {
						kalah();
					}, 1500);
					clearTimeout(waktuTimeoutMonster);
				}
	}, 8000);
	pertanyaan();
};

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
		pertanyaan();
    }
});

function pertanyaan() {
	x = Math.floor((Math.random() * 100) + 33)
	y = Math.floor((Math.random() * 100) + 33)
	z = x+y;
	document.getElementsByTagName('h2')[0].innerHTML = 'Energy '+energyPlayer;
	document.getElementsByTagName('h2')[1].innerHTML = 'Mons+er '+energyMonster;
	document.getElementsByTagName('h1')[0].innerHTML = x+'+'+y;
		if (energyPlayer<=0){
			document.getElementsByTagName('h1')[0].innerHTML = ' ';
			document.getElementsByTagName('h2')[0].innerHTML = 'Energy 0';
			alert('YOU LOSE');
			setTimeout(function() {
				kalah();
			}, 1500);
			clearTimeout(waktuTimeoutMonster);
			
		}
		if (energyMonster<=0){
			document.getElementsByTagName('h1')[0].innerHTML = ' ';
			document.getElementsByTagName('h2')[1].innerHTML = 'Mons+er 0';
			alert('YOU WIN');
			setTimeout(function() {
				menang();
			}, 1500);
			clearTimeout(waktuTimeoutMonster);
		}
	inputanJS.focus();  
}

function menang(){
	suaraMenu.pause();
	suaraGame.pause();
	suaraGameOver.play();
	kontenJS.removeChild(soal);
	kontenJS.removeChild(energyM);
	kontenJS.removeChild(energyP);
	kontenJS.removeChild(inputanJS);
	kontenJS.removeChild(hitP);
	kontenJS.removeChild(hitM);
	document.getElementById('monsterChar').style.visibility ='hidden';
	document.getElementById('playerChar').style.visibility ='hidden';
	inputanJS.value='';	
	kontenJS.appendChild(buttonPlayAgainJS);
}

function kalah(){
	suaraMenu.pause();
	suaraGame.pause();
	suaraGameOver.play();
	kontenJS.removeChild(soal);
	kontenJS.removeChild(energyM);
	kontenJS.removeChild(energyP);
	kontenJS.removeChild(inputanJS);
	kontenJS.removeChild(hitP);
	kontenJS.removeChild(hitM);
	kontenJS.removeChild(backgroundGameJS);
	kontenJS.appendChild(backgroundLoseJS);
	document.getElementById('monsterChar').style.visibility ='hidden';
	document.getElementById('playerChar').style.visibility ='hidden';	
	inputanJS.value='';	
	kontenJS.appendChild(buttonPlayAgainJS);
}