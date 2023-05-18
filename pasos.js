
//Definir variable "nombre".
let nombre;

//Solicitamos que ingrese el nombre al usuario.
nombre = prompt ('Ingrese su nombre: ');

//Comprobacion de que ingrese un valor, que si presiona enter sin cargar un valor o presione ESC no lo permita avanzar.
while ((nombre === "") || (nombre == null)){
                        alert ('Ingrese su nombre por favor para continuar');
                        nombre = prompt ('Ingrese su nombre: ');
                     }

//Damos la bienvenida al usuario y mostramos por consola tambien.
alert ('Bienvenido '+nombre);
console.log (nombre);

//Solicitamos ingrese su edad al usuario, lo parseamos a entero y ese valor toma la variable "edad".
let edad = parseInt (prompt ('Ingresa tu edad: '));

//Comprobacion de que ingrese un valor, que si coloca un 0 o presione solo ESC o no cargue su edad no lo permita avanzar.
while ((edad == 0 ) || isNaN(edad) || (edad === null) || (edad === "")) 
                                                                {
                                                                    alert ('Ingrese su edad por favor para continuar');
                                                                    edad = prompt ('Ingrese su edad: ');
                                                                }
               
//Mostramos la edad ingresada por consola.
console.log (edad);
                
//Solicitamos ingrese la cantidad de kilometros que realizo el usuario.   
let kilometros = parseFloat (prompt('¿Cuántos kilometros realizaste ' +nombre+ ' hoy?'));

//Comprobacion de que ingrese un valor, que si coloca un 0 o presione solo ESC o no cargue sus kilometros realizados o cargue una letra no lo permita avanzar.
while ((kilometros === "") || isNaN(kilometros) ||(kilometros == 0) || (kilometros === null)) 
                                                                {
                                                                    alert ('Ingrese los kilometros realizados el dia de hoy. \nRecuerda que debes colocar un número. \nUtiliza el punto si vas a colocar un valor decimal.');
                                                                    kilometros = parseInt (prompt('¿Cuántos kilometros realizaste ' +nombre+ ' hoy?'));
                                                                }

//Funcion "caminar" calcula los pasos por kilometro realizado y condicionales para saber si llego al objetivo.
//La cantidad de pasos aproximado por cada kilometro son 1500.
//La cantidad de pasos recomendado por dia son minimo 10000.
function caminar (pasosRealizados) {
                                        pasosRealizados = kilometros * 1500;
                                        console.log (pasosRealizados);
                                        if (pasosRealizados >= 10000)
                                                                    {
                                                                        alert ('Felicitaciones caminaste lo recomendado por día que son más de 10000 pasos. \nRealizaste '+pasosRealizados+ ' pasos hoy. \n¡¡¡A seguir así '+nombre+' !!!');
                                                                    }
                                                                    else
                                                                    {
                                                                        alert ('Caminaste '+pasosRealizados+ ' pasos hoy, lo recomendado es hacer mínimo 10000 pasos por día.\n¡¡¡Ánimo a seguir intentando!!!');
                                                                    }
                                    }

caminar();

//Despedida
alert ('¡¡¡Gracias por utilizar esta web y por estar interesado en mantenerte en forma!!!');

