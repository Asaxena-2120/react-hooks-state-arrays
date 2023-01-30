import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All");

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    console.log(newFood);
    const newFoodArray = [...foods, newFood];

    setFoods(newFoodArray);
  }
  
  function handleLiClick(id){
    console.log(id)
    const newFoodArray = foods.map((food)=>{
      if (food.id === id){
        console.log(`food:${food.id}`)
        return {
          ...food,
          heatLevel: food.heatLevel + 1,
        };

      } else {
        return food;
      }
    });
    setFoods(newFoodArray)
  }
  const foodList = foods.map((food) => (
    <li key={food.id} onClick={()=>handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));
  


  function handleFilterChange(event) {
    setFilterBy(event.target.value);
  }
  

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
      <select name="filter" onChange={handleFilterChange}>
  <option value="All">All</option>
  <option value="American">American</option>
  <option value="Sichuan">Sichuan</option>
  <option value="Thai">Thai</option>
  <option value="Mexican">Mexican</option>
</select>
    </div>
  );
}

export default SpicyFoodList;
