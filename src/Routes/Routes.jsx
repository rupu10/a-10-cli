import {
  createBrowserRouter,
} from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/home/Home";
import AllRecipe from "../Pages/allRecipe/AllRecipe";
import AddRecipe from "../Pages/addRecipe/AddRecipe";
import MyRecipe from "../Pages/myRecipe/MyRecipe";
import CardDetails from "../Pages/recipeCardDetails/CardDetails";
import SignIn from "../Pages/signIn/SignIn";
import SignUp from "../Pages/signUp/SignUp";
import MyRecipeCardDetails from "../Pages/myRecipe/MyRecipeCardDetails";


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <div>error!</div>,
    children: [
        {
            index: true,
            loader: ()=> fetch('http://localhost:7500/recipes'),
            Component: Home
        },
        {
            path: '/allRecipes',
            Component: AllRecipe
        },
        {
            path: '/recipeDetails/:id',
            loader: ({params})=> fetch(`http://localhost:7500/recipes/${params.id}`),
            Component: CardDetails
        },
        {
            path: '/addRecipe',
            Component: AddRecipe
        },
        {
            path: '/myRecipe/:userEmail',
            loader: ({params})=> fetch(`http://localhost:7500/recipe/myRecipe/${params.userEmail}`),
            Component: MyRecipe
        },
        {
            path: '/myRecipeDetails/:userEmail/:id',
            loader: ({params}) => fetch(`http://localhost:7500/recipe/myRecipe/${params.userEmail}/${params.id}`),
            Component: MyRecipeCardDetails
        },
        {
            path: '/signIn',
            Component: SignIn
        },
        {
            path: '/signUp',
            Component: SignUp
        }
    ]
  },
]);


export default router