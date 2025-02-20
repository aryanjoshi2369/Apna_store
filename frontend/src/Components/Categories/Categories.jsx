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
import { MdKeyboardArrowRight } from "react-icons/md";

const Categories = () => {
//   const[hover,sethover]= useState(<FaAngleDown/>)
//   const[hover,sethover] = useState(false)
  const[listno,setListNo] = useState(1)
  const[activeindex,setActiveIndex] = useState(null)
 
  const toysList1 = ["teddy bear 11", "teddy bear 12", "teddy bear 13", "teddy bear 14", "teddy bear 15", "teddy bear 16", "teddy bear 17", "teddy bear 18", "teddy bear 19", "teddy bear 20"];
  const toysList2 = ["teddy bear 21", "teddy bear 22", "teddy bear 23", "teddy bear 24", "teddy bear 25", "teddy bear 26", "teddy bear 27", "teddy bear 28", "teddy bear 29", "teddy bear 30"];
  const toysList3 = ["teddy bear 31", "teddy bear 32", "teddy bear 33", "teddy bear 34", "teddy bear 35", "teddy bear 36", "teddy bear 37", "teddy bear 38", "teddy bear 39", "teddy bear 40"];
  const toysList4 = ["teddy bear 41", "teddy bear 42", "teddy bear 43", "teddy bear 44", "teddy bear 45", "teddy bear 46", "teddy bear 47", "teddy bear 48", "teddy bear 49", "teddy bear 50"];
  const toysList5 = ["teddy bear 51", "teddy bear 52", "teddy bear 53", "teddy bear 54", "teddy bear 55", "teddy bear 16", "teddy bear 17", "teddy bear 18", "teddy bear 19", "teddy bear 20"];
  const toysList6 = ["teddy bear 61", "teddy bear 62", "teddy bear 63", "teddy bear 64", "teddy bear 65", "teddy bear 16", "teddy bear 17", "teddy bear 18", "teddy bear 19", "teddy bear 20"];
  const toysList7 = ["teddy bear 71", "teddy bear 72", "teddy bear 73", "teddy bear 74", "teddy bear 75", "teddy bear 76", "teddy bear 17", "teddy bear 18", "teddy bear 19", "teddy bear 20"];
  const toysList8 = ["teddy bear 81", "teddy bear 82", "teddy bear 83", "teddy bear 84", "teddy bear 85", "teddy bear 86", "teddy bear 17", "teddy bear 18", "teddy bear 19", "teddy bear 20"];
  const toysList9 = ["teddy bear 91", "teddy bear 92", "teddy bear 93", "teddy bear 94", "teddy bear 95", "teddy bear 96", "teddy bear 17", "teddy bear 18", "teddy bear 19", "teddy bear 20"];
  const toysList10 = ["teddy bear 101", "teddy bear 102", "teddy bear 103", "teddy bear 104", "teddy bear 105", "teddy bear 106", "teddy bear 17", "teddy bear 18", "teddy bear 19", "teddy bear 20"];
   
  return (
    <div className='adcat'>
    {/* <div className='dropdown' onMouseEnter={()=>{sethover(<FaAngleUp />);}} onMouseLeave={()=>{sethover(<FaAngleDown />);}}> */}
    {/* <div className='dropdown' onMouseEnter={()=>{sethover(true);}} onMouseLeave={()=>{sethover(false);}}> */}
    <div className='dropdown' onMouseEnter={()=>{setActiveIndex(1);}} onMouseLeave={()=>{setActiveIndex(null);}}>
     <a href="#"/>
        <img src={toys} alt='toys'/> 
        <div className="caption">Toys{activeindex === 1 ? <FaAngleDown/> : <FaAngleUp/>}</div>
        <div className='dropdown-content'>
         <div className='cont'>
            <div className='cat1'>
               <li onMouseEnter={()=>{setListNo(1)}}>teddy bear 1<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(2)}}>teddy bear 2<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(3)}}>teddy bear 3<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(4)}}>teddy bear 4<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(5)}}>teddy bear 5<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(6)}}>teddy bear 6<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(7)}}>teddy bear 7<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(8)}}>teddy bear 8<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(9)}}>teddy bear 9<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(10)}}>teddy bear 10<span><MdKeyboardArrowRight /></span></li>
                
                
            </div>
            <div className='cat2'>
            {listno === 1 && toysList1.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 2 && toysList2.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 3 && toysList3.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 4 && toysList4.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 5 && toysList5.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 6 && toysList6.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 7 && toysList7.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 8 && toysList8.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 9 && toysList9.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 10 && toysList10.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
             

          
            

            </div>
         </div>
        </div>
    </div>

    <div className='dropdown' onMouseEnter={()=>{setActiveIndex(2);}} onMouseLeave={()=>{setActiveIndex(null);}}>
     <a href="#"/>
        <img src={appliances} alt='toys'/> 
        <div className="caption">Appliances{activeindex === 2 ? <FaAngleDown/> : <FaAngleUp/>}</div>
        <div className='dropdown-content'>
         <div className='cont'>
            <div className='cat1'>
               <li onMouseEnter={()=>{setListNo(1)}}>teddy bear 1<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(2)}}>teddy bear 2<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(3)}}>teddy bear 3<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(4)}}>teddy bear 4<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(5)}}>teddy bear 5<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(6)}}>teddy bear 6<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(7)}}>teddy bear 7<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(8)}}>teddy bear 8<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(9)}}>teddy bear 9<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(10)}}>teddy bear 10<span><MdKeyboardArrowRight /></span></li>
                
                
            </div>
            <div className='cat2'>
            {listno === 1 && toysList1.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 2 && toysList2.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 3 && toysList3.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 4 && toysList4.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 5 && toysList5.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 6 && toysList6.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 7 && toysList7.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 8 && toysList8.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 9 && toysList9.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 10 && toysList10.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
             

          
            

            </div>
         </div>
        </div>
    </div>
    <div className='dropdown' onMouseEnter={()=>{setActiveIndex(3);}} onMouseLeave={()=>{setActiveIndex(null);}}>
     <a href="#"/>
        <img src={fashion} alt='toys'/> 
        <div className="caption">Fashion{activeindex === 3 ? <FaAngleDown/> : <FaAngleUp/>}</div>
        <div className='dropdown-content'>
         <div className='cont'>
            <div className='cat1'>
               <li onMouseEnter={()=>{setListNo(1)}}>teddy bear 1<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(2)}}>teddy bear 2<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(3)}}>teddy bear 3<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(4)}}>teddy bear 4<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(5)}}>teddy bear 5<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(6)}}>teddy bear 6<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(7)}}>teddy bear 7<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(8)}}>teddy bear 8<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(9)}}>teddy bear 9<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(10)}}>teddy bear 10<span><MdKeyboardArrowRight /></span></li>
                
                
            </div>
            <div className='cat2'>
            {listno === 1 && toysList1.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 2 && toysList2.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 3 && toysList3.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 4 && toysList4.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 5 && toysList5.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 6 && toysList6.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 7 && toysList7.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 8 && toysList8.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 9 && toysList9.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 10 && toysList10.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
             

          
            

            </div>
         </div>
        </div>
    </div>
     <div className='dropdown' onMouseEnter={()=>{setActiveIndex(4);}} onMouseLeave={()=>{setActiveIndex(null);}}>
     <a href="#"/>
        <img src={flights} alt='toys'/> 
        <div className="caption">Flights{activeindex === 4 ? <FaAngleDown/> : <FaAngleUp/>}</div>
        <div className='dropdown-content'>
         <div className='cont'>
            <div className='cat1'>
               <li onMouseEnter={()=>{setListNo(1)}}>teddy bear 1<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(2)}}>teddy bear 2<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(3)}}>teddy bear 3<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(4)}}>teddy bear 4<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(5)}}>teddy bear 5<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(6)}}>teddy bear 6<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(7)}}>teddy bear 7<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(8)}}>teddy bear 8<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(9)}}>teddy bear 9<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(10)}}>teddy bear 10<span><MdKeyboardArrowRight /></span></li>
                
                
            </div>
            <div className='cat2'>
            {listno === 1 && toysList1.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 2 && toysList2.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 3 && toysList3.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 4 && toysList4.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 5 && toysList5.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 6 && toysList6.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 7 && toysList7.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 8 && toysList8.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 9 && toysList9.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 10 && toysList10.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
             

          
            

            </div>
         </div>
        </div>
    </div>
     <div className='dropdown' onMouseEnter={()=>{setActiveIndex(5);}} onMouseLeave={()=>{setActiveIndex(null);}}>
     <a href="#"/>
        <img src={furniture} alt='toys'/> 
        <div className="caption">Furniture{activeindex === 5 ? <FaAngleDown/> : <FaAngleUp/>}</div>
        <div className='dropdown-content'>
         <div className='cont'>
            <div className='cat1'>
               <li onMouseEnter={()=>{setListNo(1)}}>teddy bear 1<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(2)}}>teddy bear 2<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(3)}}>teddy bear 3<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(4)}}>teddy bear 4<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(5)}}>teddy bear 5<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(6)}}>teddy bear 6<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(7)}}>teddy bear 7<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(8)}}>teddy bear 8<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(9)}}>teddy bear 9<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(10)}}>teddy bear 10<span><MdKeyboardArrowRight /></span></li>
                
                
            </div>
            <div className='cat2'>
            {listno === 1 && toysList1.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 2 && toysList2.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 3 && toysList3.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 4 && toysList4.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 5 && toysList5.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 6 && toysList6.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 7 && toysList7.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 8 && toysList8.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 9 && toysList9.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 10 && toysList10.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
             

          
            

            </div>
         </div>
        </div>
    </div>
     <div className='dropdown' onMouseEnter={()=>{setActiveIndex(6);}} onMouseLeave={()=>{setActiveIndex(null);}}>
     <a href="#"/>
        <img src={grocery} alt='toys'/> 
        <div className="caption">Grocery{activeindex === 6 ? <FaAngleDown/> : <FaAngleUp/>}</div>
        <div className='dropdown-content'>
         <div className='cont'>
            <div className='cat1'>
               <li onMouseEnter={()=>{setListNo(1)}}>teddy bear 1<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(2)}}>teddy bear 2<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(3)}}>teddy bear 3<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(4)}}>teddy bear 4<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(5)}}>teddy bear 5<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(6)}}>teddy bear 6<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(7)}}>teddy bear 7<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(8)}}>teddy bear 8<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(9)}}>teddy bear 9<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(10)}}>teddy bear 10<span><MdKeyboardArrowRight /></span></li>
                
                
            </div>
            <div className='cat2'>
            {listno === 1 && toysList1.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 2 && toysList2.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 3 && toysList3.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 4 && toysList4.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 5 && toysList5.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 6 && toysList6.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 7 && toysList7.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 8 && toysList8.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 9 && toysList9.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 10 && toysList10.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
             

          
            

            </div>
         </div>
        </div>
    </div>
     <div className='dropdown' onMouseEnter={()=>{setActiveIndex(7);}} onMouseLeave={()=>{setActiveIndex(null);}}>
     <a href="#"/>
        <img src={mobiles} alt='toys'/> 
        <div className="caption">Mobiles{activeindex === 7 ? <FaAngleDown/> : <FaAngleUp/>}</div>
        <div className='dropdown-content'>
         <div className='cont'>
            <div className='cat1'>
               <li onMouseEnter={()=>{setListNo(1)}}>teddy bear 1<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(2)}}>teddy bear 2<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(3)}}>teddy bear 3<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(4)}}>teddy bear 4<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(5)}}>teddy bear 5<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(6)}}>teddy bear 6<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(7)}}>teddy bear 7<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(8)}}>teddy bear 8<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(9)}}>teddy bear 9<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(10)}}>teddy bear 10<span><MdKeyboardArrowRight /></span></li>
                
                
            </div>
            <div className='cat2'>
            {listno === 1 && toysList1.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 2 && toysList2.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 3 && toysList3.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 4 && toysList4.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 5 && toysList5.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 6 && toysList6.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 7 && toysList7.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 8 && toysList8.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 9 && toysList9.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
            {listno === 10 && toysList10.map((toy,index)=>(
               <li key={index}>{toy}<span><MdKeyboardArrowRight /></span></li>
            ))}
             

          
            

            </div>
         </div>
        </div>
    </div>
     <div className='dropdown' onMouseEnter={()=>{setActiveIndex(8);}} onMouseLeave={()=>{setActiveIndex(null);}}>
     <a href="#"/>
        <img src={utensils} alt='toys'/> 
        <div className="caption">Utensils{activeindex === 8 ? <FaAngleDown/> : <FaAngleUp/>}</div>
        <div className='dropdown-content'>
         <div className='cont'>
            <div className='cat1'>
               <li onMouseEnter={()=>{setListNo(1)}}>teddy bear 1<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(2)}}>teddy bear 2<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(3)}}>teddy bear 3<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(4)}}>teddy bear 4<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(5)}}>teddy bear 5<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(6)}}>teddy bear 6<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(7)}}>teddy bear 7<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(8)}}>teddy bear 8<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(9)}}>teddy bear 9<span><MdKeyboardArrowRight /></span></li>
               <li onMouseEnter={()=>{setListNo(10)}}>teddy bear 10<span><MdKeyboardArrowRight /></span></li>
                
                
            </div>
             
         </div>
        </div>
    </div>
      
     <div className='dropdown'>
     <a href="#"/>
        <img src={toys} alt='toys'/> 
        <div className="caption">Toys</div>
        
    </div>
       
    </div>
  )
}

export default Categories
