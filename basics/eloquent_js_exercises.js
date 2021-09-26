// Ex. 1 (Prints a staircase of #)
// for (let i = 1; i <= 8; i++) {
//     console.log('#'.repeat(i))
// }

// Ex. 2 (Print 'fizz' for numbers divisible by 3 and 'buzz' for numbers divisible by 5 but not 3, and 'fizzbuzz' for numbers divisible by 5 and 3)
for (let i = 1; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz')
    } else if (i % 3 === 0) {
        console.log('Fizz')
    } else if (i % 5 === 0) {
        console.log('Buzz')
    }
}
