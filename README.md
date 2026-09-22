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