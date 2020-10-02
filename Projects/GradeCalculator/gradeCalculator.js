//Take in 2 arguments => student score, total possible score
//Example 15/50 -> You got a C (75%)
//A = 90-100; B = 80-89; C = 70-79; D = 60-69; F = 0-59
function gradeCalculator(studentScore, totalPossibleScore) {
    let testScore = ((studentScore/totalPossibleScore)*100)
    let letterGrade = ''
    console.log(testScore)
    if ((testScore < 0) || (testScore > 100) || (totalPossibleScore === 0)){
        console.log("Student score is invalid.  The score must be within the point range of 0 - 100 ")
    }else if ((90 <= testScore)){
        letterGrade = "A"
    }else if ((80 <= testScore)){
        letterGrade = "B"
    }else if ((70 <= testScore)){
        letterGrade = "C"
    }else if ((60 <= testScore)){
        letterGrade = "D"
    }else {
        letterGrade = "F"
    }
    return `You got ${studentScore}/${totalPossibleScore} correct for an ${letterGrade} on this test with a score of ${testScore}%`
}
let studentGrade = gradeCalculator(15, 20)
console.log(studentGrade)