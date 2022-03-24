import React from 'react';

const Product = (props) => {

     //console.log(props.product);
    const{name,img,price,seller,stock} = props.product
   
    
    return (
     <div className="col-md-4 my-3">
        <div className="card"> 
            <img src={img} className="card-img-top" alt="Product Images" />
                <div className="card-body">
                   <h5 className="card-title">{name}</h5>
                   <p className="card-text">${price}</p>
                   <p className="card-text">Seller:{seller}</p>
                   <p className="card-text">In Stock:{stock}</p>
                   <button onClick={()=> props.orderHandler(props.product)} className="btn btn-primary" > Buy Now </button>
                </div>
           </div>
        </div>
    );
};

export default Product;