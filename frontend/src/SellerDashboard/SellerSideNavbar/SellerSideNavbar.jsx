import React, { useState } from 'react';
import { HiBars3BottomLeft } from "react-icons/hi2";
import './SellerSideNavbar.css';
import { MdHome } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdOutlineAnalytics } from "react-icons/md";
import { FcSalesPerformance } from "react-icons/fc";
import { MdOutlineRateReview } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";

const SellerSideNavbar = () => {
    const[hide,setHide] = useState(1);

    const hidep = () => {
        setHide(!hide)
    };
  return (
    <div className='sellersidenav0'>
       <div className='sellersidenav'>
        <p className={`${hide ? " " : "hide"}`}>Apna Store</p>
        <HiBars3BottomLeft onClick={hidep} />
       </div>
       <div className='sellersidenav2'>

       <div className='sellersidenav3'>
       <p className={`${hide ? " " : "hide"}`}>Home</p>
       <MdHome />
       </div>
       
       <div className='sellersidenav3'>
       <p className={`${hide ? " " : "hide"}`}>Chat</p>
       <IoChatbubbleEllipsesOutline />
       </div>

       <div className='sellersidenav3'>
       <p className={`${hide ? " " : "hide"}`}>Sale</p>
       <FcSalesPerformance />
       </div>

       <div className='sellersidenav3'>
       <p className={`${hide ? " " : "hide"}`}>Analytics</p>
       <MdOutlineAnalytics />
       </div>

       <div className='sellersidenav3'>
       <p className={`${hide ? " " : "hide"}`}>Review</p>
       <MdOutlineRateReview />
       </div>

       <div className='sellersidenav3'>
       <p className={`${hide ? " " : "hide"}`}>Products</p>
       <AiFillProduct />
       </div>

       </div>
        
        
    </div>
  )
}

export default SellerSideNavbar
