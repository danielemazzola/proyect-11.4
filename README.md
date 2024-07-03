# Project 11.4: Rock the Code - Technical Documentation

## Overview

**Project Name:** Project 11.4: Rock the Code  
**Repository:** [GitHub - danielemazzola/proyect-11.4](https://github.com/danielemazzola/proyect-11.4)

This project is a simple calculator application built with React and Vite. The application allows users to perform basic arithmetic operations and view the history of their calculations.

## Technologies Used

| Technology       | Description                                           |
| ---------------- | ----------------------------------------------------- |
| React            | A JavaScript library for building user interfaces.    |
| Vite             | A build tool that provides a fast development server. |
| JavaScript (ES6) | The programming language used for the application.    |
| CSS              | Styling for the application UI.                       |
| HTML             | Structure of the application.                         |

## Project Structure

```
proyect-11.4/
│
├── src/
│ ├── components/
│ │ └── calculator
│ │ │ └── Calculator.jsx
│ │ │ └── Calculator.css
│ │ └── time
│ │ │ └── Time.jsx
│ │ │ └── Time.css
├─├── hooks/
│ │ └── useTime.jsx
│ ├── App.js
│ ├── main.js
│ ├── index.css
│ └── Calculator.css
│
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## Custom Hook: useTime

The `useTime` custom hook provides a way to fetch and update the current time in a React component.

### Usage

1. **Import the Hook:**

   ```javascript
   import useTime from './useTime'
   ```

2. **Call the Hook:**

```
const currentTime = useTime();
```

## Display the Time:

Use the `currentTime` variable wherever you need to display the current time.

## How it Works

The `useTime` hook uses React's `useState` and `useEffect` hooks to manage and update the current date and time:

- **useState:** Initializes `currentDate` state with the current date and time (`new Date()`).

- **useEffect:** Sets up an interval that updates `currentDate` every second (1000 milliseconds). This ensures that the time displayed is always up-to-date.

- **Cleanup:** The interval is cleared when the component unmounts to avoid memory leaks (`clearInterval(intervalTime)`).
