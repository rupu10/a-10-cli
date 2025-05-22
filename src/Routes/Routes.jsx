import {
  createBrowserRouter,
} from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/home/Home";
import AllRecipe from "../Pages/allRecipe/AllRecipe";
import AddRecipe from "../Pages/addRecipe/AddRecipe";
import MyRecipe from "../Pages/myRecipe/MyRecipe";
import CardDetails from "../Pages/recipeCardDetails/CardDetails";


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
            path: '/addRecipe',
            Component: AddRecipe
        },
        {
            path: '/myRecipe',
            Component: MyRecipe
        },
        {
            path: '/recipeDetails/:id',
            loader: ({params})=> fetch(`http://localhost:7500/recipes/${params.id}`),
            Component: CardDetails
        }
    ]
  },
]);


export default router