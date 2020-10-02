let isAccountLocked = false
let userRole = 'user'

if (isAccountLocked) {
    console.log("Is account locked?")    
}else if (userRole === 'admin'){
     console.log('Welcome Admin!')
}else{
    console.log('Welcome!')
}


//Challenge Area

let temp = 45
let isFreezing = temp <= 32

if (temp <= 32) {
    console.log('It is freezing outside!')
}else if((33 <= temp) && (temp<= 89)){
   console.log("Go for it!... It's good weather outside!")
}else{
    console.log("Its's too hot outside!")
}