import React, { use } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';

const MyRecipeCard = ({myRec}) => {
    const { _id,likeCount, cuisineType, image, title } = myRec;

    const {user} = use(AuthContext);

const navigate = useNavigate();
            
return (
    <div>
  <div className="card bg-base-100  shadow-sm">
    <figure>
      <img src={image} className="h-[270px] w-full" alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p className="">Cuisine Type: {cuisineType}</p>
      <p>Liked by {likeCount} people</p>
      <div className="card-actions grid grid-cols-2">
        <button onClick={()=> navigate(`/myRecipeDetails/${user.email}/${_id}`)}  className="px-3 py-2 border border-yellow-600 rounded-3xl bg-yellow-400 font-semibold text-base hover:bg-white hover:text-yellow-600 cursor-pointer">
          View Details
        </button>
        <button onClick={()=> navigate(`/updateRecipe/${user.email}/${_id}`)} className="px-3 py-2 border border-yellow-600 rounded-3xl bg-yellow-400 font-semibold text-base hover:bg-white hover:text-yellow-600 cursor-pointer">Update recipe</button>
      </div>
    </div>
  </div>
</div>

    );
};

export default MyRecipeCard;