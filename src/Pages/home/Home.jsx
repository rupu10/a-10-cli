import React, { use } from 'react';
import { useNavigate } from 'react-router';
import Slider from '../../components/slider/Slider';
import RecipeCard from '../../components/recipeCard/RecipeCard';
import { AuthContext } from '../../context/AuthContext';

const Home = () => {
    // const initialRecipe = useLoaderData();
    // const [recipes, setRecipes] = useState(initialRecipe)

    const {recipes, setRecipes} = use(AuthContext)

    const navigate = useNavigate();


    return (
        <div className='py-4'>
            <div className='bg-red-900 pt-12 pb-9'>
                <div className='w-10/12 mx-auto'>
                    <Slider></Slider>
                </div>
            </div>
            <div className='mt-6 w-10/12 mx-auto'>
                <h1 className='text-5xl font-thin text-center mb-8'>Recipes</h1>
                <div className='grid lg:grid-cols-3 md:grid-cols-2  gap-4'>
                    {
                        recipes.map((recipe)=> <RecipeCard recipe={recipe} setRecipes={setRecipes} key={recipe._id}></RecipeCard>)
                    }
                </div>
                <div className='flex justify-center items-center mt-4'>
                    <button onClick={()=>navigate('/allRecipes')} className='px-3 py-2 bg-red-700 rounded-3xl text-white text-xl font-semibold border border-red-700 hover:bg-white hover:text-red-700 cursor-pointer'>View all recipe</button>
                </div>
            </div>
        </div>
    );
};

export default Home;