import React from 'react';
import './MobileCategories.css';
import a from '../../assets/Images/fashion.jpeg'
import b from '../../assets/Images/furniture.jpeg'
import c from '../../assets/Images/grocery.jpeg'
import d from '../../assets/Images/mobiles.jpeg'
import e from '../../assets/Images/fashion.jpeg'
import f from '../../assets/Images/utensils.jpeg'
import g from '../../assets/Images/toys.jpeg'

const MobileCategories = () => {
  return (
    <div className='mcat'>
    <div className='mcat1'>
    <figure>
    <img src={a} alt="Image"/>
    <figcaption>Electronics</figcaption>  
    </figure>
    <figure>
    <img src={b} alt="Image"/>
    <figcaption>Food</figcaption>  
    </figure>
    <figure>
    <img src={c} alt="Image"/>
    <figcaption>Accesories</figcaption>  
    </figure>
    <figure>
    <img src={d} alt="Image"/>
    <figcaption>Beauty</figcaption>  
    </figure>
        
    </div>
    <div className='mcat1'>
    <figure>
    <img src={e} alt="Image"/>
    <figcaption>Furniture</figcaption>  
    </figure>
    <figure>
    <img src={f} alt="Image"/>
    <figcaption>Fashion</figcaption>  
    </figure>
    <figure>
    <img src={g} alt="Image"/>
    <figcaption>Health</figcaption>  
    </figure>
    <figure>
    <img src={a} alt="Image"/>
    <figcaption>Stationary</figcaption>  
    </figure>
        
    </div>
    <div className='mcat1'>
    <figure>
    <img src={b} alt="Image"/>
    <figcaption>Beverages</figcaption>  
    </figure>
    <figure>
    <img src={c} alt="Image"/>
    <figcaption>Books</figcaption>  
    </figure>
    <figure>
    <img src={d} alt="Image"/>
    <figcaption>Shoes</figcaption>  
    </figure>
    <figure>
    <img src={e} alt="Image"/>
    <figcaption>Appliances</figcaption>  
    </figure>
        
    </div>
      
    </div>
  )
}

export default MobileCategories
