var e
var arrayf = [e]
/*Declaro las variables de ambito global para que abarque todas
las funciones.*/
function recorarray(){
var i
var array1 = [i]
//Estas serian variables locales de ésta funcion.
for (i=0; i<10;i++){
array1[i]=Math.round((Math.random() * 200))
/*De la siguiente manera utilizamos Math.random()*200 para
crear una serie de números aleatorios entre 0 y 200 y 
utilizamos el metodo Math.round para redondear el resultado
*/
}
console.log('Este seria nuestro array sin filtrar = ' + array1)

//De esta manera mostramos por consola nuestro resultado

for(i=0; i<array1.length;i++){
    if(array1[i]>100){
    delete array1[i]
    }
}
/*mediante el metodo "delete" eliminamos las casillas con
numeros comprendidos entre el 0 y el 100 */


arrayf = array1.filter(Number)
/*Mediante el método filter podremos filtrar las casillas
que poseen un número por tanto que esten comprendidas entre
el 0 y el 100*/


console.log("Nuestro array finalmente seria el siguiente = "  + arrayf)
}

function sumarray(){

var sum = 0
for (e=0; e<arrayf.length;e++){
    sum = sum + arrayf[e]
}
var media=(sum/arrayf.length)
console.log('La media sera de : ' + media)
}