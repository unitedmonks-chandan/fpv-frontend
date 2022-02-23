import React, { useState } from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
SwiperCore.use([Navigation])


export default function BlogSliderSm(){
  return(
    <>
        <div className="slider_sm">
                  {/* <!-- Swiper --> */}

                  <div className="swiper mySwiper">
                         <h3 className="title-text">Recommend</h3>
                    <div className="swiper-wrapper">
                      <Swiper className="swiper-main" slidesPerView={1} navigation={true} pagination={{ clickable: true }}>
                        <SwiperSlide>
                          <div className="slide-img">
                            <img src="/img/slider-1.png"></img>
  </div>
                         <h3 className="blog_title">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                           </h3>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="slide-img">
                            <img src="/img/slider-1.png"></img>
  </div>
                         <h3 className="blog_title">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                           </h3>
                        </SwiperSlide>
                        
                      </Swiper>
                    </div>
                    </div>
                    </div>

<style jsx>{`
.slider_sm .title-text{
font-size:20px;
font-weight:500;
margin-bottom:20px;
}
.slider_sm .swiper{
margin-left:0;
margin-right:0;
}
.slider_sm .row{
align-items:center;
height: 100%;
}
.slider_sm img{
width:100%;
border-radius:3px;
}
.slider_sm .blog_title{
font-size:20px;
font-weight:600;
padding-top:20px;
width:90%;
line-height:1.3;
}
`}</style>
    </>
  )
}