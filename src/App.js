import './App.css';
import MealInputForm from './components/MealInputForm'
import MealListDisplay from './components/MealListDisplay'
import Home from './components/Home'
import Meal from "./components/Meals/Meal"

function App() {
  return (
    <div className="App">
      <Meal name="Eggs" calories="24" carbohydrates="12" protein="34" fat = "12" />
      <MealListDisplay/>
    </div>
  );
}

export default App;
