import React from 'react';
import SellerNavbar from '../SellerNavbar/SellerNavbar';
import './SellerDashboardHome.css';
import SellerSideNavbar from '../SellerSideNavbar/SellerSideNavbar';

const SellerDashboardHome = () => {
  return (
    <div className='sellerdash'>
    <div className='sellerdash1'>
    <div className='sellerdashleft'><SellerSideNavbar/></div>
    <div className='sellerdashtop'><SellerNavbar/></div>
    </div>
      
    </div>
  )
}

export default SellerDashboardHome;
