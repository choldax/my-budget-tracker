# My Budget Tracker

## Project Description

My Budget Tracker is a simple web-based personal budget and expense tracker. This project is being developed step by step throughout the course. In Week 2, I improved the static website by adding an expense table, upgrading the expense form, adding multimedia content, and practicing advanced CSS selectors.

## What I Built

### 1. Expense Table

I added a structured HTML table using:

- `<table>`
- `<thead>`
- `<tbody>`
- `<tr>`
- `<th>`
- `<td>`

The table contains four columns:

- Name
- Amount
- Category
- Date

I also added five sample expense records.

### 2. Add Expense Form

I upgraded the Add Expense form by adding:

- Expense name input
- Amount input
- Category dropdown
- Add Expense button

The category dropdown contains five options:

- Food
- Transport
- Rent
- Entertainment
- Other

Each form control has a clear and matching ID.

### 3. Multimedia Content

I added a budget tracker icon using an `<img>` element with `src`, `alt`, and `width` attributes.

I also embedded a YouTube video using an `<iframe>` with width, height, title, and frameborder attributes.

### 4. Interactive Elements

I added a `<details>` and `<summary>` section explaining how to use the tracker.

I also added a hover effect to the expense table rows and a pointer cursor to the Add Expense button.

### 5. Advanced CSS Selectors

I used several advanced CSS selectors, including:

- Descendant selector: `.expenses-section td`
- Negation selector: `input:not([type="submit"])`
- Position pseudo-class: `tbody tr:nth-child(even)`
- Focus pseudo-class: `input:focus`
- Hover pseudo-class: `tbody tr:hover`

These selectors are used to improve the appearance and interaction of the page.

## Files

- `index.html` - Contains the HTML structure and content.
- `style.css` - Contains the styling and CSS selectors.
- `README.md` - Explains the project and its features.

## Future Development

In future weeks, I will add JavaScript functionality so users can enter expenses and have them added to the expense table dynamically.