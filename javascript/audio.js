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
