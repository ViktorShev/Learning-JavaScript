// Concatenation
console.log('con' + 'cat' + 'e' + 'nate')
console.log('con', 'cat', 'e', 'nate')

// F-strings in JS
console.log(`Half of 50 is ${50/2}`)
console.log(`Sum of 10 + 5: ${10 + 5}`)

// Unary operators
console.log(typeof 'a')
console.log(typeof 60)

// Doesn't execute the sum before typeof
console.log(typeof 10 + 5)

// Executes the sum before typeof
console.log(typeof (10 + 5))

// Simple if
var num = 10
if (typeof num === 'number') {
    console.log('It\'s a number')
} 
else {
    console.log('It\'s not a number')
}

// - is a binary and unary operator
console.log(-(10 - 2))

// Boolean values
console.log(`Is 3 greater than 2? - ${3 > 2}`)
console.log('Z' > 'a') // compares unicode value
console.log(`Is 3 less that 2? - ${3 < 2}`)
console.log(`Is 'Hello' different of 'World?' - ${false}`)
console.log(`Is 'Hello' the same as 'Hello'? - ${true}`)

const years = 10
console.log(`I am ${years} years old`)
console.log(isNaN(NaN))

// Boolean operators (and, or, not)

// && = and
console.log(true && false)
console.log(true && true)

// || = or
console.log(true || false)
console.log(false || false)

// ! = not
console.log(!true)
console.log(!false)

// ? = ternary operator
// el valor booleano a la izquierda del signo de pregunta va a elegir que valor de los de la derecha va a mostrar
// true = valor a la izquierda, false = valor a la derecha
console.log(true ? 1 : 2)
console.log(false ? 1 : 2)

// JavaScript convierte los tipos de valores automaticamente
console.log('5' - 1)
console.log('8' * null)
console.log(NaN - 1)
console.log(false === 0)
const x = 1

console.log()
function a () {
    function b () {
        for (let a = 1; a < 10; a++) {
            let c
            console.log(c, x)
        }
    }

    b()
}

a()
