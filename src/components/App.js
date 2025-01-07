
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  // initialize the state to track the number of buttons clicked
  const [count, setCount] = useState(0);

  // event handler to increment the counts on the button click
  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <button onClick={handleClick}>Click Me</button>
        <p>Button Clicked {count} times</p>
    </div>
  )
}

export default App;
