//var x = 'AAAA ';
//var empty = 'hola';

//console.log('Mozilla ' + x.length + 'caracteres ');
/* "Mozilla is 7 code units long" */

//console.log('The empty string has a length of ' + empty.length);
let placa = "ABC-2030"; // el let es una fucnio que nos permite almacenar valores a la variable, en este caso a placa.
for (let i = 0; i < placa.length; i++) { // el bucle for nos ayuda a que la funcion let se repita las veces necesarias, hasta qie la funcion se cumpla.
    //let que es la funcion que nos ayuda a ldar valoss a placa a a uniciar desde cero. y de ahi va a sumar de uno en uno hasta cumplir la condicon.
    //es decir que nos imprima los espacios que estamos pidiendo en este caso la posicon 4 hasta el 7.
    console.log(placa.substring(4, 8)); //aqui sacamos la posicio de la cadena que en este caso es la posicion 4 hasta el ocho

}