import React, {useState, useEffect} from 'react';
import {firestore} from './firebase'

import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";

import PersonalInfo from "./PersonalInfo"
import MealInputForm from "./Meals/MealInputForm"

import { Stack, HStack, VStack } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"


const Home = () => {
    const[userName, setUserName] = useState("");
    const[calorieGoal, setCalorieGoal] = useState(0);

    useEffect(() => {
        var docRef = firestore.collection("Personal Info").doc("Info");

        docRef.get().then(function(doc) {
        if (doc.exists) {
            setUserName(doc.get("firstName"));
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }, []);

    return(
        <div>
        <Stack spacing={6}>
            <Heading as="h1" size="4xl" isTruncated>
                Welcome, {userName}
            </Heading>
            <Heading as="h2" size="3xl" isTruncated>
                Your daily calories goal is {calorieGoal}
            </Heading>
        </Stack>
        <div className="homePage">
            <p> Welcome, {userName}</p>
            <p> Your daily calories goal is {calorieGoal}</p>
        </div>

        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/personalInfo">Personal Info</Link>
                        </li>
                        <li>
                            <Link to="/meals">Meals</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <Switch>
                <Route path="/personalInfo">
                    <PersonalInfo />
                </Route>
                <Route path='/meals'>
                    <MealInputForm />
                </Route>
            </Switch>
        </Router>

        </div>

    )
}

export default Home;