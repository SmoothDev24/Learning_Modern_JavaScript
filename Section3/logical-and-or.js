// let temp = 55
// //Logical 'And' Operator - True if both sides are true. False otherwise.
// if ((temp >= 60) && (temp <= 90)){
//     console.log("It is pretty nice out!")
// }//Logical 'Or' Operator - True if at least one side is true. False otherwise.
// else if ((temp <=0) || (temp >= 120)){
//     console.log("Do not go outside.")
// }else{
//     console.log('Eh... do what you want.')
// }


//Challenge Area - Resturant Reservation System
let isGuess1Vegan = false
let isGuess2Vegan = false

//Are both Vegan? -> Only offer up vegan dishes.
//At least one is vegan? -> Make sure to offer up some vegan options.
//Else -> Offer up anything on the menu
if ((isGuess1Vegan !== false) && (isGuess2Vegan !== false)){
    console.log('Only offer vegan dishes.')
}else if((isGuess1Vegan !== false) || (isGuess2Vegan !== false)){
    console.log('Make sure to offer up some vegan dishes.')
}else(
    console.log('Offer up anything on the menu.')
)