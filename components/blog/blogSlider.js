import React, { useState } from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
SwiperCore.use([Navigation, Pagination])


export default function BlogSlider(){
  return(
    <>
        <div className="slider_content">
                  {/* <!-- Swiper --> */}

                  <div className="swiper mySwiper">
                    <div className="swiper-wrapper">
                      <Swiper className="swiper-main" slidesPerView={1} navigation={true} pagination={{ clickable: true }}>
                        <SwiperSlide>
                           <div className="row">
                           <div className="col-lg-6 slide-img p-0">
                            <div className="img-box">
                            <Image src="/img/slider-1.png" className="image" layout="fill" ></Image>
                               </div>
                            </div>
                           <div className="col-lg-6 p-0">
                            <div className="slide-content">
                            <div className="category">LIFESTYLE</div>
                         <h3 className="blog_title">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                           </h3>
                            <span className="published_date">
                          <i className="far fa-clock"></i> October 18, 2021
                        </span>
                           </div>
                            </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className="row">
                           <div className="col-lg-6 slide-img p-0">
                            <div className="img-box">
                            <Image src="/img/slider-1.png" className="image" layout="fill" ></Image>
                               </div>
                            </div>
                           <div className="col-lg-6 p-0">
                            <div className="slide-content">
                            <div className="category">LIFESTYLE</div>
                         <h3 className="blog_title">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                           </h3>
                            <span className="published_date">
                          <i className="far fa-clock"></i> October 18, 2021
                        </span>
                           </div>
                            </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className="row">
                           <div className="col-lg-6 slide-img p-0">
                            <div className="img-box">
                            <Image src="/img/slider-1.png" className="image" layout="fill" ></Image>
                               </div>
                            </div>
                           <div className="col-lg-6 p-0">
                            <div className="slide-content">
                            <div className="category">LIFESTYLE</div>
                         <h3 className="blog_title">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                           </h3>
                            <span className="published_date">
                          <i className="far fa-clock"></i> October 18, 2021
                        </span>
                           </div>
                            </div>
                            </div>
                        </SwiperSlide>
                        
                      </Swiper>
                    </div>
                    </div>
                    </div>

<style jsx>{`

.slider_content .row{
align-items:center;
background: #F0F1F2;
height: 100%;
}
.slider_content .slide-content{
position:realtive;
height:100%;
padding-left:110px;
}
.slider_content .slide-img{
margin-bottom:-10px;
}
.slider_content .img-box{
width:100%;
position:relative;
height:502px;
}
.slider_content .image {
    object-fit: contain;
  }
.slider_content .category{
        width:auto;
        font-size:14px;
        font-weight:500;
        color:white;
        padding: 3px 10px;
        z-index:20;
        background:#3B18C6; 
        border-radius:3px;
        width: fit-content;
        }
.slider_content .blog_title{
font-size:40px;
font-weight:600;
padding-top:15px;
width:80%;
line-height:1.3;
}
.slider_content .published_date{
padding-top:25px;
font-size:14px;
}
`}</style>
    </>
  )
}