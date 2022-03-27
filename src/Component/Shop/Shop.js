import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Drink from '../Drink/Drink';
import { addStorage, getStorageItem } from '../Storage';
import './Shop.css';

const Shop = () => {
    const [drinks,setDrink]=useState([])
    const [searchText, setSearchTex]=useState('')
    const [addCart,setAddCart]=useState([])
    
    const addToCart=(drink)=>{
      addStorage(drink.idDrink)
      let newCart=[]
      const  addedDrink=addCart.find(pro=>pro.idDrink===drink.idDrink)
      const  rest=addCart.filter(pro=>pro.idDrink!==drink.idDrink)
      if(!addedDrink){

        newCart=[...addCart,drink]
      }else{
        newCart=[...rest,drink]
      }
      setAddCart(newCart)
    }
    
    useEffect(() => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchText}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setDrink(data.drinks));
    }, [searchText]);
    useEffect(()=>{
      
      let saveCart=[]
      
      const storageItem = getStorageItem();
      for (const id in storageItem) {
        const exists = drinks.find((item) => item.idDrink === id);
        if(exists){
          const quantity=storageItem[id]
          exists.quantity=quantity
          console.log(exists);
          saveCart.push(exists)
        }
      }
      
      setAddCart(saveCart)

    },[drinks,addCart])
    const handleSearch = (e) => {
        e.preventDefault();
      const textValue = e.target.value;
      setSearchTex(textValue);
    };
    
    return (
      <div>
        <form className="search">
          <input onChange={handleSearch} type="text" />
        </form>
        {addCart.map((cart) => (
          <Cart cart={cart}/>
        ))}

        <div className="drinks">
          {drinks.map((drink) => (
            <Drink key={drink.idDrink} drink={drink} addToCart={addToCart} />
          ))}
        </div>
      </div>
    );
};

export default Shop;
