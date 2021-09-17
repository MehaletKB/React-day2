// import React, { useEffect, useState } from "react";
import React, { useState } from "react";
import Form from "./components/Form";

function App() {
  // // Create the count state.
  // const [count, setCount] = useState(0);

  // // Update the count state every second.
  // // This 'listens' for any updates to the DOM regarding this component.
  // // This will run every time the component is rendered.
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     // Update the count state every second.
  //     setCount(count + 1);
  //   }, 1000);

  //   // Clean up the timer whenever the component is re-rendered.
  //   // Whatever is returned from the callback inside of a `useEffect`
  //   // will perform any cleanup that needs to happen.
  //   return () => {
  //     // Be sure to clear the timer when the component is unmounted.
  //     clearTimeout(timer);
  //   };
  // });

  const [todos, setTodos] = useState([]);

  return (
    <main>
      {/* {count} */}

      <Form handler={setTodos} currentNum={todos.length + 1} />
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </main>
  );
}

export default App;
