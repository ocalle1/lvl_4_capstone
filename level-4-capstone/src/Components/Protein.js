import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function MyComponent() {

  const [meals, setMeals] = useState([]);
  // null is used when no meal is selected. When selected will display ingredients
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [mealIngredients, setMealIngredients] = useState([]);

  // gets meals between 15 - 30 grams of protein
  useEffect(() => {
    axios
      .get('https://api.spoonacular.com/recipes/findByNutrients', {
        params: {
          minProtein: 15,
          maxProtein: 30,
          apiKey: '7f701360a1c249eb846bf6cb530b7f0d'
        }
      })
      .then(response => {
        // meals 15 - 30 grams of protein are called and updated through setMeals function which then updates the meals State
        setMeals(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const handleMealClick = (meal) => {
    setSelectedMeal(meal);
    axios
    // Template Literals b/c JSX in http
      .get(`https://api.spoonacular.com/recipes/${meal.id}/ingredientWidget.json`, {
        // params pairs the apiKey to the url to authorize the use of Spoonacular
        params: {
          apiKey: '7f701360a1c249eb846bf6cb530b7f0d'
        }
      })
      .then(response => {
        // Places the ingredient information into the mealIngredient Array
        setMealIngredients(response.data.ingredients);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <div className='text'>
        <h2>For anyone that weight trains or does any aerobic and anaerobic it is perfered to consume up to 30 grams of protein per meal </h2>
        <h1>Protein meals between 15 - 30 grams of protein:</h1>
      </div>
      <ul>
        {/* State - meals renders/maps a lists of meals and genereates the list items */}
        {meals.map(meal => (
          //key attribute is set to 'meal.id' that is a unique identifier for each meal
          <li key={meal.id}>
            {/* A link is given for each meal */}
            <Link to={`/proteinMeals/${meal.id}`} onClick={() => handleMealClick(meal)}>
              {/* Displays the meal by its title */}
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
            {/* displays ingredient in empty mealIngredients Array when meal is clicked */}
            {mealIngredients.map(ingredient => (
              <li key={ingredient.name}>
                {ingredient.amount.metric.value} {ingredient.amount.metric.unit} of {ingredient.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MyComponent;




