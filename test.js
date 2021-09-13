let library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
]

function displayInformation () {
    const arrLen = library.length
    for (let i = 0; i < arrLen; i++) {
        const book = library[i]
        if (book.readingStatus) {
            console.log(`Already read '${book.title}' by ${book.author}.`)
        } else {
            console.log(`You still need to read '${book.title}' by ${book.author}.`)
        }
    }
}

function displayInformation2 () {
    library.forEach(function (book) {
        if (book.readingStatus) {
            console.log(`Already read '${book.title}' by ${book.author}.`)
        } else {
            console.log(`You still need to read '${book.title}' by ${book.author}.`)
        }
    })
}

displayInformation()
displayInformation2()
