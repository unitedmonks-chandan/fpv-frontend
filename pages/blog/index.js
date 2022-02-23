import React, { useState } from 'react'
import Layout from '../../components/layouts/layout'
import Image from 'next/image'

import BlogSlider from '../../components/blog/blogSlider'
import BlogItem from '../../components/blog/blogItem'
import BlogSliderSm from '../../components/blog/blogSliderSm'

export default function BlogListing(){

    const [ blogItems, setBlogItems ] = useState([1,2,3,4,5,6 ])
    const [ blogMostItems, setBlogMostItems ] = useState([1,2,3,4,5 ])
    const [ ExploreItems, setExploreItems ] = useState([1,2,3,4 ])
  
    const BlogMostItem = ({key}) => (
      <>
      <div className="blog-most-item" key={key}>
                          <img src="/img/tile_1.jpg"></img>
                          <p>Lorem ipsum dolor sit
amet, consectetur adipiscing elit.</p>
                          <div className="item-number">1</div>
                          </div>
  <style jsx>{`
.blog-most-item{
margin-top:20px;
display:flex;
align-items:center;
position:relative;
}
.blog-most-item img{
border-radius:3px;
}
.blog-most-item p{
font-size:16px;
color: #777777;
margin-left:15px;
margin-bottom:0;
}
.blog-most-item .item-number{
position:absolute;
background:#3B18C6;
z-index:20;
top:0px;
left:-15px;
color:white;
font-weight:500;
padding:5px 15px;
border-radius:100%;

}
`}</style>
  </>
    )

const ExploreItem = ({key}) => (
  <>
  <div className="col-xl-12 col-md-6">
  <div className="explore-item" key={key}>
                            <img src="/img/explore_1.jpg"></img>
                            <div className="category">TECHNOLOGY</div>
                            </div>
                            </div>
  <style jsx>{`
.explore-item{
margin-top:30px;
position:relative;
}
.explore-item img{
width:100%
}
.explore-item:after{
        display:block;
        content:'';
        background: rgba(119, 119, 119, .2);
        width:100%;
        height:100%;
        position:absolute;
        z-index:15;
        top:0;
        left:0;
        border-radius:3px;
}
.explore-item .category{
        position:absolute;
        top:42%;
        left:32%;
        font-size:14px;
        font-weight:500;
        color:white;
        padding:5px 10px;
        z-index:20;
        background:#3B18C6; 
        border-radius:3px;
        }
`}</style>
  </>
)

  
  return(
    <>
    <Layout>
    <div className="blog">

      <BlogSlider />
 
         <div className="container">  
    
    <div className="blog-main">
      <div className="row">
    
        <div className="col-xl-8">
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
    <div className="col-xl-4">
    <div className="fpv-sidebar">
    <div className="blog-recommended">
            <BlogSliderSm />
               </div>
                      <div className="blog-most">
                          <h3 className="title-text blue">Most Read</h3>
                          <div className="scroll-box">
                          
                         { blogMostItems && blogMostItems.map((item,key)=>(
                      <BlogMostItem  key={key}/>
                          ))}
                          
                          </div>
                          </div>

                            <div className="blog-explore">
                          <h3 className="title-text">Explore</h3>
                            <div className="scroll-box">
                            <div className="row">
                              { ExploreItems && ExploreItems.map((item,key)=>(
                      <ExploreItem  key={key}/>
                          ))}
                            </div>s
                            </div>
                            </div>
                          
            </div>
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
.fpv-sidebar{
     padding:5px 20px;
}

.blog .blog-most{
margin-top:20px;
}
.blog .blog-explore{
margin-top:35px;
}
.blog .title-text{
font-size:20px;
font-weight:500;
}
.blog .scroll-box{
padding:0 20px;
margin-top:20px;
height:285px;
overflow:auto;
}



`}</style>
    </>
  )
}