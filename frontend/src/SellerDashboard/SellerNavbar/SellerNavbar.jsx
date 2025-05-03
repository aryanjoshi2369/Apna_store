import React from 'react';
import './SellerNavbar.css';
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import a from '../../assets/Images/fashion.jpeg';
import { IoIosArrowDown } from "react-icons/io";
import StateContainer from '../SellerDashboardHome/StatContainer/StateContainer';

const SellerNavbar = () => {
  return (
    <>
    <div className='sellernav'>
    <div className='sellernav1'>
        <p>Good Morning , Aryan Joshi</p>
    </div>
    <div className='sellernav2'>
    <FaSearch />
    <IoIosNotifications />
    <div className='sellernav3'>
     <img src={a} alt='fashion is everything'/>
     <IoIosArrowDown />

    </div>
    
    </div>
       
    </div>
    <StateContainer/>
    </>
  )
}

export default SellerNavbar
