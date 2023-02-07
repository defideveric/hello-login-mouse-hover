import React, { useState } from "react";

function App() {
  const [headingText, setHeading] = useState(" ");
  const [isMousedOver, setMouseOver] = useState(false);
  const [name, setName] = useState("");


  function handleClick(event) {
    setHeading(name);

    event.preventDefault();
  }


function handleMouseOver() {
  setMouseOver(true)
}


function handleMouseOut() {
  setMouseOver(false)
}


function handleChange(event) {
  console.log(event.target.value);
  setName(event.target.value);
}



  return (
    <div className="container">
      <h1>Hello{headingText}</h1>
      <form onSubmit={handleClick}>
        <input type="text" onChange={handleChange} placeholder="What's your name?" value={name} />
        <button 
          style={{backgroundColor: isMousedOver ? "black" : "white"}} 
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          type="submit">Submit
        </button>
      </form>
    </div>
  );
}

export default App;
