import React, { useEffect, useState } from 'react';
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

    const orderHandler = (product) =>{
       // console.log(product);
       const newCart = [...cart, product]
       setCart(newCart)
    }


    return (
        <div className='main-container row d-flex justify-content-around'>
            <div className="all--products col-md-8">
                <div className='row'>
                    { 
                      goods.map(product => <Product 
                        key={product.id}
                        product={product}
                        orderHandler={orderHandler}
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