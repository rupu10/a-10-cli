import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Slider from "../../components/slider/Slider";
import RecipeCard from "../../components/recipeCard/RecipeCard";
import { IoSunnyOutline } from "react-icons/io5";
import "./home.css";
import { FaMoon } from "react-icons/fa";
import TypeWrite from "../../components/TypeWrite";

const Home = () => {

  const [darkMode, setDarkMode] = useState(false);
  const [recipes, setTopRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8800/top-recipes")
      .then((res) => res.json())
      .then((data) => setTopRecipes(data));
  }, []);

  const navigate = useNavigate();

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <button className="px-3" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? (
          <div className="flex items-center gap-x-1 font-semibold border border-white bg-white text-black rounded-2xl px-2 cursor-pointer my-1">
            <IoSunnyOutline />
            <p>Light Mode</p>
          </div>
        ) : (
          <div className="flex items-center gap-x-1 font-semibold border rounded-2xl px-2 cursor-pointer my-1">
            <FaMoon />
            <p>Dark Mode</p>
          </div>
        )}
      </button>
      <div className="bg-red-900 pt-12 pb-9">
        <div className="w-10/12 mx-auto">
          <Slider></Slider>
        </div>
      </div>
      <div className="mt-6 w-10/12 mx-auto">
        <h1 className="text-5xl font-thin text-center mb-8">Recipes</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-4">
          {recipes.map((recipe) => (
            <RecipeCard recipe={recipe} key={recipe._id}></RecipeCard>
          ))}
        </div>
        <div className="flex justify-center items-center mt-4">
          <button
            onClick={() => navigate("/allRecipes")}
            className="px-3 py-2 bg-red-700 rounded-3xl text-white text-xl font-semibold border border-red-700 hover:bg-white hover:text-red-700 cursor-pointer mb-8"
          >
            View all recipe
          </button>
        </div>
        <div className="flex justify-center">
        <TypeWrite></TypeWrite>
        </div>
      </div>
    </div>
  );
};

export default Home;
