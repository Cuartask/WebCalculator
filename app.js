//Uso de variables
/*var nombre =  "Grover";
console.log(nombre);
console.log(typeof(nombre));

var edad = "34";
console.log(edad);
console.log(typeof(edad));

var edad = "Cinco";
console.log(edad);
console.log(typeof(edad));

var sueldo = 1900.99;
console.log(sueldo);
console.log(typeof(sueldo));

//variable boolean
var tieneTrabajo = false;
console.log(tieneTrabajo);
console.log(typeof(tieneTrabajo));

var puestoDeTrabajo;
console.log(puestoDeTrabajo);

var puestoDeTrabajo = null;
console.log(puestoDeTrabajo);*/

/**********
*Operadores matematicos +, -, *, / 
*/
/*var edadAna, edadMaria, diferenciaEdad;
var sumaEdades, yearAna, yearMaria, yearActual;

edadAna = 34;
edadMaria = 28;
yearActual = 2019;

diferenciaEdad = edadAna - edadMaria;
sumaEdades = edadAna + edadMaria;

yearAna = yearActual - edadAna;
yearMaria = yearActual - edadMaria;

console.log(diferenciaEdad);
console.log(sumaEdades);
console.log("Año en que nació Ana" +  yearAna);
console.log("Año en que nació Maria" +  yearMaria);
console.log(yearActual * 5);
console.log(yearActual / 2);*/

/*
OPeradores logicos, unarios y de asignacion*/
//logicos <> <= >= ==
var edadAna, edadMaria, diferenciaEdad;

edadAna = 34;
edadMaria = 28;

var mayorAna = !(edadAna == edadMaria);
console.log(mayorAna);

//Unarios, ++Incremento, --Decremento
//edadAna++;
console.log(edadAna++);
console.log(edadAna);

//Asignacion, +=, -=, *=, /=, %=
var a = 12;
var b = 5;

var c =a % 5; //residuo de una division
console.log(c);
a += b;
console.log(a);

/*Sentencia If..else

var nombre = "Grover";
var esCasado = true;

if (esCasado == true){
    console.log(nombre  + " es casado.");
}else {
    console.log(nombre  + " es soltero");
}
*/

/*var nombre = "Grover";
var edad = 8;

//edad < 12 es un niño
//edad > 11, es < 18, es un adolescente
//edad > 17, es < 60, es un adulto
//edad > 60 es un adulto

if (edad < 12){
    console.log(nombre + " es un niño");
}else if((edad > 11) && (edad < 18)){
    console.log(nombre + " es un adolscente");
}else if((edad > 17) && (edad < 60)){
    console.log(nombre + " es un adulto");
}else{
    console.log(nombre + " es un anciano");
}
*/

/********************** 
 * sentencia Switch


var mes = 3;

switch(mes){
    case 1:
        console.log("Enero")
        break;
    case 2:
        console.log("Febrero")
        break;
    case 3: 
        console.log("Marzo")
        break;
    case 4:
        console.log("Abril")
        break;
    default:
        console.log("Mes no encontrato"); 
}
*/

/***********************
 * Sentencia For
 

for(var i=1; i<=10; i++){
    console.log(i);
}
*/

/**********
 * Sentencia While, Do While
 */
/*
var i = 1;
while(i <= 10){
    console.log(i);
    i++;
}
console.log(i);*/

/**************
 * Sentencia Do..While
 */
/*
var i = 11;
do{
    console.log(i);
    i++;
}while(i <= 10);
console.log(i);*/

