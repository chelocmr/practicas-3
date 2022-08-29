// Crear un array o arreglo
let arreglo = ['JavaScript','Php','Java','Csharp']

// Cantidad de elementos de un arreglo (longitud)
let longitud = arreglo.length
console.log('longitud: '+longitud)

//primer elemento del arreglo

console.log( 'Primer elemento: '+arreglo[0] )

//ultimo elemento de un arreglo
console.log( 'Ultimo elemento: '+arreglo[longitud-1] )

// recorrer array con forEach
arreglo.forEach(element => {
console.log(element)
});

// recorrer array con forEach
arreglo.forEach( (element, index) => {
    //mostrar el indice y el elemneto
    console.log(index+'-'+element)
    });

//agrego un elemento al final del array

arreglo.push('Go')
console.log(arreglo)

//Eliminar el ultimo elemento de un arreglo
arreglo.pop()
console.log(arreglo)

//Agregar un elemento al inicia del array
arreglo.unshift('Go')
console.log(arreglo)

//Eliminar primer elemento de un array
arreglo.shift()
console.log(arreglo)

//Conocer el indice de un elemento
const indice = arreglo.indexOf('Java')
console.log('indice de Java es: '+indice)
console.log(arreglo[indice])

// eliminar un elemento conociendo su indice

const eliminacion = arreglo.splice(indice,1)
console.log(arreglo)
console.log('Elemento eliminado: '+eliminacion)


// eliminar mas de un elemento
// splice(indice,cant)
const elimiancion = arreglo.splice(indice,2)
console.log(arreglo)
console.log('Elementos eliminados: '+eliminacion)

//generar copia de un arreglo
let copia = arreglo.slice()
console.log(copia.push('Go'))

//cuando concatenamos un array con un string, todo se traduce a cadena de texto
console.log('Arreglo copia: '+copia)
console.log('Original: '+arreglo)

// funcion tradicional
function operar(){
    console.log('probando')
}

//funcion flecha
const calcular  = () => console.log('probando')


