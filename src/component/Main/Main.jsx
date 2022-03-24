import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Main.css'

const Main = () => {
    const[goods, setGoods] = useState([])
    const[cart, setCart] = useState([])
// console.log(foods)
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setGoods(data.slice(0,12)))
    },[])

    useEffect(()=>{

        const storedCart = getStoredCart() 
        let saveCart = []
       for(const id in storedCart ){
           let addedCart = goods.find(product => product.id === id)
           if(addedCart){
            const quantity = storedCart[id] 
             addedCart.quantity = quantity
            saveCart.push(addedCart)
           }
        }
      setCart(saveCart)

    },[goods])


    const orderHandler = (product) =>{
       // console.log(product);
       const newCart = [...cart, product]
       setCart(newCart)
       addToDb(product.id)
    }


    return (
        <div className='main-container row d-flex justify-content-around'>
            <div className="all--products col-md-8">
                <div className='row'>
                    { 
                      goods.map(product => <Product 
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