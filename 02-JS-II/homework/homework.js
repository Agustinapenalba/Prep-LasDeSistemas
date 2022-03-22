// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "return" la string provista: str
  // Tu código:
  var CadenaDeTexto = str;
  return CadenaDeTexto;
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
    var Sumar = x + y;
      return Sumar;
}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
    var Restar = x - y;
      return Restar;
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  multiplica = x * y ;
  return multiplica;
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
    var Dividir = x / y;
    return Dividir ;
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
    if (x === y) {
    Iguales = true;
  } else  {
    Iguales = false;
  }  
   return Iguales;
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if (str1.length==str2.length) {
   longitud = true;
   } else {
   longitud = false;}
   return longitud;
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num < 90) {  
  esmenor = true ;
} else {
  esmenor = false;}
  return esmenor;
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
    if (num > 50)
    { 
  esmayor = true ;
} else {
  esmayor = false;}
  return esmayor;
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  var Resto = (x%y);
  return Resto;
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
	if (num % 2 == 0 ) 
  { 
	NumPar = true;}
  else { 
  NumPar = false;}
  return NumPar;
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  var xnum = num;
	if ((xnum % 2) == 1) {
		NumImpar = true;
  } else {
  NumImpar = false;}
  return NumImpar;
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
   NumElevado = Math.pow(num,2) ;
   return NumElevado;
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  NumElevado = Math.pow(num,3) ;
  return NumElevado;
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  NumElevado = Math.pow(num,exponent) ;
  return NumElevado;
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  var NumRedondeado = Math.round(num);
  return NumRedondeado;
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  return Math.ceil(num);
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  return Math.random();
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  var Print
  if (numero > 0)
  {
	  Print = 'Es positivo';
  } else if (numero < 0) {
    Print = 'Es negativo';
  } else  {
    Print=false;}  
	return Print;
}

//if (numero == 0 ) return false ;
//if (numero > 0 ) return "Es positivo";
//if (numero < 0 ) return "Es negativo";

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  var Cadena = str +'!';
  return Cadena;
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  var Combinar = nombre + ' ' + apellido ;
  return Combinar;
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  var Concatenar = 'Hola ' + nombre +'!';
  return Concatenar ;
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  var Area = (alto*ancho) ;
  return Area;
}


function retornarPerimetro(lado){
  //Escribe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  var Perimetro = (lado*4);
  return Perimetro;
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  Area = ((base*altura)/2);
  return Area;
}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  Cambio = (euro*1.20);
  return Cambio;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
};