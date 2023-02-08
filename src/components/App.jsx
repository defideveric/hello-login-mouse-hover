import React, { useState } from "react";

function App() {
  const [isMousedOver, setMouseOver] = useState(false);
  const [contact, setContact] = useState({fName: "", lName: "", email: ""});


function handleMouseOver() {
  setMouseOver(true)
}


function handleMouseOut() {
  setMouseOver(false)
}


function handleChange(event) {
  const {name, value} = event.target;

  setContact(prevValue => {
    return {
      ...prevValue,
    [name] : value
    }
  })


}


  return (
    <div className="container">
      <h1>Hello{contact.fName} {contact.lName}</h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" onChange={handleChange}  placeholder="First Name" value={contact.fName} />
        <input  name="lName" onChange={handleChange} placeholder="Last Name" value={contact.lName} />
        <input name="email" onChange={handleChange} placeholder="Email" value={contact.email} />
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
