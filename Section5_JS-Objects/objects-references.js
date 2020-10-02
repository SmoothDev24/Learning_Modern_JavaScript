// let myAccount = {
//     name: 'Randy Smith',
//     expenses: 0,
//     income: 0
// }


// function addExpense(account, amount) {
//     account.expenses = account.expenses + amount
//     console.log(account)
    
// }
// addExpense(myAccount, 2.50)
// console.log(myAccount)

//Challenge Area - Building an Expense Tracker
    //Add income
    //Add Expense(s)
    //Add Expense(s)
    //Check Account
    //get Account Summary
        //Account for Smooth has $900. $1000 in income. $100 in expenses.
    //reset Account    
    //get Account Summary
        //Account for Smooth has $900. $1000 in income. $100 in expenses.
    
let myAccount = {
    name: 'Randy Smith',
    expenses: 0,
    income: 0,
    balance: 0
}

function addExpense(account, amount) {
    account.expenses = account.expenses + amount    
}

function addIncome(account, amount) {
    account.income = account.income + amount 
}

function getBalance(account) {
    account.balance = account.income - account.expenses
}

function resetAccount(account){
    account.expenses = 0
    account.income = 0
    account.balance = 0
    return{
        accountZero: `Account for ${myAccount.name} had $${myAccount.balance}. $${myAccount.income} in income. $${myAccount.expenses} in expenses.`
    }
}
resetAccount(myAccount)

function getAccountSummary() {
    return{
        funds: `Account for  ${myAccount.name} has $${myAccount.balance}. $${myAccount.income} in income. $${myAccount.expenses} in expenses.`
    }    
}
addIncome(myAccount, 2000)
addExpense(myAccount, 100)
addExpense(myAccount,750)
getBalance(myAccount)
let myFunds = getAccountSummary()
console.log(myAccount)
let meBroke = resetAccount(myAccount)
console.log(myFunds.funds)
console.log(meBroke.accountZero)
console.log(myAccount)
