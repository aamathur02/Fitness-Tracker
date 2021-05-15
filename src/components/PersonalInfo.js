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
                setAge(doc.get("age"));
                setFirstName(doc.get("firstName"));
                setLastName(doc.get("lastName"));
                setGoal(doc.get("goal"));
                
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
    }, []);

    return (
        <div className="personal-info-form">
            <p> Age: {age}</p>
            <p> First Name: {firstName}</p>
            <button onClick = {() => setAge(10)}> Submit</button>
           
        </div>
    )
}

export default PersonalInfo;