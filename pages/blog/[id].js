import React, { useState } from 'react'
import Layout from '../../components/layouts/layout'
import Image from 'next/image'

import BlogPost from '../../components/blog/blogPost'
import BlogList from '../../components/blog/BlogList'
import Form from '../../components/blog/Form'

export default function BlogPage(){


  
  const PostPagination = () => (
    <>
  <div className="post-pagination">
    <div className="row">
    <div className="col-6 col-left">
    <div className="text-left">
    <p className="pagination-text">Previous</p>
    <p className="blog-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien velit, aliquet eget commodo </p>
    </div>
    </div>
    <div className="col-6">
    <div className="text-right">
    <p className="pagination-text">Next</p>
    <p className="blog-title blog-title-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien velit, aliquet eget commodo </p>
    </div>
    </div>
    </div>
    </div>
    <style jsx>{`
.post-pagination{
margin:0 auto;
width:75%;
}
.post-pagination .text-left{
text-align:right;
}
.post-pagination .text-right{
text-align:left;
}
.post-pagination .row{
margin:40px 0;
border-top:1px solid #C4C4C4;
border-bottom:1px solid #C4C4C4;
}
.post-pagination .col-6{
cursor:pointer;
padding:25px;
}
.post-pagination .col-6:hover .pagination-text{
color:#3B18C6;
}
.post-pagination .col-left{
border-right:1px solid #C4C4C4;
}
.post-pagination .pagination-text{
font-weight:600;
color:#777777;
font-size:16px;
margin-bottom:10px;
transition: .3s ease;
}
.blog-title{
font-size:20px;
font-weight:500;
line-height:1.1;
width:80%;
margin-left:auto;
}
.blog-title-right{
margin-left:0;
margin-right:auto;
}
`}</style>
    </>
  )
  
  return(
    <>
    <Layout>
    <div className="blog-page">
    <div className="bg-grey"></div>
    <div className="container">
    <div className="post-main">
       <BlogPost />
       <PostPagination />
       <Form />
    </div>
    </div>
       <BlogList />
    </div>
    </Layout>
    <style jsx>{`
.blog-page{
position:relative;
padding-top:100px;
}
.blog-page .bg-grey{
background:#F0F1F2;
height:450px;
width:100%;
position:absolute;
top:0;
z-index:5;
}
.blog-page .post-main{
position:relative;
}
`}</style>
    </>
  )
}