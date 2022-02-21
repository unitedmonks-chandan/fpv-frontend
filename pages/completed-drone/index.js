import React, { useState } from 'react'
import Layout from '../../components/layouts/layout'
import Image from 'next/image'
import DroneCard from '../../components/completed-drones/droneCard'

export default function CompletedDronesList(){

  // Suppose we have 10 products and we will generate a card for each product dynamically. So we will set value for all cards and then we will map it.

  const [ droneCards, setDroneCards ] = useState([1,2,3,4,5,6,7,8,9,10 ])
  
  return(
    <>
   <Layout>
  <div className="completed_drones browse-products">
    <div className="product_header header text-center text-white">
     <h1 className="hero_title">Completed Drones</h1>
     </div>

    <div className="fpv-browse">
       <div className="container">
         <div className="filter-products">
           <h4>Filter By</h4>

         <div className="row mt-20">
           <div className="col-sm-3">
   <select name="filter-option" className="fpv-filter" id="category-filter">
             <option value="1">Flight Time (Descending)</option>
             <option value="2">Flight Time (Ascending)</option>
          <option value="3">Transmission Distance (Descending)</option>
                            </select>
               </div>
           </div>
        </div>

    
    <div className="row">
    { droneCards && droneCards.map((item,key)=>(
      <DroneCard  key={key}/>
    ))}
    </div>

   </div>
  </div>
 </div>
    </Layout>
    <style jsx>{`
     .browse-products .fpv-browse {
          background: #f0f1f2;
          padding: 40px 0;
        }
 .browse-products .filter-products .fpv-filter {
          border: none;
          outline: none;
          background: white;
          font-size: 16px;
          padding: 10px;
          width: 100%;
        }
.completed_drones.browse-products .fpv-browse{padding: 80px 0;}
`}</style>
    </>
  )
}