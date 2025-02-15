import React, { useState } from 'react';
import './Categories.css'
import toys from '../../assets/Images/toys.jpeg';
import appliances from '../../assets/Images/appliances.jpeg';
import fashion from '../../assets/Images/fashion.jpeg';
import flights from '../../assets/Images/flights.jpeg';
import furniture from '../../assets/Images/furniture.jpeg';
import grocery from '../../assets/Images/grocery.jpeg';
import mobiles from '../../assets/Images/mobiles.jpeg';
import utensils from '../../assets/Images/utensils.jpeg';
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const Categories = () => {
  const[hover,sethover]= useState(<FaAngleDown/>)
  return (
    <div className='adcat'>
    <div className='dropdown'>
     <a href="#">
        <img src={toys} /> 
        <div class="caption" onMouseEnter={()=>{sethover(<FaAngleUp />);}} onMouseLeave={()=>{sethover(<FaAngleDown />);}} >Toys{hover}</div>
        {/* <div class="caption">Toys<span><FaAngleUp /></span><span className='on-hover'><FaAngleDown /></span></div> */}
     </a>
     <div className='dropdown-content' onMouseEnter={()=>{sethover(<FaAngleUp />);}}>
      
      {/* <div className='list-dropdown'> */}
      <li>Teddy bear 1</li>
      {/* <div className='list-dropdown-items'>
        <li>Toy 1</li>
        <li>Toy2</li>
        <li>Toy2</li>
        <li>Toy2</li>
        <li>Toy2</li>
        <li>Toy2</li>
        <li>Toy2</li>
      </div> */}
      {/* </div> */}
      <li>Teddy bear</li>
      <li>Teddy bear</li>
      <li>Teddy bear</li>
      <li>Teddy bear</li>
      <li>Teddy bear</li>
      <li>Teddy bear</li>
      <li>Teddy bear</li>
      <li>Teddy bear</li>
      <li>Teddy bear</li>
      <li>Teddy bear</li>
      <li>Teddy bear</li>
     </div>
      
     </div>
     <a href="#">
        <img src={appliances} /> 
        <div class="caption">Appliances</div>
     </a>
     <a href="#">
        <img src={fashion} /> 
        <div class="caption">Fashion</div>
     </a>
     <a href="#">
        <img src={flights} /> 
        <div class="caption">Flights</div>
     </a>
     <a href="#">
        <img src={furniture} /> 
        <div class="caption">Furniture</div>
     </a>
     <a href="#">
        <img src={grocery} /> 
        <div class="caption">Grocery</div>
     </a>
     <a href="#">
        <img src={mobiles} /> 
        <div class="caption">Mobiles</div>
     </a>
     <a href="#">
        <img src={utensils} /> 
        <div class="caption">Utensils</div>
     </a>
     <a href="#">
        <img src={toys} /> 
        <div class="caption">Toys</div>
     </a>
       
    </div>
  )
}

export default Categories
