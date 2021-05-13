import firebase from "firebase/app"
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyBK0PDhP_tvdxshljB0ZmkeJ1XoTUw3VA8",
    authDomain: "fitness-tracker-617d3.firebaseapp.com",
    databaseURL: "https://fitness-tracker-617d3.firebaseio.com",
    projectId: "fitness-tracker-617d3",
    storageBucket: "fitness-tracker-617d3.appspot.com",
    messagingSenderId: "394832254783",
    appId: "1:394832254783:web:d4896f6fc30d920185e58a",
    measurementId: "G-QSSE1H4Y6G"
  }
/** 
class Firebase {
    constructor() {
        firebase.initializeApp(firebaseConfig);
    }
}
*/
firebase.initializeApp(firebaseConfig);
console.log("test");

export const firestore = firebase.firestore(); 
export default firebase;