# SpendWise Dashboard

SpendWise is a static personal budget tracker dashboard built with HTML and CSS. Week 4 focuses on rebuilding the tracker layout using CSS Grid and Flexbox to create a clean, responsive dashboard interface.

## Week 4 Features

### 1. Dashboard Layout

The dashboard includes:

- A sidebar navigation menu
- A main dashboard header
- A monthly budget summary
- Six expense category cards
- Food
- Transport
- Rent
- Entertainment
- Savings
- Utilities

The financial information is static because this project focuses on the visual dashboard structure rather than functionality.

### 2. CSS Grid

CSS Grid is used for the main dashboard layout.

The dashboard uses two main columns on larger screens:

- Sidebar
- Main content area

CSS Grid is also used to arrange the six category cards into multiple columns.

### 3. Flexbox

Flexbox is used inside different parts of the dashboard, including:

- Sidebar navigation
- Dashboard header
- Budget summary
- Category cards
- Card content

This helps keep the dashboard elements aligned and organized.

### 4. CSS Custom Properties

The color theme is defined using CSS variables inside `:root`.

The variables include:

- Brand color
- Accent color
- Background color
- Surface color
- Primary text color
- Secondary text color
- Border color

Using variables makes the theme easier to maintain and update.

### 5. Responsive Design

A media query is included for screens below 768px.

On smaller screens:

- The sidebar and main content become a single-column layout.
- Navigation items can wrap onto multiple lines.
- The dashboard header stacks vertically.
- The budget summary uses the available width.
- The category cards display in one column.

The responsive layout was tested using the browser's DevTools Device Toolbar.

### 6. Card Micro-interactions

The category cards include hover and keyboard focus effects.

The effects use:

- `transform`
- `box-shadow`
- CSS transitions

The transition duration is 200ms, which keeps the interaction quick and subtle.

The cards also use `tabindex="0"` so they can receive keyboard focus.

### 7. Dark Theme

A dark theme is included as a stretch goal using:

```css
@media (prefers-color-scheme: dark)
## Week 5 - JavaScript Foundation

Week 5 transforms SpendWise from a visual dashboard into an application that can process basic budgeting data using JavaScript.

### JavaScript Concepts Implemented

The project demonstrates:

- Variables
- Data types
- User input
- Number conversion
- Budget calculations
- Functions
- Console output

### Application Variables

JavaScript variables are used to store important budgeting information.

For example:

- `appName` stores the application name.
- `monthlyBudget` stores the user's monthly budget.
- `currentExpenses` stores the user's total expenses.

The project uses `const` for values that should not be reassigned and `let` for values that can change.

### User Input

SpendWise collects budgeting information using JavaScript `prompt()` dialogs.

The user provides:

1. A monthly budget.
2. Total expenses.

The input is initially received as text and is converted into numbers using `Number()` so that JavaScript can perform calculations.

### Budget Calculations

SpendWise calculates the remaining balance by subtracting total expenses from the monthly budget.

For example:

```text
Remaining Balance = Monthly Budget - Total Expenses
## Week 6: Make SpendWise Interactive

This week, I improved SpendWise by adding JavaScript interactivity to the budgeting dashboard. The application can now accept expense information from the user, store multiple expense records, calculate the total expenses, calculate the remaining budget, and display the results directly on the webpage.

### Conditional Statements

SpendWise uses if, else if, and else statements to evaluate the remaining budget. The application checks whether the user is over budget, has reached the budget, has a low remaining balance, or still has a healthy remaining balance.

### Arrays

An expenses array is used to store multiple expense records. Each expense is stored as an object containing the expense name, amount, and category.

### Loops

The forEach() method is used to loop through the expenses array. The loop calculates the total amount spent and also displays each expense record on the webpage.

### DOM Manipulation

SpendWise uses DOM methods such as getElementById(), createElement(), textContent, innerHTML, and appendChild() to update the webpage dynamically. This allows the budget, total expenses, remaining balance, status, and expense list to change without manually refreshing the page.

### Events and User Interactions

An addEventListener() method is attached to the expense form. When the user submits the form, JavaScript captures the information, validates the input, adds the new expense to the array, and updates the dashboard.

The preventDefault() method prevents the browser from refreshing the page when the form is submitted.

### Challenges and Solutions

One challenge was connecting the user input to the dashboard instead of displaying the results only in the browser console. I resolved this by using DOM manipulation to update elements on the webpage.

Another challenge was managing multiple expense records. I used an array to store the records and a forEach() loop to process and display them.

### Week 6 Concepts Demonstrated

- Conditional statements
- Arrays
- Objects
- forEach() loops
- DOM manipulation
- Event listeners
- Form handling
- Input validation
- Dynamic webpage updates