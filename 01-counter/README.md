This is a modern, responsive counter application built with React and styled using React-Bootstrap. It goes beyond a basic counter by allowing the user to set a custom step value for standard increment/decrement operations and also includes fields for custom increments or decrements by an arbitrary input value. It also logs every count update to the console using the useEffect hook.

✨ Features
Standard Counter Operations: Increment (+), Decrement (−), and Reset.

Custom Step Value: Change the amount by which the counter increases or decreases on standard operations. (Defaults to 1).

Arbitrary Increment/Decrement: Use a separate input field to add or subtract any desired value from the counter.

State Management: Utilizes the useState hook for managing the counter, step, and input values.

Side Effect Logging: Uses the useEffect hook to log the counter's value to the console every time it changes.

Responsive Design: Styled with React-Bootstrap for a clean, mobile-friendly interface.

🚀 Usage
The counter is the main element, prominently displayed at the top.

Standard Operations:

Click + or − to change the count by the current Step Value.

Click Reset to set the count back to 0.

Step Value:

Enter a number (e.g., 5) in the Step Value field.

Subsequent clicks on + or − will now change the count by that amount. (The input is restricted to a minimum value of 1).

Custom Increment / Decrement:

Enter a number (e.g., 100) in the Custom Increment / Decrement input field.

Click Increment by Input to add 100 to the current count.

Click Decrement by Input to subtract 100 from the current count.

🧑‍💻 Key React Concepts Used
1. useState Hook
Manages the three core pieces of state: count, step, and input.

The setCount(prev => prev + step) syntax ensures the update is based on the latest state value, which is important for accurate arithmetic operations.

2. useEffect Hook
Used to perform a side effect (logging to the console) whenever the count value changes.

The dependency array [count] ensures the function inside useEffect runs only when count changes, preventing unnecessary re-renders.

3. Event Handlers
Functions like handleStepChange and handleInput ensure the values from the form inputs are correctly parsed as numbers before being stored in the state.

4. React-Bootstrap Components
Container, Row, Col, Card, Button, Form: Used to structure and style the component, leveraging Bootstrap's grid system and styling utilities.
