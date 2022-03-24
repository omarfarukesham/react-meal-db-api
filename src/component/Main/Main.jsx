import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Main.css'

const Main = () => {
    const[products, setProducts] = useState([])
    const[cart, setCart] = useState([])
// console.log(foods)
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    useEffect(()=>{

        const storedCart = getStoredCart() 
        let saveCart = []
       for(const id in storedCart ){
           let addedCart = products.find(pd => pd.id === id)
           if(addedCart){
            const quantity = storedCart[id] 
             addedCart.quantity = quantity
            saveCart.push(addedCart)
           }
        }
      setCart(saveCart)

    },[products])


    const orderHandler = (selectId) =>{
       // console.log(product);
       const exists= cart.find(product => product.id === selectId.id)
       let newCart = [];
       if(!exists){
            selectId.quantity = 1
            newCart = [...cart, selectId]
       }else{
            const rest = cart.filter(product => product.id !== selectId.id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
       }
      
     
       setCart(newCart)
       addToDb(selectId.id)
    }


    return (
        <div className='main-container row d-flex justify-content-around'>
            <div className="all--products col-md-8">
                <div className='row'>
                    { 
                      products.map(product => <Product 
                        key={product.id}
                        product={product}
                        orderHandler = {orderHandler}
                         ></Product>)  
                    }
                    
                </div>
            </div>
            <div className="order-summary align-items-center col-md-4 bg-dark text-white h-50 mt-5 sticky-top ">
                <Cart cart={cart}></Cart>
                 
            </div>
        </div>
    );
};

export default Main;