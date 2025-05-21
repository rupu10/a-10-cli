import React from 'react';

const RecipeCard = ({recipe}) => {
    console.log(recipe);
    const {likeCount,cuisineType,image,
title

} = recipe
    return (
        <div>
            <div className="card bg-base-100  shadow-sm">
  <figure>
    <img
      src={image}
      className='h-[270px] w-full'
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className=''>Cuisine Type: {cuisineType}</p>
    <p>Liked by {likeCount} people</p>
    <div className="card-actions justify-end">
      <button className="px-3 py-2 border border-yellow-600 rounded-3xl bg-yellow-400 font-semibold text-base hover:bg-white hover:text-yellow-600 cursor-pointer">View Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default RecipeCard;