import React, {useState, useEffect} from 'react';

import MealInputForm from './MealInputForm';
import MealListDislay from './MealListDislay';

import {firestore} from '../firebase'

const MealDisplay = () => {
    const[needRefresh, setRefresh] = useState(false);
    const[data, setData] = useState([]);

    useEffect(() => {
        var ref = firestore.collection("Meals").orderBy("Calories");
        ref.get()
        .then((querySnapshot)=> {
            /**
            querySnapshot.forEach((doc) => {
                console.log(doc.id, "=>", doc.data());
                setData(data.push(doc.data()));
                console.log(data)

            }); */

            const data = querySnapshot.docs.map (doc => doc.data());
            console.log(data);
            setData(data);
        })
        .catch((error) => {
            console.log("error getting documents");
        })
    }, []);

    const callForRefresh = () => {
        if (needRefresh) {
            setRefresh(true)
        } else {
            setRefresh(false);
        }
    }

}
export default MealDisplay;