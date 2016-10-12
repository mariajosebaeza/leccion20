function callbackPromedio(a, b, c, callback) {
	var suma = a + b + c;
	var promedio = suma / 3;
	return callback(promedio);
}

function segundero(){
    var t=1; // variable tiempo, comienza en 1
    setInterval(function(){ //el reloj se ejecuta c/ 1 seg, por los 100 milisegundos
        document.getElementById("titulo").innerHTML=t++; //cambia el contenido h2 y lo y lo incrementa de 1 en 1
    },1000,"JavaScript");
} 
segundero(); 
