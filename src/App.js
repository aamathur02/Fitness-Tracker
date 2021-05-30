import './App.css';
import MealInputForm from './components/Meals/MealInputForm'
import MealListDisplay from './components/Meals/MealListDisplay'
import Home from './components/Home'
import Meal from "./components/Meals/Meal"
import Table from "./components/Table"

function App() {
  return (
    <div className="App">
      <Meal name="Eggs" calories="24" carbohydrates="12" protein="34" fat = "12" />
      <MealListDisplay />
      <MealInputForm />
    </div>
  );
}

export default App;
