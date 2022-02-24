import React, { useState } from 'react'
import Image from 'next/image'

export default function BlogPost(){

  const ShareSection = () => (
    <>
    <div className="share-section">
    <p className="share-text">SHARE</p>
    <div className="line"></div>
    <div className="icon-box">
    <i className="fa-brands fa-facebook-f"></i>
    </div>
    <div className="icon-box">
    <i className="fa-brands fa-twitter"></i>
    </div>
    <div className="icon-box">
    <i className="fa-brands fa-youtube"></i>
    </div>
    </div>
    <style jsx>{`
    .share-section{
      width:44px;
      position:absolute;
      top:130px;
      left:0;
      z-index:30;
      text-align:center;
    }
    .share-text{
    color:#B9B9B9;
    font-weight:600;
    font-size:14px;
    margin-bottom:10px;
    }
    .line{
    display:block;
    content:'';
    height:40px;
    width:1px;
    background:#B9B9B9;
    margin:0 auto;
    } 
    .icon-box{
     cursor:pointer;
     color:#B9B9B9;
     border:1px solid #B9B9B9;
     border-radius:3px;
     height:44px;
     margin-top:10px;
     display: flex;
     align-items: center;
     justify-content: center;
     transition:.3s ease-in-out;
    }
.icon-box:hover{
background:#3B18C6;
color:white;
border:none;
}
`}</style>
    </>
  )
  
  return(
    <>
    <div className="blog-post">
    <div className="post-header">
                            <div className="category">LIFESTYLE</div>
                         <h3 className="blog_title">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                           </h3>
                            <div className="published_date">
                          <i className="far fa-clock"></i> October 18, 2021
                        </div>
                    </div>
                  <div className="post-inner">
                          
                  <div className="post-content">
                            <div className="post-img">
                            <Image src="/img/blog-image.jpg" layout="fill" ></Image>
                            </div>

                            <div className="post-text">
                            <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu neque vulputate diam rhoncus faucibus. Curabitur quis varius libero. Lorem.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu neque vulputate diam rhoncus faucibus. Curabitur quis varius libero. Lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                            <div className="post-img">
                            <Image src="/img/blog-image2.jpg" layout="fill" ></Image>
                            </div>
                            <div className="post-text">
                            <h3>Lorem ipsum dolor sit amet</h3>
                            <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu neque vulputate diam rhoncus faucibus. Curabitur quis varius libero. Lorem.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu neque vulputate diam rhoncus faucibus. Curabitur quis varius libero. Lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            <p className="text-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu neque vulputate diam rhoncus faucibus. Curabitur quis varius libero. Lorem.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien velit, aliquet eget commodo nec, auctor a sapien.  </p>
                            </div>
                            
                            </div>
                            <ShareSection />
                            </div>
                      
                  </div>
    <style jsx>{`
.blog-post{
margin-top:40px;
position:relative;
z-index:99;
}
.blog-post .post-header{
text-align:center;
}
.blog-post .category{
        font-size:14px;
        font-weight:500;
        color:white;
        padding: 3px 10px;
        z-index:20;
        background:#3B18C6; 
        border-radius:3px;
        width: fit-content;
margin:0 auto;
        }
.blog-post .blog_title{
font-size:40px;
font-weight:600;
padding-top:15px;
line-height:1.3;
width:50%;
margin:0 auto;
}
.blog-post .published_date{
margin-top:25px;
margin-bottom:45px;
font-size:14px;
}
.blog-post .post-img{
position:relative;
height:531px;
margin:0 auto;
}
.blog-post .post-inner{
position:relative;
}
.blog-post .post-content{
margin:-12px auto 0;
width:75%;
}
.blog-post .post-text{
font-size:16px;
color:#777777;
padding:40px 0;
}
.blog-post h3{
color:black;
font-size:25px;
font-weight:600;
margin-bottom:20px;
}
.blog-post .post-text .text-2{
margin-top:20px;
margin-bottom:0;
}
`}</style>
    </>
  )
}