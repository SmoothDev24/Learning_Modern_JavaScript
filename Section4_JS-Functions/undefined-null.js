//Undefined for variable
let name

name = 'jeffrey'
if (name === undefined) {
    console.log('Please provide a name!')
}else{
    console.log(name)
}

//Undefined for function arguments
let square = function(num){
    console.log(num)
}

// square() #Note: this is undefined because there is not argument in this function call.

//Undefined as the function return default value
let result = square()
console.log(result)


//Null as assigned value
let age = 27

age = null

console.log(age)