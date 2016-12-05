var body = document.body;

insideMainDiv = document.createElement('div'); //membuat div konten
insideMainDiv.setAttribute('id', 'konten');
body.appendChild(insideMainDiv);        

playerDepan = document.createElement('img'); //animasi gerak player home
playerDepan.setAttribute('id','animasiDepan');
insideMainDiv.appendChild(playerDepan);
henti='';
          function displayDepan() {

              x = (x === images.length - 1) ? 0 : x + 1;
              document.getElementById("animasiDepan").src = images[x];

          }
              var images = [], x = -1;
              var images = [
              "images/player/frame-1.png",
              "images/player/frame-2.png",
              "images/player/frame-3.png",
              "images/player/frame-4.png",
              "images/player/frame-5.png",
              "images/player/frame-6.png",
              ], x = -1;
          function mulaiDepan() {
              henti = setInterval(displayDepan, 150);
          }
mulaiDepan();

suaraHitP = new Audio('audio/hit.ogg');
suaraHitM = new Audio('audio/hit.ogg');

suaraGame = new Audio("audio/game.ogg"); 
suaraGame.addEventListener('ended', function() {
    this.pause();
    this.currentTime = 0;
    this.play();
}, false);

suaraGameOver = new Audio("audio/gameover.ogg"); 
suaraGameOver.addEventListener('ended', function() {
    this.pause();
    this.currentTime = 0;
    this.play();
}, false);

suaraMenu = new Audio("audio/menu.ogg"); 
suaraMenu.addEventListener('ended', function() {
    this.pause();
    this.currentTime = 0;
    this.play();
}, false);

suaraMenu.play();

buttonMulai = document.createElement('button');
buttonMulai.setAttribute('id','button');
buttonMulaiText = document.createTextNode('play');
buttonMulai.appendChild(buttonMulaiText);
insideMainDiv.appendChild(buttonMulai);

buttonLagi = document.createElement('button');
buttonLagi.setAttribute('id','buttonAgain');
buttonLagiText = document.createTextNode('play again');
buttonLagi.appendChild(buttonLagiText);

inputan = document.createElement('input');
inputan.setAttribute('type','text');
inputan.setAttribute('id','inputan');

buttonMulai.addEventListener('click', function() {
	insideMainDiv.removeChild(buttonMulai);
	cara();
	
});

buttonLagi.addEventListener('click', function() {
	insideMainDiv.removeChild(buttonLagi);
	cara();
	
});

function cara(){
	suaraGameOver.pause();
	suaraMenu.play();
	clearTimeout(henti);
		document.getElementById('animasiDepan').style.visibility ='hidden';
	document.getElementById('konten').style.backgroundImage="url(images/background/cara.png)"; 
	enPlayer  = 700;
	enMonster = 1200;
	waktu     = '';
	setTimeout(function() {
		game();
	}, 10000);
}

function game() {
	suaraGameOver.pause();
	suaraMenu.pause();
	suaraGame.play();
	document.getElementById('konten').style.backgroundImage="url(images/background/game.png)"; 
	soal = document.createElement('h1');
	soal.setAttribute('id','soal');
	soalText = document.createTextNode('');
	soal.appendChild(soalText);
	insideMainDiv.appendChild(soal);	

	energyP = document.createElement('h2');
	energyP.setAttribute('id','energyP');
	energyPText = document.createTextNode('Energy '+enPlayer);
	energyP.appendChild(energyPText);
	insideMainDiv.appendChild(energyP);

	energyM = document.createElement('h2');
	energyM.setAttribute('id','energyM');
	energyMText = document.createTextNode('Mons+er '+enMonster);
	energyM.appendChild(energyMText);
	insideMainDiv.appendChild(energyM);

	hitP = document.createElement('h5');
	hitP.setAttribute('id','playerHit');
	hitPText = document.createTextNode('');
	hitP.appendChild(hitPText);
	insideMainDiv.appendChild(hitP);

	hitM = document.createElement('h5');
	hitM.setAttribute('id','monsterHit');
	hitMText = document.createTextNode('');
	hitM.appendChild(hitMText);
	insideMainDiv.appendChild(hitM);

	keteranganMain = document.createElement('h5');
	keteranganMain.setAttribute('id','keterangan');
	keteranganMainText = document.createTextNode('submit your answer and press enter');
	keteranganMain.appendChild(keteranganMainText);
	insideMainDiv.appendChild(keteranganMain);
	setTimeout(function() {
		insideMainDiv.removeChild(keteranganMain);
	}, 5000);

	playerChar = document.createElement('img');
	playerChar.setAttribute('id','playerChar');
	insideMainDiv.appendChild(playerChar);

	monsterChar = document.createElement('img');
	monsterChar.setAttribute('id','monsterChar');
	insideMainDiv.appendChild(monsterChar);

	document.getElementById('monsterChar').style.visibility ='visible';
	document.getElementById('playerChar').style.visibility ='visible';
	function displayNextImage() {
		x = (x === playerPict.length - 1) ? 0 : x + 1;
		document.getElementById("playerChar").src = playerPict[x];
		y = (y === monsterPict.length - 1) ? 0 : y + 1;
		document.getElementById("monsterChar").src = monsterPict[y];
	}
	var playerPict = ["images/player/player1.png","images/player/player2.png"], x = -1;
	var monsterPict = ["images/monster/monster2.png","images/monster/monster1.png"], y = -1;
	gantiGambar = '';
	function startTimer() {
		gantiGambar = setInterval(displayNextImage, 700);
		document.getElementById('playerChar').addEventListener('click', function () {
			suaraHitP.play();
			document.getElementById("playerChar").src = "images/player/playerHit.png";
		});
		document.getElementById('monsterChar').addEventListener('click', function () {
			suaraHitM.play();
			document.getElementById("monsterChar").src = "images/monster/monsterHit.png";
		});
	}
	
	startTimer();

	insideMainDiv.appendChild(inputan);
	
	waktu = setInterval(function(){ 
				document.getElementById("playerChar").src = "images/player/playerHit.png";
				suaraHitP.play();
				phit = Math.floor((Math.random() * 100) + 50)
				console.log('Mons+er menyerang '+phit);
				enPlayer = enPlayer-phit;
				document.getElementsByTagName('h2')[0].innerHTML = 'Energy '+enPlayer;
				document.getElementsByTagName('h2')[1].innerHTML = 'Mons+er '+enMonster;
				document.getElementsByTagName('h5')[0].innerHTML = 'Energy -'+phit;
				setTimeout(function() {
					document.getElementsByTagName('h5')[0].innerHTML = '';
				}, 1500);
				if (enPlayer<=0){
					document.getElementsByTagName('h1')[0].innerHTML = ' ';
					document.getElementsByTagName('h2')[0].innerHTML = 'Energy 0';
					alert('YOU LOSE');
					setTimeout(function() {
						kalah();
					}, 1500);
					clearTimeout(waktu);
				}
	}, 8000);
	pertanyaan();
};

