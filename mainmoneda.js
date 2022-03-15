const lista = ["ADRIAN PEREZ", "PATRICIO ESTRELLA", "EMILIANO SATURNO",];

let nombre = document.querySelector("#nombre").value.toLowerCase();
if (lista.indexOf(nombre) == -1) {
	cvmoneda();
}
else { let contenedor = document.createElement("div");
				contenedor.innerHTML = `<div><p>No puede adquirir moneda extranjera, superó el límite mensual.</p></div>`;
    		  	document.body.append(contenedor); }


function validar () {
	let valoresPosibles =  /^[0-9]+$/;
	let monto = document.querySelector("#valor").value;
	let nombre = document.querySelector("#nombre").value.toUpperCase();
	if ((monto !== "") && (nombre !== "") && ( monto.match(valoresPosibles) )) {
		cvmoneda()
	} else {
		Swal.fire({
		text: `Por favor ingrese un nombre ó monto válido`,
		icon: 'error',
		confirmButtonColor: '#FF0000',
		confirmButtonText: "Ok",})}
}				  


function cvmoneda() {
	let entrada = document.querySelector("#moneda").value;
	let compraventa = document.querySelector("#cov").value;
	let monto = document.querySelector("#valor").value;
	let nombre = document.querySelector("#nombre").value.toUpperCase();
	if ((lista.indexOf(nombre) == -1) && (nombre != "")) {
	switch (entrada) {
		case "DOLAR":
			if (compraventa == "COMPRAR") {
				let resultado = monto * 160;
				let contenedor = document.querySelector("#salidaMoneda");
				contenedor.innerHTML = `<div style=background:red;><p style=color:white;>Usted deberá abonar ${resultado} pesos ARS.</p></div>`;
    	
			}
			else if (compraventa == "VENDER") {
				let resultado = monto * 150;
				let contenedor = document.querySelector("#salidaMoneda");
				contenedor.innerHTML = `<div style=background:red;><p style=color:white;>Usted obtendrá ${resultado} pesos ARS.</p></div>`;
    	
			}
			else { alert("Recuerde seleccionar COMPRAR/VENDER en letras mayúsculas"); }
			break;
		case "EURO":
			if (compraventa == "COMPRAR") {
				let resultado = monto * 250;
				let contenedor = document.querySelector("#salidaMoneda");
				contenedor.innerHTML = `<div style=background:red;><p style=color:white;>Usted deberá abonar ${resultado} pesos ARS.</p></div>`;
    	
			}
			else if (compraventa == "VENDER") {
				let resultado = monto * 240;
				let contenedor = document.querySelector("#salidaMoneda");
				contenedor.innerHTML = `<div style=background:red;><p style=color:white;>Usted obtendrá ${resultado} pesos ARS.</p></div>`;

			}
			else {
				alert("Recuerde seleccionar COMPRAR/VENDER en letras mayúsculas");
				break;
			}
	}
}

}

//-----------------------------------------------------------------------------------------------


const pres = [
	{ plazo: "6", interes: "35%", pago: "mensual", },
	{ plazo: "12", interes: "70%", pago: "mensual", },
	{ plazo: "18", interes: "150%", pago: "bimestral", },
]

let btn = document.querySelector("#btnpres")
btn.addEventListener("click", info)
let elegido ;
function info() {
         pulsado = document.elegir.r;
         for (i=0; i<pulsado.length; i++) {
         valor = pulsado[i].checked;
              if (valor == true) {
             elegido = pulsado[i];
                 }
              }
        console.log(elegido.value)
        pres.forEach(object => {
	 (object.plazo == elegido.value) &&
		console.log(object);

     Swal.fire({
  title: `Desea confirmar el préstamo solicitado.`,
  text: `Para el plazo solicitado (${object.plazo} meses) la tasa de interés es del ${object.interes} y la forma de pago es ${object.pago}.`,
  icon: 'question',
  confirmButtonColor: '#FF0000',
  showCancelButton: true,
        confirmButtonText: "Confirmar",
        cancelButtonText: "Cancelar",
}).then(resultado => {
        if (resultado.value) {
        	Swal.fire({icon: "success", confirmButtonColor: '#FF0000',})
            concretarPrestamo ()

        } else {
Swal.fire({
  text: `La solicitud se ha cancelado.`,
  icon: 'info',
  timer: 1000,
  confirmButtonColor: '#FF0000',
  confirmButtonText: "Ok",
})
        }
    }); 
         
})}

function concretarPrestamo () {
			let contenedor = document.querySelector("#salidaPrestamo");
      contenedor.innerHTML = `<p>Ha confirmado la solicitud del préstamo.</p>`;
}

//----------------------------------------------------------------------------------------------------

async function pedir () {
	const response = await fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
	const data = await response.json();
  
	Swal.fire({
		imageUrl: '../assets/dolar.jpg',
		imageWidth: 400,
		imageHeight: 200,
		imageAlt: 'Custom image',
	  title: "Consulta precio de dólar(recuerde que se le agregará carga impositiva.",
	  text: `Tipo: ${data[0].casa.nombre}
			  Compra: ${data[0].casa.compra}$ARS/ 
			 Venta: ${data[0].casa.venta}$ARS` ,
	  confirmButtonColor: '#FF0000',
	  confirmButtonText: "Ok",
	})
	
	};

	async function pedirBit () {
		const response = await fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
		const data = await response.json();
	  
		Swal.fire({
			imageUrl: '../assets/bit.jpg',
			imageWidth: 400,
			imageHeight: 200,
			imageAlt: 'Custom image',
		  title: "Consulta precio de Bitcoin (promedio).",
		  text: `Tipo: ${data[5].casa.nombre}/
				  Compra (valor por 1 unidad): ${data[5].casa.compra}$ARS`, 
		  confirmButtonColor: '#FF0000',
		  confirmButtonText: "Ok",
		})
		
		};