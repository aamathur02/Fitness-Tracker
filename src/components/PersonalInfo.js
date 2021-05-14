import React, {useState} from 'react';
import {firestore} from './firebase'
import {doc, getDoc} from './firebase/firestore'

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

    const populateDate = () => {
        const docRef = doc(firestore, "Personal Info", "Info");
        const docValue =  getDoc(docRef);

        if (docValue.exists()) {
            
        }


    }

}