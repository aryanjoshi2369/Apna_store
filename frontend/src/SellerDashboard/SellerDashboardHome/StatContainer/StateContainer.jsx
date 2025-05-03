import React from 'react';
import './StatContainer.css';
import { TbArrowZigZag } from "react-icons/tb";
import { FcSalesPerformance } from "react-icons/fc";
import { IoEyeSharp } from "react-icons/io5";
import { IoFunnelOutline } from "react-icons/io5";

const StateContainer = () => {
  return (
    <div className='stcontainer'>
    <div className='statcontainer'>
       <div className='statcontainer1'>
        <div className='totalsales'>
        <div className='statsicons'>
        <FcSalesPerformance />
        <TbArrowZigZag />
        </div>
        <p>Total Sales</p>
        <h4>789</h4>
   </div>
   <div className='borderleft'></div>

        <div className='totalsales'>
        <div className='statsicons'>
        <IoEyeSharp />
        <TbArrowZigZag />
        </div>
        <p>Visitors</p>
        <h4>12k</h4>
    </div>
    <div className='borderleft'></div>

        <div className='totalsales'>
        <div className='statsicons'>
        <IoFunnelOutline />
        <TbArrowZigZag />
        </div>
        <p>CVR</p>
        <h4>10,11</h4>
     </div>

       </div>
       
    </div>
    <div className='bestseller'>
        <h1>This sre the best seller things</h1>
       </div>
       </div>
  )
}

export default StateContainer
