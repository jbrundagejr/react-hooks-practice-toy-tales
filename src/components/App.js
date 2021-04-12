import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toysArr, setToysArr] = useState([])
  

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then(res => res.json())
      .then(data => 
        setToysArr(data))
  },[])

  function handleAdd(newToy){
    setToysArr([...toysArr, newToy])
  }

  function onDelete(id){
    const updatedArr = toysArr.filter(toy => 
      toy.id !== id)
      setToysArr(updatedArr)
    }

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleAdd={handleAdd}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
      toys={toysArr}
      onDelete={onDelete}
      />
    </>
  );
}

export default App;
