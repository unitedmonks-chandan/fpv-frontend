import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
SwiperCore.use([Navigation])

const HomeBlogList = () => {
  return (
    <>
      <div className="our_blog">
        <div className="container">
          <div className="text-content">
            <h2 className="section_title text-center">Our Blog</h2>
          </div>
          <div className="content">
            <div className="swiper mySwiper">
              <div className="swiper-wrapper">
                <Swiper breakpoints={{
                 // when window width is >= 1024px
                      1024: {
                      slidesPerView: 3,
                      },
                // when window width is >= 640px
                       0: {
                       slidesPerView: 1,
                        },
  }} slidesPerView={3} spaceBetween={30} navigation={true} loop={true}>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="blog">
                        <img src="img/blog_img.png" alt="blog" />
                        <h3 className="blog_title">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque sapien velit,
                        </h3>
                        <span className="published_date">
                          <i className="far fa-clock"></i> October 18, 2021
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>{' '}
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="blog">
                        <img src="img/blog_img.png" alt="blog" />
                        <h3 className="blog_title">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </h3>
                        <span className="published_date">
                          <i className="far fa-clock"></i> October 18, 2021
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="blog">
                        <img src="img/blog_img.png" alt="blog" />
                        <h3 className="blog_title">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </h3>
                        <span className="published_date">
                          <i className="far fa-clock"></i> October 18, 2021
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`

        .our_blog {
          padding: 100px 0 80px;
        }
        .our_blog .text-content {
          position:relative;
          margin-bottom: 40px;
        }
        .our_blog .section_title::before{
          display:block;
          content:'';
          background: #3b18c6;
          height:5px;
          width:85px;
          top:0;
          margin: 0 auto;
          margin-bottom:20px;
        }
        .our_blog .blog {
          position:relative;
          margin-bottom: 20px;
        }
        .our_blog img{
        position:relative;
        z-index:10;
        width:100%;
        }
        .our_blog .blog:after{
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
        .our_blog .blog .blog_title {
          font-size: 25px;
          position: absolute;
          bottom: 18%;
          z-index: 20;
          width: 70%;
          padding: 10px;
          color: white;
          left: 20px;
        }
        .our_blog .blog .blog_des {
          margin: 9px 0;
          color: #898989;
        }
        .our_blog .published_date {
          position: absolute;
          color: white;
          bottom: 10%;
          z-index: 20;
          left: 20px;
        }
      `}</style>
    </>
  )
}

export default HomeBlogList
