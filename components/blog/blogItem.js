import React, { useState } from 'react'
import Image from 'next/image'

export default function BlogItem({key}){
  return(
    <>
     <div className="col-lg-6" key={key}>
    <div className="blog-item">
                        <img src="img/blog_img.png" alt="blog" />
                        <h3 className="blog_title">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque sapien velit,
                        </h3>
                        <span className="published_date">
                          <i className="far fa-clock"></i> October 18, 2021
                        </span>
                            <div className="category">LIFESTYLE</div>
                      </div>
                      </div>
    <style jsx>{`
.blog-item .category{
        position:absolute;
        top:0;
        left:0;
        font-size:14px;
        font-weight:500;
        color:white;
        padding:5px 10px;
        z-index:20;
        background:#3B18C6; 
        border-radius:3px;
        }
        .blog-item {
          position:relative;
          margin-bottom: 20px;
        }
        .blog-item img{
        position:relative;
        z-index:10;
        width:100%;
        }
        .blog-item:after{
        display:block;
        content:'';
        background: rgba(64, 64, 64, .6);
        width:100%;
        height:100%;
        position:absolute;
        z-index:15;
        top:0;
        left:0;
        }
        .blog-item .blog_title {
          font-size: 25px;
          position: absolute;
          bottom: 18%;
          z-index: 20;
          width: 70%;
          padding-bottom:10px;
          color: white;
          left: 30px;
          text-align:left;
        }
        .blog-item .published_date {
          position: absolute;
          color: white;
          bottom: 10%;
          z-index: 20;
          left: 30px;
          font-size:14px;
        }

`}</style>
    </>
  )
}