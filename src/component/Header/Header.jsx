import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header--design d-flex align-items-center justify-content-around'>
           <div className="logo-design">
                <h3 className='logo--text fs-2'>Eat-Meal</h3>
           </div>
           <div>
               <nav>
                   <a href="/Home">Shop</a>
                   <a href="/Home">Order</a>
                   <a href="/Home">Inventory</a>
               </nav>
           </div>
        </div>
    );
};

export default Header;