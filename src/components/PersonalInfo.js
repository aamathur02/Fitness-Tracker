import React, {useState, useEffect} from 'react';
import {firestore} from './firebase'

const PersonalInfo = () => {

    const GOALS = {
        GAIN: "GAIN",
        MAINTAIN: "MAINTAIN",
        LOSE: "LOSE",
    }

    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");

    const[age, setAge] = useState(0);

    const[goal, setGoal] = useState({
        state: GOALS.MAINTAIN,
    });

    

    useEffect(() => {
        var docRef = firestore.collection("Personal Info").doc("Info");

        docRef.get().then(function(doc) {
        if (doc.exists) {
            console.log(doc.get("age")['age']);
            setAge(doc.get("age")['age']);
            setFirstName(doc.get("firstName")['firstName']);
            setLastName(doc.get("lastName")['lastName']);
            setGoal(doc.get("goal")['goal']);
            
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }, []);

    const updateInfo = (event) => {
        event.preventDefault();

        firestore.collection("Personal Info").doc("Info").update({
            age: {age},
            firstName: {firstName},
            lastName: {lastName},
            goal: {goal}
        });

        console.log("Updated personal info");
    }

    return (
        <div className="personal-info-form">
            <p> Age: {age}</p>
            <p> First Name: {firstName}</p>
            <button onClick = {() => setAge(10)}> Submit</button>

            <form onSubmit = {updateInfo}>
            <input 
                type="number"
                placeholder='Age'
                name='age'
                onChange={e => setAge(e.target.value)}
                val={age}
                />

                <input 
                type="text"
                placeholder='First Name'
                name='firstName'
                onChange={e => setFirstName(e.target.value)}
                val={firstName}
                />

                <input 
                type="text"
                placeholder='Last Name'
                name='lastName'
                onChange={e => setLastName(e.target.value)}
                val={lastName}
                />

                <label>
                    Select your fitness goal:
                    <select value = {goal} onChange={e => setGoal(e.target.value)}>
                       <option value="MAINTAIN">Maintain</option> 
                       <option value="GAIN">Gain</option> 
                       <option value="LOSE">Lose</option> 
                    </select>
                </label>

                <button type="submit">Submit</button>
            </form>
           
        </div>
    )
}

export default PersonalInfo;