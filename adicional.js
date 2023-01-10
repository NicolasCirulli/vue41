// https://hp-api.onrender.com/api/characters/students

const numeros = [ 1,2,3,4,5,6,7,9,7 ]

const mentor = {
    nombre: 'Nicolas',
    edad: 28,
    saludar: function(){
        console.log( 'Hola ' )
    }
}

let { edad, saludar:fnSaludo ,nombre:nombreNuevo } = mentor
/* console.log( nombreNuevo ) */

let [primerElemento, segundoElemento] = numeros
let ultimoElemento = numeros[numeros.length - 1]
/* console.log( primerElemento, segundoElemento, ultimoElemento ) */

const copiaNumeros = new Set( numeros )
console.log( copiaNumeros )
console.log( [ ...copiaNumeros ] )

let copiaMentor = { ...mentor }

let mensaje = `${nombreNuevo} es ${edad > 18 ? "mayor" : "menor"}`

console.log( mensaje )

const numerosNuevos = [10,25, ...numeros]




