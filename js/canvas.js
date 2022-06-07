var canvas = document.querySelector("#canvas");
var pincel = canvas.getContext("2d");


	pincel.fillStyle = "#F3F5FC";
	pincel.fillRect(0,0,480,360);

	pincel.fillStyle = "#0A3871";
	pincel.fillRect(10,130,130,2);
	pincel.fillRect(50,10,2,120);
	pincel.fillRect(50,10,80,2);
	pincel.fillRect(130,10,2,20);


var cuerpo = new Image();

cuerpo.onload = function(){
	pincel.drawImage(cuerpo,115,30,30,80);
}