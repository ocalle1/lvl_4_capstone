import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



function Carb() {

    const [carbs, setCarbs] = useState([]);
    const [selectedMeal, setSelectedMeal] = useState(null);
    const [mealIngredient, setMealIngredients] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.spoonacular.com/recipes/findByNutrients', {
                params: {
                    minCarbs: 30,
                    maxCarbs: 75,
                    apiKey: '7f701360a1c249eb846bf6cb530b7f0d'
                }
            })
            .then(response => {
                setCarbs(response.data)
            })
            .catch(error => {
                console.error('Error', error);
            });
    }, []);

    const handleCarbClick = (carb) => {
        setSelectedMeal(carb);
        axios
            .get(`https://api.spoonacular.com/recipes/${carb.id}/ingredientWidget.json`, {
                params: {

                    apiKey: '7f701360a1c249eb846bf6cb530b7f0d'
                }
            })
            .then(response => {
                setMealIngredients(response.data.ingredients);
            })
            .catch(error => {
                console.error('Error', error)
            })
    }

    return (
        <>
            <div className="text">
                <h2>The recomendation is dependant on activity level and weather you are male or female.</h2>
                <h3>Weight Loss Male: 45 - 60 Female: 30 - 45  </h3>
                <h3>Weight maintenance Male: 60 - 75 Female: 40 - 60</h3>
                <h1> Carbohydrate meals between 30 - 75 grams:</h1>
            </div>
            <div>
                <ul>
                    {carbs.map(carb => (
                        <li key={carb.id}>
                            <Link to={`/carbMeals/${carb.id}`} onClick={() => handleCarbClick(carb)}>
                                {carb.title}
                            </Link>
                        </li>
                    ))}
                </ul>

                {selectedMeal && (
                    <div>
                        <h2>Selected Meal:{selectedMeal.title}</h2>
                        <h3>Ingredient List</h3>
                        <ul>
                            {mealIngredient.map(ingredient => (
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
};

export default Carb;