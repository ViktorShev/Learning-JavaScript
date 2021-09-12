function sum (x, y) {
    const total = x + y
    console.log(total)
}

sum(10, 5)

let total = 0
while (total < 10) {
    total += 1
    console.log(`Value of i (using while loop): ${total}`)
}

for (let i = 0; i <= 10; i++) {
    console.log(`Value of i (using for loop): ${i}`)
}

let stopVar = 0
do {
    stopVar += 1
    console.log(`Hello N*${stopVar}`)
} while (stopVar < 10)

for (let i = 0; i <= 11; i++) {
    if (i < 5) {
        console.log('I is less than 5')
    } else if (5 < i && 7 > i) {
        console.log('I is between 5 and 7')
    } else if (i > 7) {
        console.log('I is greater than 7')
    }
}
