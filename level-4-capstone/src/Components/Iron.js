import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



function Iron() {

  const [iron, setIron] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [mealIngredients, setMealIngredients] = useState([]);

  useEffect(() => {
    axios.get('https://api.spoonacular.com/recipes/findByNutrients', {
      params: {
        minIron: 8,
        maxiron: 18,
        apiKey: '7f701360a1c249eb846bf6cb530b7f0d'
      }
    })
      .then(response => {
        setIron(response.data);
      })
      .catch(error => {
        console.error('Error', error);
      });
  }, [])

  const handleMealClick = (meal) => {
    setSelectedMeal(meal);
    axios
      .get(`https://api.spoonacular.com/recipes/${meal.id}/ingredientWidget.json`, {
        params: {
          apiKey: '7f701360a1c249eb846bf6cb530b7f0d'
        }
      })
      .then(response => {
        setMealIngredients(response.data.ingredients);
      })
      .catch(error => {
        console.error('Error', error);
      })
  };

  return (
    <>
      <div>
        <div>
          <h1 className="text">Males 18+ should intake 8 mg and females 18 mg daily</h1>
        </div>
        <ul>
          {iron.map(meal => (
            <li key={meal.id}>
              <Link to={`/ironMeals/${meal.id}`} onClick={() => handleMealClick(meal)}>
                {meal.title}
              </Link>
            </li>
          ))}
        </ul>
        {selectedMeal && (
          <div>
            <div className='text'>
              <h2>Selected Meal: {selectedMeal.title}</h2>
              <h3>Ingredient List:</h3>
            </div>
            <ul>
              {mealIngredients.map(ingredient => (
                <li key={ingredient.name}>
                  {ingredient.amount.metric.value} {ingredient.amount.metric.unit} of {ingredient.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  )
}

export default Iron;