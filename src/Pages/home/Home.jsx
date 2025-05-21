import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Slider from '../../components/slider/Slider';
import RecipeCard from '../../components/recipeCard/RecipeCard';

const Home = () => {
    const initialRecipe = useLoaderData();
    const [recipes, setRecipes] = useState(initialRecipe)
    return (
        <div className='py-4'>
            <Slider></Slider>
            <div className='mt-6 w-11/12 mx-auto'>
                <h1 className='text-5xl font-bold'>Recipes</h1>
                <div>
                    {
                        recipes.map((recipe)=> <RecipeCard recipe={recipe} setRecipes={setRecipes} key={recipe._id}></RecipeCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;