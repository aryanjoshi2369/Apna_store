import React from 'react';
import './ProductCard.css';
import a from '../../assets/Images/grocery.jpeg'

const ProductCard = () => {
  return (
    <div className='pcrd'>
    <div className='pcrd-img'>
    <img src={a} alt='appliances'/>
    </div>
       
    </div>
  )
}

export default ProductCard
