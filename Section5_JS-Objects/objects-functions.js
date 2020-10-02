let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326

}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723

}

function getSummary(book) {
    return{
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }
    

    
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

//Challenge Area
//Create function - that takes in Fahrenheit - and returns an object with all three tempurature metrics

function covertTemp(temp) {
    return{
     fahrenheit: temp,
     celsius: ((temp - 32)* (5/9)),
     kelvin: ((temp + 459.67)*(5/9))
    }
}
let temps = covertTemp(70)
console.log(temps.celsius)

let myCar = {
    year: 1972,
    make: 'Chevy',
    model: 'Monte Carlo',
    topSpeed: 130
}

function vehicle(car) {
    return{
        typeSummary:`I have a ${myCar.make} ${myCar.model}.`,
        detailedSummary: `My car is a ${myCar.year} ${myCar.make} ${myCar.model} and it has a top speed of ${myCar.topSpeed}mph.`
    }   
}

let myAuto = vehicle(myCar)
console.log(myAuto.detailedSummary)