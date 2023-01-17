import React,{useState, useEffect} from "react";
import axios from "axios";
import { useNavigate ,useLocation } from "react-router-dom";

function ListRecipe(){
    const navigate = useNavigate ();
    const location = useLocation();

    const [recipes, setRecipes] = useState([])
    const [query, setQuery] = useState('chicken')
    

    useEffect(()=>{
        
        getRecipes()
        if(location.state !== null){
            setQuery(location.state.data)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[query,location])

    const getRecipes = async () =>{
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=c03f07b6&app_key=09e928e39bb4fcda962171ddd4203e16`)
        const data = await response.json()
        setRecipes(data.hits)
    }
    function detailRecipe(recipe){
        let path = '/recipedetails'; 
        navigate(path,{state:{data:recipe}});
    }

    return(
        <div>
            {
            recipes && recipes.map((recipe) =>{
               return <div key={recipe.recipe.label}>
                    <p style={{ fontSize: "20px" }}>{recipe.recipe.label}</p>
                    <p>{recipe.recipe.calories}</p>
                    <button onClick={()=>detailRecipe(recipe.recipe)}><img src={recipe.recipe.image} alt={recipe.recipe.label} /></button></div>
            })
    }
        </div>
    )
}
export default ListRecipe;