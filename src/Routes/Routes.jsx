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
import PrivateRoutes from "./PrivateRoutes";
import UpdateRecipe from "../Pages/myRecipe/UpdateRecipe";


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <div>error!</div>,
    children: [
        {
            index: true,
            loader: ()=> fetch('https://a-10-server-flame.vercel.app/recipes'),
            Component: Home
        },
        {
            path: '/allRecipes',
            Component: AllRecipe
        },
        {
            path: '/recipeDetails/:id',
            loader: ({params})=> fetch(`https://a-10-server-flame.vercel.app/recipes/${params.id}`),
            element: <PrivateRoutes><CardDetails></CardDetails></PrivateRoutes>
        },
        {
            path: '/addRecipe',
            element: <PrivateRoutes><AddRecipe></AddRecipe></PrivateRoutes> 
        },
        {
            path: '/myRecipe/:userEmail',
            loader: ({params})=> fetch(`https://a-10-server-flame.vercel.app/recipe/myRecipe/${params.userEmail}`),
            element: <PrivateRoutes><MyRecipe></MyRecipe></PrivateRoutes> 
        },
        {
            path: '/myRecipeDetails/:userEmail/:id',
            loader: ({params}) => fetch(`https://a-10-server-flame.vercel.app/recipe/myRecipe/${params.userEmail}/${params.id}`),
            element: <PrivateRoutes><MyRecipeCardDetails></MyRecipeCardDetails></PrivateRoutes>
        },
        {
            path: '/updateRecipe/:userEmail/:id',
            loader: ({params}) => fetch(`https://a-10-server-flame.vercel.app/recipe/myRecipe/${params.userEmail}/${params.id}`),
            Component: UpdateRecipe
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