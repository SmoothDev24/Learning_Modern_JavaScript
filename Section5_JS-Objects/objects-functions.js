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
let tempMetric = {

}
function covertTemp(temp) {
    return{
     fahrenheit: temp,
     celsius: ((temp - 32)* (5/9)),
     kelvin: ((temp + 459.67)*(5/9))
    }
}
let temps = covertTemp(70)
console.log(temps)