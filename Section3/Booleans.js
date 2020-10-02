// let temp = 45
// let isFreezing = temp <= 32

// if (temp <= 32) {
//     console.log('It is freezing outside!')
// }else if((33 <= temp) && (temp<= 89)){
//    console.log("Go for it!... It's good weather outside!")
// }else{
//     console.log("Its's too hot outside!")
// }



let customerAge = prompt("Enter your age.")
if (customerAge <= 12){
    console.log("You qualify for the child discount.");
}else if (customerAge >= 65){
    console.log('You qualify for the senior discount.')
}else{
    console.log("Customer must pay the general admission price.")
}