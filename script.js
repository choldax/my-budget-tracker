// SpendWise Budget Foundation

// Application data
const appName = "SpendWise";
let monthlyBudget = 1500;
let currentExpenses = 0;

// Reusable function to calculate remaining balance
function calculateBalance(budget, expenses) {
    return budget - expenses;
}

// Collect budget information from the user
const userBudget = prompt("Enter your monthly budget:", monthlyBudget);

// Convert the user input from text to a number
monthlyBudget = Number(userBudget);

// Collect expense information from the user
const userExpenses = prompt("Enter your total expenses:", currentExpenses);

// Convert the user input from text to a number
currentExpenses = Number(userExpenses);

// Calculate the remaining balance
const remainingBalance = calculateBalance(monthlyBudget, currentExpenses);

// Display results in the browser console
console.log("=== SpendWise Budget Summary ===");
console.log("Application:", appName);
console.log("Monthly Budget: $" + monthlyBudget);
console.log("Total Expenses: $" + currentExpenses);
console.log("Remaining Balance: $" + remainingBalance);