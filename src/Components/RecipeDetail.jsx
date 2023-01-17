import React, {useState,useEffect} from "react";
import {useLocation} from "react-router-dom";

function RecipeDetail() {
    const location = useLocation();
    console.log(location)
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
    location.state && (
        setRecipes(location.state.data)
    )
    },[])     
    console.log(recipes.label)
    return(
        <div>
            <p>{recipes.label}</p>
            <p>{recipes.calories}</p>
            <ol>{
                recipes.ingredients && recipes.ingredients.map((ingredient)=>{
                    return(
                        <p>
                            {ingredient.text}
                        </p>
                    )
                })
            }</ol>
        </div>
    )
}
export default RecipeDetail;