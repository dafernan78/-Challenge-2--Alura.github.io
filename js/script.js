
//Codigo pantalla principal

var btnIniciar = document.querySelector("#iniciar");
var botonera = document.querySelector(".botonera");
var btnAgregar = document.querySelector("#agregar");

var juego = document.querySelector("#juego");
var agregar = document.querySelector("#agregarPalabras");


btnIniciar.addEventListener("click", function(){
	botonera.style.display = "none";
	juego.style.display = "block";
	btnNuevo.click();
});

btnAgregar.addEventListener("click", function(){
	botonera.style.display = "none";
	agregar.style.display = "block";
});


//Codigo del Juego

var btnDesistir = document.querySelector("#desistir"); 
var btnNuevo = document.querySelector("#nuevo");
var parrafo = document.querySelector("#palabraAdivinar");
var letrasIngresadas = document.querySelector("#letrasIngresadas");
var ganaste = document.querySelector("#ganaste");
var perdiste = document.querySelector("#perdiste");

var palabras = [
	"programar",
	"alura",
	"polvora",
	"camello",
	"anillo",
	"oracle",
	"jujuy",
];
var usadas = "";
var adivinar = "";
var errores = 0;
var aciertos = 0;

btnDesistir.addEventListener("click", function(){
	btnCancelar.click();
});

btnNuevo.addEventListener("click", function(){
	   var cantidad_palabras = palabras.length;
	   var indicePalabra = Math.floor(Math.random() * cantidad_palabras);
	   var seleccionada = (palabras[indicePalabra]).toUpperCase();
	   var guiones = seleccionada.length;
	   document.addEventListener("keydown", teclado);
	   adivinar = seleccionada;
	   parrafo.innerHTML = " ";
	   letrasIngresadas.innerHTML= " ";
	   usadas = [];
	   errores = 0;
	   aciertos = 0;
	   ganaste.style.display = "none";
	   perdiste.style.display = "none";
	   pincel.clearRect(115,30,30,80);

       for(var i=0; i<guiones;i++){
                 var span = document.createElement("span");
             	 parrafo.appendChild(span);
             	}

});


const teclado = evento => {
	var letrasMostrar = document.querySelectorAll("#palabraAdivinar span");
	var letra = (evento.key).toUpperCase();
	var span = document.createElement("span");

		if(letra.match(/^[a-zñ]$/i) && adivinar.includes(letra) && !usadas.includes(letra)){
				usadas.push(letra);
				for (var i = 0; i<adivinar.length; i++){
		 			if (letra == adivinar[i]){
						letrasMostrar[i].innerHTML = letra;
						aciertos++;
	 				}			 	
    			}
			}

		if(letra.match(/^[a-zñ]$/i) && !adivinar.includes(letra) && !usadas.includes(letra)){	
			letrasIngresadas.appendChild(span);
			span.textContent = letra;
			usadas.push(letra);
			var imagenes = `img/img${errores}.png`;
			cuerpo.src = imagenes;
	 		errores++;						
			}


		if(errores == 6){
			perdiste.style.display = "block";
			document.removeEventListener("keydown", teclado);
		}

		if(aciertos == adivinar.length){
			ganaste.style.display = "block";
			document.removeEventListener("keydown", teclado);
		}
}

//Codigo de Agregar Palabras

var btnCancelar = document.querySelector("#cancelar");
var btnGuardar = document.querySelector("#guardar");
var btnJugar = document.querySelector("#jugar");
var ingreso = document.querySelector("#caja");


btnGuardar.addEventListener("click", function(){
	var nuevaPalabra = document.querySelector("#caja").value;

	if (!palabras.includes(nuevaPalabra)){
		palabras.push(nuevaPalabra);
		ingreso.value = " ";
	}else{ 
		return 
	}

});

btnJugar.addEventListener("click", function(){
		agregar.style.display = "none";
		juego.style.display = "block";
		btnNuevo.click();
});

btnCancelar.addEventListener("click", function(){
	agregar.style.display = "none";
	juego.style.display = "none";
	botonera.style.display = "block";
});