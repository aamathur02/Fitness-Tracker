import React, {useState, useEffect} from 'react';

import { Table, Thead, Tbody, Tr, Th, Td, chakra } from "@chakra-ui/react"
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons"
import { useTable, useSortBy } from "react-table"

import {firestore} from './firebase'

const MealListDisplay = () => {
    const SORT = {
        BY_FREQUENCY: "By Frequency",
        BY_NAME: "By Name",
        BY_CALORIES: "Buy Calories"
    }

    const [sortOption, setSortOption] = useState({
        state: SORT.BY_FREQUENCY
    });

    const [mealRef, setMealRef] = useState("");

     
    const runQuery = () => {
        console.log("started query")
        var ref = firestore.collection("Meals").orderBy("Calories");
        ref.get()
        .then((querySnapshot)=> {
            querySnapshot.forEach((doc) => {
                console.log(doc.id, "=>", doc.data());
            });
        })
        .catch((error) => {
            console.log("error getting documents");
        })

        var order = firestore.collection("Meals").orderBy("Calories");
        //console.log(order);
        
       // console.log(query);
    }

    
    return(
        <div>
        <p> Hello, How are you?</p>
        <button onClick={runQuery}>Run Query</button>
        </div>
    )

    
}

export default MealListDisplay;