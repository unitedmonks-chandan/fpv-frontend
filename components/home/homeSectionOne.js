import React from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
SwiperCore.use([Navigation])

const HomeSectionOne = () => {
  return (
    <div>
      <div className="section_1">
        <div className="container-fluid">
          <div className="content">
            <div className="row align-items-center">
              <div className="col-xl-4 slider-title">
                <h2 className="section_title position-relative">
                  What do you want to do today?
                </h2>
              </div>
              <div className="col-xl-8">
                <div className="slider_content ps-lg-5">
                  {/* <!-- Swiper --> */}

                  <div className="swiper mySwiper">
                    <div className="swiper-wrapper">
                      <Swiper breakpoints={{
                 // when window width is >= 800px
                      980: {
                      slidesPerView: 3,
                      },
                // when window width is >= 640px
                       640: {
                       slidesPerView: 2,
                        },
                // when window width is >= 640px
                       480: {
                       slidesPerView: 1,
                        },
  }} className="swiper-main" spaceBetween={30} slidesPerView={1} navigation={true}>
                        <SwiperSlide>
                          <div className="swiper-slide position-relative">
                            <div className="content">
                              <img
                                src="/img/custom_drone.jpg"
                                alt="img"
                                className="w-100"
                              />
                              <div className="footer d-flex align-items-center">
                                <h3 className="text">
                                  Build your custom drone
                                </h3>
                                <a href="#" className="link">
                                  <i className="fas fa-chevron-right"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="swiper-slide position-relative">
                            <div className="content">
                              <img
                                src="/img/handmade_drone.jpg"
                                alt="img"
                                className="w-100"
                              />
                              <div className="footer d-flex align-items-center">
                                <h3 className="text">
                                  Buy our handmade drone
                                </h3>
                                <a href="#" className="link">
                                  <i className="fas fa-chevron-right"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="swiper-slide position-relative">
                            <div className="content">
                              <img
                                src="/img/drone_videographer.jpg"
                                alt="img"
                                className="w-100"
                              />
                              <div className="footer d-flex align-items-center">
                                <h3 className="text">
                                  Hire a Drone Videographer
                                </h3>
                                <a href="#" className="link">
                                  <i className="fas fa-chevron-right"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="swiper-slide position-relative">
                            <div className="content">
                              <img
                                src="/img/read_blog.jpg"
                                alt="img"
                                className="w-100"
                              />
                              <div className="footer d-flex align-items-center">
                                <h3 className="text">
                                  Read our blogs
                                </h3>
                                <a href="#" className="link">
                                  <i className="fas fa-chevron-right"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                    {/* <div className="swiper-button-next swiper_btn">
                      <i className="fas fa-chevron-right"></i>
                    </div>
                    <div className="swiper-button-prev swiper_btn">
                      <i className="fas fa-chevron-right"></i>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .section_1 {
          padding: 100px 0 120px;
        }
        .section_1 .container-fluid{
          padding:0;
        }
        .section_1 .slider-title{
          padding-left:5rem;
        }
        .section_1 .swiper_btn {
          width: 50px;
          height: 50px;
          color: #000;
          font-size: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(255, 255, 255, 0.7);
        }
        .swiper-main .swiper-button-next{
          width:50px;
        }
        .section_1 swiper-button-prev {
          transform: rotate(180deg);
        }
        .section_1 .swiper-button-next:after,
        .swiper-button-prev:after {
          display: none;
        }
        .section_1 .swiper-button-next.swiper-button-disabled,
        .section_1 .swiper-button-prev.swiper-button-disabled {
          display: none;
        }
        .section_1 .swiper-slide::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
        }
        .section_1 .swiper-slide .footer {
          position: absolute;
          width: 100%;
          bottom: 0;
          left: 0;
          padding: 25px;
        }
        .section_1 .swiper-slide .footer .text {
          font-size: 21px;
          color: #fff;
          font-weight: 600;
          margin-right: 55px;
        }
        .section_1 .swiper-slide .link {
          min-width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid #fff;
          display: flex;
          align-items: center;
          color: #fff;
          justify-content: center;
        }
        .section_1 .section_title::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          transform: translateX(0);
          width: 85px;
          height: 5px;
          background-color: #3b18c6;
        }
        .section_1 .section_title {
          padding-top: 23px;
        }
        .section_1 .swiper-slide::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
        }
        .section_1 .swiper-slide .footer {
          position: absolute;
          width: 100%;
          bottom: 0;
          left: 0;
          padding: 25px;
        }
        .section_1 .swiper-slide .footer .text {
          font-size: 21px;
          color: #fff;
          font-weight: 600;
          margin-right: 55px;
        }
        .section_1 .swiper-slide .link {
          min-width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid #fff;
          display: flex;
          align-items: center;
          color: #fff;
          justify-content: center;
        }
        .section_1 .section_title::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          transform: translateX(0);
          width: 85px;
          height: 5px;
          background-color: #3b18c6;
        }
        .section_1 .section_title {
          line-height:.9;
          font-size:60px;
          font-weight:600;
          padding-top: 23px;
        }
      `}</style>
    </div>
  )
}

export default HomeSectionOne
