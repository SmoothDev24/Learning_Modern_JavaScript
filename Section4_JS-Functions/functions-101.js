//Functions consist of 3 parts: input, code, output 
//function (input){
//    (code)
// return (output)
//}

let greetUser = function () {
    console.log('Welcome users!')
}
greetUser()

// <-------------------------------------------------->

let square = function (num) {
    let result = num*num
    // console.log(result)
    return result

}

let value = square(4)
let otherValue = square(12)
console.log(value)
console.log(otherValue)

//Code Challenge Area

//convertFahrenheitToCelsius
//Call it a couple of times [(32 -> 0) & (68 -> 20)]
//Print the converted values


function convertFahrenheitToCelsius(tempFahrenheit){
    let temp = ((tempFahrenheit-32)*(5/9))
    return temp
}

let temp1 = convertFahrenheitToCelsius(32)
let temp2 = convertFahrenheitToCelsius(68)
console.log("Your tempurature in Celsius is: " + temp1)
console.log("Your tempurature in Celsius is: " + temp2)