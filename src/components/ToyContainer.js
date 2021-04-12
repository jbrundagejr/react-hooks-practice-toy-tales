import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onDelete}) {

  const toysArr = toys.map(toyObj =>
    <ToyCard 
    key={toyObj.id}
    toy={toyObj}
    onDelete={onDelete}
    />)
  return (
    <div id="toy-collection">{toysArr}</div>
  );
}

export default ToyContainer;
