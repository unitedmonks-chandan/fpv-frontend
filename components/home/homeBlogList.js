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
                <div className="swiper-slide">
                  <div className="blog">
                    <img src="img/blog_img.png" alt="blog" />
                    <h3 className="blog_title">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque sapien velit,
                    </h3>
                    <p className="blog_des">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque sapien velit, aliquet eget commodo nec, auctor a
                      sapien.
                    </p>
                    <span className="published_date">
                      <i className="far fa-clock"></i> October 18, 2021
                    </span>
                  </div>
                </div>
                <Swiper slidesPerView={3} navigation={true} loop={true}>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="blog">
                        <img src="img/blog_img.png" alt="blog" />
                        <h3 className="blog_title">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque sapien velit,
                        </h3>
                        <p className="blog_des">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque sapien velit, aliquet eget commodo nec,
                          auctor a sapien.
                        </p>
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
                          elit. Quisque sapien velit,
                        </h3>
                        <p className="blog_des">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque sapien velit, aliquet eget commodo nec,
                          auctor a sapien.
                        </p>
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
                          elit. Quisque sapien velit,
                        </h3>
                        <p className="blog_des">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque sapien velit, aliquet eget commodo nec,
                          auctor a sapien.
                        </p>
                        <span className="published_date">
                          <i className="far fa-clock"></i> October 18, 2021
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .header_section {
          padding: 250px 0 140px;
        }
        .cash_back {
          position: absolute;
          right: 0;
          top: 34px;
          z-index: 9;
        }
        .header_section::before {
          background: linear-gradient(
            129.96deg,
            #1562b6 15.93%,
            #3b18c6 90.61%
          );
        }
        .header_section::after {
          background-color: #fff;
        }
        .header_section .hero_title {
          font-size: 70px;
          line-height: 70px;
          font-weight: 600;
          color: #fff;
          margin: 0;
        }
        .header_section .hero_para {
          margin: 25px 0;
          font-size: 20px;
          font-weight: 400;
        }
        .header_section .btn {
          padding: 19px 36px;
          color: #1562b6;
          border-radius: 5px;
          background-color: #fff;
        }
        .header_section .btn:hover {
          box-shadow: 0 2rem 2rem rgba(0, 0, 0, 0.15) !important;
        }
        .header_section .arrow_down {
          margin: 55px auto 0;
          font-size: 22px;
          width: 77px;
          height: 77px;
          border-radius: 50%;
          background-color: rgba(225, 225, 225, 8%);
          color: #fff;
          transition: all 0.5s;
          position: relative;
        }
        .header_section .arrow_down::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          z-index: 1;
          background-color: rgba(255, 255, 255, 0.1);
          transition: all 0.3s;
        }
        .header_section .arrow_down:hover::before {
          opacity: 0;
          transform: scale(0.5, 0.5);
        }

        .our_blog {
          padding: 100px 0 80px;
        }
        .our_blog .text-content {
          margin-bottom: 40px;
        }
        .our_blog .blog {
          margin-bottom: 20px;
        }
        .our_blog .blog .blog_title {
          font-size: 25px;
          margin-top: 24px;
          margin-bottom: 0;
        }
        .our_blog .blog .blog_des {
          margin: 9px 0;
          color: #898989;
        }
        .our_blog .published_date {
          color: #3b18c6;
        }
      `}</style>
    </>
  )
}

export default HomeBlogList
