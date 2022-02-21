import React, { useState } from 'react'
import Layout from '../../components/layouts/layout'
import Image from 'next/image'

import BlogSlider from '../../components/blog/blogSlider'
import BlogItem from '../../components/blog/blogItem'

export default function BlogListing(){

    const [ blogItems, setBlogItems ] = useState([1,2,3,4,5,6 ])
  
  return(
    <>
    <Layout>
    <div className="blog">

      <BlogSlider />
 
         <div className="container">  
    
    <div className="blog-main">
      <div className="row">
    
        <div className="col-lg-8">
            <div className="blog-list">
    
              <div className="row">
      { blogItems && blogItems.map((item,key)=>(
        <BlogItem  key={key}/>
      ))}
              <div className="pagination mt-5">
                      <button
                        type="button"
                        href="#"
                        className="pagination-button pagination-right"
                      >
                          <span className="btn-text">
                        <i className="fas fa-angle-double-left"></i>
                        <p className="btn-text-prev">PREVIOUS</p>
                          </span>
                      </button>
                      <button
                        type="button"
                        href="#"
                        className="pagination-button"
                      >
                          <span className="btn-text">
                        <p className="btn-text-next">NEXT</p>
                        <i className="fas fa-angle-double-right"></i>
                          </span>
                      </button>
                   </div>
      </div>
                          
     </div>                   
    </div>
    <div className="col-lg-4">
    
       </div>
                          
      </div>
     </div>
    
    </div> 
                          
  </div>
    </Layout>
     <style jsx>{`
 .blog{
margin-top:67px;
 }
.blog .blog-main{
padding:100px 0;
}

 .pagination {
          display: flex;
          justify-content: end;
        }
         .pagination-button p {
          margin-bottom: 0;
        }
        .pagination-button {
          position:relative;
          display: flex;
          padding: 10px 20px;
          border-radius: 5px;
          border: none;
          color: white;
          align-items: center;
          transition: .3s ease all;
          background: linear-gradient(
            129.96deg,
            #1562b6 15.93%,
            #3b18c6 90.61%
          );
        }

      .pagination-button:after{
         display:block;
         content:'';
         width:100%;
         height:100%;
         position:absolute;
         top:0;
         left:0;
         background:linear-gradient(96.48deg, #4c2dcb 8.17%, #1562b6 63.07%);
         z-index:10;
         opacity:0;
         border-radius:3px;
         transition:.2s ease;
       }
 .pagination-button:hover:after{
        opacity:1;
 }
        
        .pagination .disabled {
          opacity: 0.7;
        }

         .pagination .btn-text{
            display: flex;
            align-items: center;
            position:relative;
            z-index: 20;
         }
.btn-text-next{
font-size:14px;
margin-right:15px;
}
.btn-text-prev{
font-size:14px;
margin-left:15px;
}
.pagination-right{
margin-right:20px;
}
`}</style>
    </>
  )
}