import React from 'react';
import './Drink.css';

const Drink = ({ drink, addToCart }) => {
//   console.log(drink);
  const {
    strDrinkThumb,
    strDrink,
    strInstructions,
    strCategory,
    strAlcoholic,
  } = drink;
  return (
    <div className="drink">
      <div>
        <img src={strDrinkThumb} alt="" />
      </div>
      <div>
        <h2>{strDrink}</h2>
        <p>{strCategory}</p>
        <p>{strAlcoholic}</p>
        <p>{strInstructions.slice(0, 80)}</p>
      </div>
      <button onClick={() => addToCart(drink)}>Add to cart</button>
    </div>
  );
};

export default Drink;