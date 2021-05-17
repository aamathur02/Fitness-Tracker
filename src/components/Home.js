import React, {useState, useEffect} from 'react';
import {firestore} from './firebase'

import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";

import PersonalInfo from "./PersonalInfo"
import MealInputForm from "./MealInputForm"

const Home = () => {
    const[userName, setUserName] = useState("");

    useEffect(() => {
        var docRef = firestore.collection("Personal Info").doc("Info");

        docRef.get().then(function(doc) {
        if (doc.exists) {
            setUserName(doc.get("firstName")['firstName']);
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

        <div className="homePage">
            <p> Welcome, {userName}</p>
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