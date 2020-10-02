let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326

}

console.log(`${myBook.title} by ${myBook.author}`)
myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

//Challenge Area
//Create an object for a person that includes the following
//name, age, location
//Generate a string using the object items that states name is age and lives in location.
//Increase age by 1 and re-run the script

let userInfo = {
    name: 'SmoothDev24',
    age: 39,
    location: 'Georgia'
}
console.log(`${userInfo.name} is ${userInfo.age} and he lives in ${userInfo.location}.`)

userInfo.age = userInfo.age +1
console.log(`${userInfo.name} is ${userInfo.age} and he lives in ${userInfo.location}.`)