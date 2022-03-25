const addStorage=(id)=>{
    let shoppingCart = getStorageItem()
    
    const quantity=shoppingCart[id]
    if(quantity){
       shoppingCart[id]= quantity+1
    }
    else{
        shoppingCart[id] = 1;
    }


     localStorage.setItem('Shopping-cart',JSON.stringify(shoppingCart))
}
const getStorageItem=()=>{
    let shoppingCart = {};
    const getItem = localStorage.getItem("Shopping-cart");
    if (getItem) {
      shoppingCart = JSON.parse(getItem);
    }
    return shoppingCart
}
export { addStorage, getStorageItem };

