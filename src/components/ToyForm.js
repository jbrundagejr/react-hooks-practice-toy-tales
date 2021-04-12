import React, {useState} from "react";

function ToyForm({handleAdd}) {

  const [userName, setUserName] = useState("")
  const [userImage, setUserImage] = useState("")

  function whatUserNamed(e){
    setUserName(e.target.value)
  }

  function whatUserImaged(e){
    setUserImage(e.target.value)
  }
  
  function handleSubmit(e){
    e.preventDefault()
    const newToyData = {
      name: userName,
      image: userImage,
      likes: 0
      }
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-type" : "application/json"
      },
      body: JSON.stringify(newToyData)
    })
      .then(res => res.json())
      .then(newToyData => {
        handleAdd(newToyData)
      })
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          onChange={whatUserNamed} 
          name={userName}
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          onChange={whatUserImaged} 
          name={userImage}
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
