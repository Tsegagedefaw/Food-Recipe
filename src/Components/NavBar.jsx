import React, {useState,useEffect} from "react";
import { useNavigate  } from "react-router-dom";

import ListRecipe from "./List of recipe";
function NavBar(){
    const navigate = useNavigate ();
    
    const [search, setSearch] = useState('')

    const getSearch = (e) =>{
        e.preventDefault();
        navigate('/',{state:{data:search}})
        setSearch('')
    }

    return(
        <><nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container d-flex justify-content-center">
                <a class="navbar-brand" href="/">Ts-Recipe</a>
                <ul class="navbar-nav d-flex flex-row me-auto ">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="/filterpage">Filter</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/about">About</a>
                    </li>
                </ul>
                <form onSubmit={getSearch} className="d-flex">
                    <input class="form-control me-2" type="search"
                        placeholder="Search" aria-label="Search"
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)} 
                        />
                    <button class="btn btn-outline-primary" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </nav>
        {/* {
            recipes && recipes.map((recipe) => {
                return <ListRecipe 
                    key={recipe.recipe.label}
                    data={recipe.recipe}
                    title={recipe.recipe.label} 
                    calorie={recipe.recipe.calories}
                    image={recipe.recipe.image}
                    ingredients={recipe.recipe.ingredients}
                />
            })
        } */}
       </>
    )
}
export default NavBar