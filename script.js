// SpendWise Interactive Budget Tracker

const appName = "SpendWise";
let monthlyBudget = 1500;

// Store multiple expense records in an array
let expenses = [];

// Select HTML elements from the page
const expenseForm = document.getElementById("expenseForm");
const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const expenseCategory = document.getElementById("expenseCategory");

const budgetDisplay = document.getElementById("budgetDisplay");
const expenseDisplay = document.getElementById("expenseDisplay");
const balanceDisplay = document.getElementById("balanceDisplay");
const statusDisplay = document.getElementById("statusDisplay");
const expenseList = document.getElementById("expenseList");
const message = document.getElementById("message");

// Calculate the total amount spent
function calculateTotalExpenses() {
    let total = 0;

    // Loop through every expense in the array
    expenses.forEach(function (expense) {
        total += expense.amount;
    });

    return total;
}

// Calculate the remaining balance
function calculateBalance(budget, totalExpenses) {
    return budget - totalExpenses;
}

// Decide what message to show based on the remaining balance
function getBudgetStatus(balance) {
    if (balance < 0) {
        return "You are over budget.";
    } else if (balance === 0) {
        return "You have reached your budget.";
    } else if (balance < 200) {
        return "Your remaining budget is getting low.";
    } else {
        return "Your budget is in good shape.";
    }
}

// Display all expenses on the webpage
function displayExpenses() {
    if (expenses.length === 0) {
        expenseList.innerHTML = "<p>No expenses added yet.</p>";
        return;
    }

    expenseList.innerHTML = "";

    // Loop through the expense records
    expenses.forEach(function (expense, index) {
        const expenseItem = document.createElement("div");

        expenseItem.className = "expense-item";

        expenseItem.innerHTML = `
            <h3>${expense.name}</h3>
            <p>Amount: $${expense.amount.toFixed(2)}</p>
            <p>Category: ${expense.category}</p>
            <p>Expense #${index + 1}</p>
        `;

        expenseList.appendChild(expenseItem);
    });
}

// Update the dashboard
function updateDashboard() {
    const totalExpenses = calculateTotalExpenses();
    const remainingBalance = calculateBalance(
        monthlyBudget,
        totalExpenses
    );

    budgetDisplay.textContent = `$${monthlyBudget.toFixed(2)}`;
    expenseDisplay.textContent = `$${totalExpenses.toFixed(2)}`;
    balanceDisplay.textContent = `$${remainingBalance.toFixed(2)}`;

    statusDisplay.textContent = getBudgetStatus(remainingBalance);

    displayExpenses();

    console.log("=== SpendWise Budget Summary ===");
    console.log("Application:", appName);
    console.log("Monthly Budget:", monthlyBudget);
    console.log("Total Expenses:", totalExpenses);
    console.log("Remaining Balance:", remainingBalance);
}

// Handle the expense form submission
expenseForm.addEventListener("submit", function (event) {
    // Prevent the browser from refreshing the page
    event.preventDefault();

    const name = expenseName.value.trim();
    const amount = Number(expenseAmount.value);
    const category = expenseCategory.value;

    // Validate user input
    if (name === "" || isNaN(amount) || amount <= 0 || category === "") {
        message.textContent = "Please enter valid expense information.";
        return;
    }

    // Create a new expense record
    const newExpense = {
        name: name,
        amount: amount,
        category: category
    };

    // Add the expense to the array
    expenses.push(newExpense);

    message.textContent = "Expense added successfully.";

    // Update the dashboard
    updateDashboard();

    // Clear the form
    expenseForm.reset();
});

// Display the initial dashboard
updateDashboard();