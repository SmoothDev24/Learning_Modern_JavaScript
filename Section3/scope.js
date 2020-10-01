//Javascript uses Lexical Scoping (static scoping)
//Global Scope - Defined outside of all code blocks
//Local Scope - Defined inside of a code block

//In a scope you can access variables defined in that scope or any parent/ancestor

//Global Scope -> (varOne)
    //Local Scope -> (varTwo)
        //Local Scope -> (varFour)
    //Local Scop -> (varThree)

let varOne = 'varOne'

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)
    
    if (true) {
        let varFour = "varFour"
    }
}


if (true){
    let varThree = 'varThree'
}

console.log(varTwo)
