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
    <div className='dropdown' onMouseEnter={()=>{sethover(<FaAngleUp />);}} onMouseLeave={()=>{sethover(<FaAngleDown />);}}>
     <a href="#"/>
        <img src={toys} alt='toys'/> 
        <div className="caption">Toys{hover}</div>
      
   </div>

     <a href="#">
        <img src={appliances} /> 
        <div className="caption">Appliances</div>
     </a>
     <a href="#">
        <img src={fashion} /> 
        <div className="caption">Fashion</div>
     </a>
     <a href="#">
        <img src={flights} /> 
        <div className="caption">Flights</div>
     </a>
     <a href="#">
        <img src={furniture} /> 
        <div className="caption">Furniture</div>
     </a>
     <a href="#">
        <img src={grocery} /> 
        <div className="caption">Grocery</div>
     </a>
     <a href="#">
        <img src={mobiles} /> 
        <div className="caption">Mobiles</div>
     </a>
     <a href="#">
        <img src={utensils} /> 
        <div className="caption">Utensils</div>
     </a>
     <a href="#">
        <img src={toys} /> 
        <div className="caption">Toys</div>
     </a>
       
    </div>
  )
}

export default Categories
