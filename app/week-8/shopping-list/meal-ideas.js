"use client";
import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
    const [meal, setMeal] = useState("");

    const loadMealIdeas = async () => {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeal(mealIdeas);
    };
    
    useEffect (() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div>
            <h2 className="text-2xl font-bold">Meal Ideas</h2>
            <ul>
                {meal && meal.map((meal) => (
                    <li key={meal.idMeal}>{meal.strMeal}</li>
                ))}
            </ul>
        </div>
    );
}

async function fetchMealIdeas(ingredient) {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=" + ingredient);
    const data = await response.json();
    return data.meals;
}