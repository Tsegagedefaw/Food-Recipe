import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import React from 'react';
import { Route,Routes, BrowserRouter } from 'react-router-dom';

import NavBar from './Components/NavBar';
import ListRecipe from './Components/List of recipe';
import RecipeDetail from './Components/RecipeDetail';
import Filterpage from './Components/filterpage';
import About from './Components/about';

function App() { 
  
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
      <Routes>
              <Route exact path="/" element={<ListRecipe/>}/>
              <Route path="recipedetails" element={<RecipeDetail/>} />
              <Route path="filterpage" element={<Filterpage/>} />
              <Route path="about" element={<About/>} />
      </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
