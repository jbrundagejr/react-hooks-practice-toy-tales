import React, {useState} from "react";

function ToyCard({toy, onDelete}) {
  const {id, name, image} = toy
  const [likeCount, setLikeCount] = useState(toy.likes)

  function handleDelete(){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(() => {
        onDelete(id)
      })
  }

  function handleLike(){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        likes: likeCount + 1
      })
    })
      .then(res => res.json())
      .then(toyUpdatedCount => {
        setLikeCount(toyUpdatedCount.likes)
      })
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likeCount} Likes </p>
      <button onClick={handleLike} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
