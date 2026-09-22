// SpendWise Budget Foundation

// Application data
const appName = "SpendWise";
let monthlyBudget = 1500;
let currentExpenses = 0;

// Reusable function to calculate remaining balance
function calculateBalance(budget, expenses) {
    return budget - expenses;
}

const userBudget = prompt("Enter your monthly budget:", monthlyBudget);

monthlyBudget = Number(userBudget);

if (isNaN(monthlyBudget)) {
    console.warn("Invalid budget entered. Using default budget of $1500.");
    monthlyBudget = 1500;
}

const userExpenses = prompt("Enter your total expenses:", currentExpenses);

currentExpenses = Number(userExpenses);

if (isNaN(currentExpenses)) {
    console.warn("Invalid expenses entered. Using default expenses of $0.");
    currentExpenses = 0;
}

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