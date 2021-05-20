import React, {useState} from 'react';
import {firestore} from './firebase'


const MealInputForm = () => {
    const [name, setName] = useState("");
    const [calories, setCalories] = useState(0);
    const [protein, setProtein] = useState(0);
    const [carbohydrates, setCarbohydrates] = useState(0);
    const [fat, setFat] = useState(0);
   

    const addMeal = (event) => {
        event.preventDefault();

        firestore.collection("Meals").doc(name).set({
            Name: name,
            Calories: parseInt(calories),
            Protein: parseInt(protein),
            Carbohydrates: parseInt(carbohydrates),
            Fat: parseInt(fat)
        });

        resetState();

        console.log("Added meal to db");
    }

    const resetState = () => {
        setName("");
        setCalories(0);
        setProtein(0);
        setCarbohydrates(0);
        setFat(0);
    }
    

    return (
        <div className="meal-input-form">
            <p> Name:{name} </p>
            <p> Calories:{calories} </p>
            <p> Protein:{protein} </p>
            <p> Carbohydrates:{carbohydrates} </p>
            <p> Fat:{fat} </p>
            <form onSubmit={addMeal}>
                <input 
                type="text"
                placeholder='Meal Name'
                name='name'
                onChange={e => setName(e.target.value)}
                val={name}
                />

                <input 
                type="number"
                placeholder='Calories'
                name='calories'
                onChange={e => setCalories(e.target.value)}
                val={calories}
                />

                <input 
                type="number"
                placeholder='Protein'
                name='protein'
                onChange={e => setProtein(e.target.value)}
                val={protein}
                />

                <input 
                type="number"
                placeholder='Carbohydrates'
                name='carbohydrates'
                onChange={e => setCarbohydrates(e.target.value)}
                val={carbohydrates}
                />

                <input 
                type="number"
                placeholder='Fat'
                name='fat'
                onChange={e => setFat(e.target.value)}
                val={fat}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
};

export default MealInputForm;