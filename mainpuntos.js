//1- fn que davuelve un saldo y puntos aleatoriamente.

function saldoPuntos () {
	let saldo = Math.ceil(Math.random() * 100000) ;
	let puntos = Math.floor(Math.random() * 150)  ;
	let s = document.querySelector("#saldoPuntos");
	s.innerHTML = `<p>Su saldo es $ ${saldo}</p>`;
	let p = document.querySelector("#puntos");
	p.innerHTML = `${puntos}`;
}


//2- Fn que filtra e indica si los puntos son suficientes para cambiarlos por productos, si es asi
// le da paso a la fn de descuento.
let boton = document.querySelector("#btn");
boton.addEventListener("click", xyz)
function xyz () {
let  entrada = document.querySelector("#seleccion").value;
let pc = document.querySelector("#puntos").innerText; 
		let salidaPuntosFiltro = document.querySelector("#salidaPuntosFiltro");
	 (parseInt(entrada) <= parseInt(pc)) ?
	(    console.log("puede cajear"),
		descuentos (entrada),

		salidaPuntosFiltro.innerHTML = `<p>Puede canjear.</p>
		<button type="button" onclick="restaCambiosPuntos()">Cajear</button>`  )
:
	(	console.log("no puede canjear"),
		
		salidaPuntosFiltro.innerHTML = `<p>No puede canjear vea sus puntos y saldo o sus puntos no son suficientes</p>`
	)
}


// Fn que paermite concretar el canje de puntos por un beneficio.
function restaCambiosPuntos () {
	let  entrada = document.querySelector("#seleccion").value;
let pc = document.querySelector("#puntos").innerText; 
	let resultado =  parseInt(pc) - parseInt(entrada);
    let salidaPuntosFiltro = document.querySelector("#salidaPuntosFiltro");
	Swal.fire({
  text: `Los puntos fueron canjeados.`,
  icon: 'success',
  confirmButtonColor: '#FF0000',
  confirmButtonText: "Ok",})

	
		salidaPuntosFiltro.innerHTML =  `Ha canjeado el beneficio le quedan ${resultado} puntos`;
	console.log("A usted le quedan " + resultado)
	let p = document.querySelector("#puntos");
	p.innerHTML = `${resultado}`;
}



const productos = [
{
	id:20,
	prod: "Taza personalizada",
	img: "../assets/tazas-personalizadas.jpg"
},
{
	id:40,
	prod: "Desayuno con 70% de descuento en Starbuks",
	img: "../assets/star.jfif"
},
{
	id:60,
	prod: "Un combo familiar en KFC con 55% de descuento",
	img: "../assets/kfc.jpg"
},
{
	id:80,
	prod: "Dos entradas gratis Cinemark Hoyts",
	img: "../assets/cine.jfif"
},
{
	id:100,
	prod: "Cafetera automática con 40% de descuento",
	img: "../assets/cafetera.jpg"
}
];


function descuentos (entrada) {
console.log(entrada)
let contenedor = document.querySelector("#salidaPuntos");
productos.forEach(object => {
	 (object.id == entrada) ?

      contenedor.innerHTML = `<div style=width:350px;border:solid 2px;>
<style type="text/css">div {margin:auto;
              text-align:center;
              background-color:;}
              .divInterno{background-color:orange;
                color:white;}
</style>
<div class="divInterno" style=width:330px;border:solid 2px><p>${object.prod}<br><br> 
<img src="${object.img}" width=250px alt=""><br>
Recorda que tenés 30 días para canjearlo a partir de hoy.</p></div></div>`
 :  
 console.log("control") 
}
)}


//Funcion home banking
function registro () {
let usuarioreg = document.querySelector("#us0").value;
let passreg = document.querySelector("#pass0").value;
let x = document.querySelector("#mensajeReg");
let usGuardado ;
let passGuardado ;
 ((usuarioreg !== '') && (passreg !== '')) ? 
(  usGuardado = localStorage.setItem("us0", usuarioreg),
   passGuardado = localStorage.setItem("pass0", passreg),

x.innerHTML = `<div style=background-color:green;><p style=color:white;>Su usuario y contraseña fueron ingresados correctamente`)
: 
         
  x.innerHTML = `<div style=background-color:red;><p style=color:white;>Porfavor ingrese nombre de usuario y contraseña correctos.`;

} 

//Funcion para comparar el usuario y clave ingresados con los guardados en el localStorage
function go (){
let usuario = document.querySelector("#us").value;
let pass = document.querySelector("#pass").value;
let uscomp = localStorage.getItem("us0");
let passcomp = localStorage.getItem("pass0");
let x = document.querySelector("#mensajeReg2");
 (uscomp==usuario && passcomp==pass) ? 
        window.location.href = "./view/moneda.html" 
:
    Swal.fire({
  title: 'Su usuario o contraseña no son válidos',
  text: 'Por favor, vuelva a ingresarlos',
  icon: 'error',
  confirmButtonColor: '#FF0000',
  confirmButtonText: 'Continuar'
})
} 

