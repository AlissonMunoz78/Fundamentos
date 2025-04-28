//variable
//contenedor de informacion
//ES6
//let -const
//var X -hoisting
var CI = 123
let suerldo = 500

//tipos de datos - Primitivos
let numOrden = 127 //INT
let modulo="Mis ordenes"//String
let status = true//Boolean
let tipoPago='E'//Char
let precioFinal = 155.99//Float
let sueldo//Undefied

//Tipo de datos - Compuestos
let ordenes=["Balon","Camiseta","Zapato"]//Array
let detalleOrden={
    id:1,
    espacio: true,
    precio: 150.99,
    items: ["PC","Monitor","Teclado"]
}

//Tarea desafio cual es la diferencia entre un json vs un objeto
//claves entre comillas dobles 


//strings

let nombreCompleto="Alisson Muñoz"
nombreCompleto.length//VALIDAR EL PASSWORD
nombreCompleto.toUpperCase()// guardar en bdd
nombreCompleto.toLocaleLowerCase()//guardar en bdd

nombreCompleto.trim()//remueve los espacion en blanco del caracter en un string 
nombreCompleto.includes("Alisson")//validar roles, nombres, etc

//ES6
//Strings
console.log("HOLA "+nombreCompleto)

console.log(`Hola ${nombreCompleto}`)//comillas inversas ALT GR tecla al lado del enter


//Numbers

let cuotas ="36"
console.log(cuotas+1)

//ES6 
console.log(+cuotas+1)

//
console.log( 4 * 3 **2)

//Boolean
let saldoCuenta = 1000
let saldoTarjeta = "1000"

console.log(saldoCuenta == saldoTarjeta)
//ES6 comparacion del valor y tipo "comparacion estricta"
console.log(saldoCuenta === saldoTarjeta)

//condicionales
let carritoCompras =[]
if (carritoCompras.length > 0){
    console.log("Carrito vacio")
}
else{
    console.log("Carrito lleno")
}

//ES6 operador ternario
carritoCompras.length === 0 ? log("Carrito vacio"): console.log("Carrito lleno")

//funciones
//funcion -bloque de codigo reutilizable
//funcion declarada
function validarUsuario(){
    console.log("Usuario validado")
}

//funcion expresada
const validarRol = function(){
    console.log("Rol validado")
}

//ES6-funsion flecha 
const validarMail = ()=>{
    console.log("Mail validado")
}