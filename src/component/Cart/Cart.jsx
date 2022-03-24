import React from 'react';

const Cart = ({cart}) => {
   
    let total = 0
    let shipping = 0
 for(const product of cart){
        total = total + product.price
        shipping = shipping + product.shipping

 }

 let tax =  parseFloat((total * 0.1).toFixed(3))

 let grandTotal = total + shipping + tax

    return (
        <div>
             <h1>Order summary section</h1>
                <h4>Quantity:{' '} {cart.length}</h4>
                <h4>Price:{" "}${total}</h4>
                <h4>Shipping:{' '} ${shipping}</h4>
                <h4>Tax:$ {tax}</h4>
                <h2>Grand Total : $ {grandTotal}</h2>
                 <p></p>
                 <div className='mb-5'>
                    <button type='button' className='btn btn-primary mx-3'>Place Order</button>
                    <button type='button' className='btn btn-danger'>Delete</button>
                 </div>
        </div>
    );
};

export default Cart;