inputan.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { 
    	z = z.toString();
		if(inputan.value===z){
			document.getElementById("monsterChar").src = "images/monster/monsterHit.png";
			mhit = Math.floor((Math.random() * 100) + 50)
			console.log('Power hit '+mhit);
			suaraHitM.play();
			document.getElementsByTagName('h5')[1].innerHTML = 'Energy -'+mhit;
			setTimeout(function() {
			document.getElementsByTagName('h5')[1].innerHTML = '';
			}, 1500);
			enMonster = enMonster-mhit;
			inputan.value='';			
		}
		else{
			document.getElementById("playerChar").src = "images/player/playerHit.png";
			phit = Math.floor((Math.random() * 100) + 50)
			console.log('Mons+er defense '+phit);
			suaraHitP.play();
			document.getElementsByTagName('h5')[0].innerHTML = 'Energy -'+phit;
			setTimeout(function() {
			document.getElementsByTagName('h5')[0].innerHTML = '';
			}, 1500);
			enPlayer = enPlayer-phit;
			inputan.value='';		
		}
		pertanyaan();
    }
});

function pertanyaan() {
	x = Math.floor((Math.random() * 100) + 33)
	y = Math.floor((Math.random() * 100) + 33)
	z = x+y;
	document.getElementsByTagName('h2')[0].innerHTML = 'Energy '+enPlayer;
	document.getElementsByTagName('h2')[1].innerHTML = 'Mons+er '+enMonster;
	document.getElementsByTagName('h1')[0].innerHTML = x+'+'+y;
		if (enPlayer<=0){
			document.getElementsByTagName('h1')[0].innerHTML = ' ';
			document.getElementsByTagName('h2')[0].innerHTML = 'Energy 0';
			alert('YOU LOSE');
			setTimeout(function() {
				kalah();
			}, 1500);
			clearTimeout(waktu);
			
		}
		if (enMonster<=0){
			document.getElementsByTagName('h1')[0].innerHTML = ' ';
			document.getElementsByTagName('h2')[1].innerHTML = 'Mons+er 0';
			alert('YOU WIN');
			setTimeout(function() {
				menang();
			}, 1500);
			clearTimeout(waktu);
		}
	inputan.focus();  
}

function menang(){
suaraMenu.pause();
suaraGame.pause();
suaraGameOver.play();
clearTimeout(gantiGambar);
insideMainDiv.removeChild(soal);
insideMainDiv.removeChild(energyM);
insideMainDiv.removeChild(energyP);
insideMainDiv.removeChild(inputan);
insideMainDiv.removeChild(hitP);
insideMainDiv.removeChild(hitM);
document.getElementById('monsterChar').style.visibility ='hidden';
document.getElementById('playerChar').style.visibility ='hidden';
inputan.value='';	
document.getElementById('konten').style.backgroundImage="url(images/background/win.png)"; 
insideMainDiv.appendChild(buttonLagi);
}

function kalah(){
suaraMenu.pause();
suaraGame.pause();
suaraGameOver.play();
clearTimeout(gantiGambar);
insideMainDiv.removeChild(soal);
insideMainDiv.removeChild(energyM);
insideMainDiv.removeChild(energyP);
insideMainDiv.removeChild(inputan);
insideMainDiv.removeChild(hitP);
insideMainDiv.removeChild(hitM);
document.getElementById('monsterChar').style.visibility ='hidden';
document.getElementById('playerChar').style.visibility ='hidden';
inputan.value='';	
document.getElementById('konten').style.backgroundImage="url(images/background/lose.png)"; 
insideMainDiv.appendChild(buttonLagi);
}