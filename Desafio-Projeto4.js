const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
  }

function createTransaction(transaction)
{   
    user.transactions.push(transaction)

    if(transaction.type === "credit")
        user.balance = user.balance + transaction.value
    if(transaction.type === "debit")
        user.balance = user.balance - transaction.value
}

function getHigherTransactionByType(type)
{
    let higherTransaction
    let higherValue = 0    
    for (let transaction of user.transactions){
        if (transaction.type == type && transaction.value > higherValue){
            higherValue = transaction.value
            higherTransaction = transaction
        }
    }
        
    return higherTransaction

}


function getAverageTransactionValue()
{   
    let averageValue = 0
    for(let transaction of user.transactions)
        averageValue = averageValue + transaction.value
    
    return averageValue/user.transactions.length
}

function getTransactionsCount()
{
    let debitType = 0
    let creditType = 0
    for(let transaction of user.transactions){
        if (transaction.type === "debit")
            debitType = debitType + 1
        if (transaction.type === "credit")
            creditType = creditType + 1}
    return { credit: creditType, debit: debitType}
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

console.log(getHigherTransactionByType("credit")) // { type: 'credit', value: 120 }
console.log(getHigherTransactionByType("debit")) // { type: 'debit', value: 80 }

console.log(getAverageTransactionValue()) // 70

console.log(getTransactionsCount()) // { credit: 2, debit: 2 }