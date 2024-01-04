import './App.css';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Recipes from './pages/Recipes';
import RecipeDetailes from './components/RecipeDetailes';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/recipes' element = {<Recipes />} />
        <Route path='/recipes/:recipeId' element = {<RecipeDetailes />} />
      </Routes>
    </Router>
  );
}

export default App;
