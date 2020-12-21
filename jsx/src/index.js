// 1. Import the React and ReactDOM libraries (*recommended)
//    - *ES2015 Modules, uses the "import" statement
//    - CommonJS Modules uses the "require" statement
import React from "react";
import ReactDOM from "react-dom";

// 2. Create a react component
//    - A component is either a "Function" or a "Class"
//    - that produces HTML to show the user using JSX
//    - and handles feedback from the user using Event Handlers

const App = () => {
  const labelText = "Enter name: ";
  const buttonText = { text: "Submit" };
  // Note:
  // Styles can also be added inline like so <button style={{ backgroundColor: "blue" }}>
  const style = { backgroundColor: "blue", color: "white" };

  return (
    <div>
      <label class="label" for="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={style}>{buttonText}</button>
    </div>
  );
};
// Note: JSX is converted to regular JS. For example the function App is converted to:
// JSX:
// const App = () => {
//   return <div>Hi there!</div>;
// };

// JS:
// const App = () => {
//     return React.createElement(
//         "div",
//         null,
//         "Hi there!"
//     );
// };

// (3) Take the react component and show it on the screen
//     - param1, Uses the ReactDOM library to render your "App" which return JSX content
//     - param2, specifies where to put the "App" content in public/index.html.
//       In this case we add the content as a child to the div with id="root".
ReactDOM.render(<App />, document.querySelector("#root"));
