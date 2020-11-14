function iniciar() {
	maximo=600;
	medio=document.getElementById('medio');
	reproducir=document.getElementById('reproducir');
	barra=document.getElementById('barra'); 
	progreso=document.getElementById('progreso');
	reproducir.addEventListener('click', presionar, false);
	barra.addEventListener('click', mover, false);
}
function presionar(){
	if(!medio.paused && !medio.ended) {
		medio.pause();
		reproducir.innerHTML='Reproducir';
		window.clearInterval(bucle);
	}
		else{
		medio.play();
		reproducir.innerHTML='Pausa';
		bucle=setInterval(estado, 1000);
	}
}
function estado(){
	if(!medio.ended){
		var total=parseInt(medio.currentTime*maximo/medio.duration);
		progreso.style.width=total+'px';
	}
		else{
		progreso.style.width='0px';
		reproducir.innerHTML='Reproducir';
		window.clearInterval(bucle);
	}
}
function mover(e){
	if(!medio.ended){
		var ratonX=e.pageX-barra.offsetLeft;
		var nuevoTiempo=ratonX*medio.duration/maximo;
		medio.currentTime=nuevoTiempo;
		progreso.style.width=ratonX+'px';
	}
}
function skip(value){
		medio.currentTime += value;
}
function launchFullScreen(element) {
  if(medio.requestFullScreen) {
    medio.requestFullScreen();
  } else if(medio.mozRequestFullScreen) {
    medio.mozRequestFullScreen();
  } else if(medio.webkitRequestFullScreen) {
    medio.webkitRequestFullScreen();
  }
}

window.addEventListener('load', iniciar, false);

var oldvolume = 1;
var audio = document.getElementById("volumen");

audio.addEventListener("change",function(ev){
	var v = document.getElementById("medio");
	v.volume = ev.target.value;	
	mute.checked=false;
},true);
	

