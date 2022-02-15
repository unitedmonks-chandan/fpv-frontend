import React from 'react'
import { findCompleteDrone } from '../../libs/drone'
import Layout from '../../components/layouts/layout'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import StarRatings from 'react-star-ratings'
import { formatter } from '../../_helpers/formatter'
import 'swiper/css'
import 'swiper/css/navigation'
SwiperCore.use([Navigation])
export async function getServerSideProps({ query }) {
  const { id } = query
  const data = await findCompleteDrone(id)

  return {
    props: {
      data,
    },
  }
}

export default function droneParts({ data }) {
  const { drone } = data

  const Part = ({ itemName, item, formatter }) =>
    drone && (
      <div className="d-flex">
        <div className="product_icon bg-blue-grad flex-cente">
          <Image
            src={`/product_icons/${itemName}.png`}
            alt="icon"
            width={31}
            height={32}
          />
          <h3 className="name">{itemName}</h3>
        </div>
        <div className="product_detail w-100 border-1 text-center d-flex align-items-center">
          <div className="column_1 d-flex align-items-center">
            <img
              width="50px"
              src={item.featuredImage?.url}
              alt={item.featuredImage && item.name}
            />
            <Link href={`/products/${item._id}`}>
              <a>
                <p className="title m-0 text-dark">{item.name}</p>
              </a>
            </Link>
          </div>
          {item.merchant?.map(
            (item) =>
              item.mainMerchant && (
                <>
                  <div className="column_2">
                    <h2 className="price m-0 text-blue">
                      $ {formatter.format(item.price)}
                    </h2>
                  </div>
                  <div className="column_3">
                    <div className="where">
                      <img src={item.name.logo?.url} alt="card" />
                    </div>
                  </div>
                  <div className="column_4 d-flex justify-content-between align-items-center">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={item.affiliateLink}
                      className="buy_now bg-blue-grad text-white"
                    >
                      BUY NOW
                    </a>
                  </div>
                </>
              )
          )}
        </div>
      </div>
    )

  return (
    <Layout>
      <div className="completed-builds">
        <div className="fpv-completed">
          <div className="product_header header text-center text-white">
            <h1 className="hero_title">Our Completed Build</h1>
          </div>
          <div className="product_detail_main">
            <div className="container fpv-completed-fluid">
              <div className="row">
                <div className="col-lg-4 fpv-bg-swiper">
                  <div className="swiper gallery-top mySwiper2 position-relative">
                    <Swiper slidesPerView={1} navigation={true} loop={true}>
                      {drone &&
                        drone.images?.map((item, key) => (
                          <SwiperSlide key={key}>
                            <img
                              src={item.location}
                              className="img-fluid"
                              alt="product"
                            />
                          </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* <button type="button" className="swiper_btn btn_next btn">
                      <i className="fas fa-chevron-left"></i>
                    </button>
                    <button type="button" className="swiper_btn btn_prev btn">
                      <i className="fas fa-chevron-right"></i>
                    </button> */}
                  </div>
                  {/* <div className="swiper gallery-thumbs">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide swiper-thumbs">
                        <img
                          src="/img/drone_2.png"
                          className="img-fluid"
                          alt="product"
                        />
                      </div>
                      <div className="swiper-slide swiper-thumbs">
                        <img
                          src="/img/drone_2.png"
                          className="img-fluid"
                          alt="product"
                        />
                      </div>
                      <div className="swiper-slide swiper-thumbs">
                        <img
                          src="/img/drone_2.png"
                          className="img-fluid"
                          alt="product"
                        />
                      </div>
                      <div className="swiper-slide swiper-thumbs">
                        <img
                          src="/img/drone_2.png"
                          className="img-fluid"
                          alt="product"
                        />
                      </div>
                      <div className="swiper-slide swiper-thumbs">
                        <img
                          src="/img/drone_2.png"
                          className="img-fluid"
                          alt="product"
                        />
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="col-xl-8">
                  <div className="detail_content">
                    <h2 className="product_title">{drone.droneName}</h2>
                    <div className="reviews d-flex align-items-center">
                      <div className="my-rating readOnly me-2"></div>
                      <span className="rating">
                        (324 Ratings, 4.9 Average){' '}
                      </span>
                    </div>
                    <span className="line-grey mt-20"></span>
                    <div className="part-section">
                      <h4 className="font-weight-bold mt-20">Part List</h4>

                      <div className="browse_product_main mt-20">
                        <div className="container browse-container">
                          <div className="content">
                            <div className="find_product text-white m-0">
                              <div className="header d-flex">
                                <div className="column_1">
                                  <h4 className="title text-dark">Component</h4>
                                  <h4 className="title title-2 text-dark">
                                    Selection
                                  </h4>
                                </div>
                                <div className="column_2">
                                  <h4 className="title text-dark">Price</h4>
                                </div>
                                <div className="column_3">
                                  <h4 className="title text-dark">Where</h4>
                                </div>
                                <div className="column_4"></div>
                              </div>
                              <Part
                                itemName="FRAME"
                                item={drone.frame}
                                formatter={formatter}
                              />
                              <Part
                                itemName="BATTERY"
                                item={drone.battery}
                                formatter={formatter}
                              />
                              <Part
                                itemName="MOTOR"
                                item={drone.motor}
                                formatter={formatter}
                              />
                              {drone.esc && (
                                <Part
                                  itemName="ESC"
                                  item={drone.esc}
                                  formatter={formatter}
                                />
                              )}

                              {drone.flightController && (
                                <Part
                                  itemName="FLIGHT CONTROLLER"
                                  item={drone.flightController}
                                  formatter={formatter}
                                />
                              )}
                              <Part
                                itemName="VTX"
                                item={drone.vtx}
                                formatter={formatter}
                              />
                              {drone.camera && (
                                <Part
                                  itemName="CAMERA"
                                  item={drone.camera}
                                  formatter={formatter}
                                />
                              )}
                              <Part
                                itemName="PROPELLER"
                                item={drone.propeller}
                                formatter={formatter}
                              />
                              <Part
                                itemName="MISCELLANEOUS"
                                item={drone.miscellaneous}
                                formatter={formatter}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fpv-description bg-grey" style={{display:'none'}}>
            <div className="container">
              <ul className="nav nav-tabs">
                <li className="nav-item active">
                  <a
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#description"
                  >
                    <h4 className="white">Description</h4>
                  </a>
                </li>
                <li className="nav-item border-grey">
                  <a className="nav-link" data-bs-toggle="tab" href="#info">
                    <h4 className="grey-dark">Additional Information</h4>
                  </a>
                </li>
                <li className="nav-item border-grey">
                  <a className="nav-link" data-bs-toggle="tab" href="#review">
                    <h4 className="grey-dark">
                      Review(<span>82</span>)
                    </h4>
                  </a>
                </li>
              </ul>
              <div className="tab-content border-grey">
                <div className="tab-pane active" id="description">
                  <div className="row">
                    <div className="col p-4">
                      <h4>Introduction</h4>
                      <span className="line-grey mt-20"></span>
                      <p className="grey-dark mt-20">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque sapien velit, aliquet eget commodo nec, auctor a
                        sapien. Nam eu neque vulputate diam rhoncus faucibus.
                        Curabitur quis varius libero. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit. Quisque sapien velit,
                        aliquet eget commodo nec, auctor a sapien.{' '}
                      </p>
                      <h4 className="mt-40">Note on Pricing</h4>
                      <span className="line-grey mt-20"></span>
                      <p className="grey-dark mt-20">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque sapien velit, aliquet eget commodo nec, auctor a
                        sapien. Nam eu neque vulputate diam rhoncus faucibus.{' '}
                      </p>
                      <h4 className="mt-40">CPU</h4>
                      <span className="line-grey mt-20"></span>
                      <p className="grey-dark mt-20">
                        The AMD Ryzen 5 5600X provides some of the best bang for
                        your buck. It offers 6 cores, 12 threads, a base
                        frequency of 3.7GHz, and a turbo frequency of 4.6GHz.
                        For better cooling, we ve included an ARCTIC Freezer 34
                        eSports DUO.If youd prefer to consider a similar build
                        using an Intel processor, be sure to check out our Great
                        Intel
                      </p>

                      <span>
                        <h4 className="blue text-uppercase mt-20">
                          + View Details
                        </h4>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="info">
                  <div className="row">
                    <div className="col p-4">
                      <h3>Additional Information</h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry
                        s standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen book.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="review">
                  <div className="row">
                    <div className="col p-4">
                      <h3>Review</h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry
                        s standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen book.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section_1 bg-grey" style={{ display: 'none' }}>
            <div className="container-fluid">
              <div className="content">
                <div className="row align-items-center">
                  <div className="col-lg-4 ps-5">
                    <h2 className="section_title position-relative ml-35">
                      Related <br /> Products
                    </h2>
                  </div>
                  <div className="col-lg-8">
                    <div className="slider_content ps-lg-5">
                      <div className="swiper mySwiper">
                        <div className="swiper-wrapper">
                          <Swiper
                            slidesPerView={1}
                            navigation={true}
                            loop={true}
                            className="position-relative"
                          >
                            <SwiperSlide>
                              <div className="content bg-grey-dark content-box">
                                <img
                                  src="/img/drone_3.png"
                                  alt="img"
                                  className="w-100"
                                />
                                <div className="footer d-flex align-items-center">
                                  <h4>Quadron Controller Combo Copter</h4>
                                  <a href="#" className="link">
                                    <i className="fas fa-chevron-right"></i>
                                  </a>
                                </div>
                              </div>
                            </SwiperSlide>{' '}
                            <SwiperSlide>
                              <div className="content bg-grey-dark content-box">
                                <img
                                  src="/img/drone_3.png"
                                  alt="img"
                                  className="w-100"
                                />
                                <div className="footer d-flex align-items-center">
                                  <h4>Quadron Controller Combo Copter</h4>
                                  <a href="#" className="link">
                                    <i className="fas fa-chevron-right"></i>
                                  </a>
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="content bg-grey-dark content-box">
                                <img
                                  src="/img/drone_3.png"
                                  alt="img"
                                  className="w-100"
                                />
                                <div className="footer d-flex align-items-center">
                                  <h4>Quadron Controller Combo Copter</h4>
                                  <a href="#" className="link">
                                    <i className="fas fa-chevron-right"></i>
                                  </a>
                                </div>
                              </div>
                            </SwiperSlide>
                          </Swiper>
                        </div>
                      </div>
                      <div className="swiper-button-next swiper_btn">
                        <i className="fas fa-chevron-right"></i>
                      </div>
                      <div className="swiper-button-prev swiper_btn">
                        <i className="fas fa-chevron-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .ml-10 {
          margin-left: 10px;
        }
        .ml-20 {
          margin-left: 20px;
        }
        .pt-80 {
          padding-top: 80px;
        }
        .pt-100 {
          padding-top: 100px;
        }
        .pl-150 {
          padding-left: 150px;
        }
        .pr-50 {
          padding-right: 50px;
        }

        .grey-dark {
          color: #898989;
        }
        .bg-grey {
          background: #f0f1f2;
        }
        .bg-grey-dark {
          background: #c8c5c5;
        }

        .completed-builds .line-grey {
          height: 1px;
          width: 100%;
          background: #c4c4c4;
          display: block;
        }
        .completed-builds .product_detail_main .detail_content .bg-white {
          background: white;
        }
        .completed-builds .product_detail_main .swiper-wrapper {
          position: relative;
          z-index: 10;
        }
        .completed-builds .product_detail_main .swiper-fullscreen {
          position: absolute;
          z-index: 20;
          right: 5%;
          bottom: 5%;
          background: transparent;
          outline: none;
          border: none;
        }
        .completed-builds .product_detail_main .fpv-bg-swiper {
          margin-bottom: 40px;
        }
        .completed-builds .product_detail_main .fpv-bg {
          width: 100%;
        }
        .completed-builds
          .product_detail_main
          .detail_content
          .browse_product_main {
          padding: 0;
        }
        .completed-builds
          .product_detail_main
          .detail_content
          .browse_product_main
          .header {
          margin: 0;
          padding: 0;
        }
        .completed-builds
          .product_detail_main
          .detail_content
          .browse_product_main
          .header
          .title {
          padding: 0;
        }
        .completed-builds
          .product_detail_main
          .detail_content
          .browse_product_main
          .header
          .title-2 {
          padding-left: 12%;
        }
        .completed-builds
          .product_detail_main
          .detail_content
          .browse_product_main
          .column_1 {
          display: flex;
          justify-content: flex-start;
        }
        .completed-builds .product_detail_main .gallery-thumbs {
          margin-top: 20px;
        }
        .completed-builds .product_detail_main .gallery-thumbs .swiper-thumbs {
          min-height: 100%;
          padding: 10px;
        }
        .completed-builds .section_1 .swiper-slide .content-box {
          padding: 50px 0 65px;
          height: 260px;
        }
        .completed-builds .section_1 .swiper-slide::before {
          background-color: transparent;
        }
        .completed-builds .section_1 .swiper-slide .link {
          color: #3b18c6;
          border: 1px solid #3b18c6;
        }

        .completed-builds .fpv-description .nav-tabs .nav-item.active {
          background: rgb(0, 0, 0);
          background: linear-gradient(
            308deg,
            rgba(0, 0, 0, 0.9920168751094187) 0%,
            rgba(59, 24, 198, 1) 0%,
            rgba(21, 98, 182, 1) 100%
          );
        }
        .completed-builds .fpv-description .nav-tabs .nav-link {
          padding: 10px 20px;
        }
        .completed-builds .fpv-description .nav-tabs .nav-link.active {
          background: 0;
          border-color: none !important;
        }
        .completed-builds .fpv-description .border-grey {
          border: 1px solid #c8c5c5;
        }
        .completed-builds .fpv-description .tab-content .tab-pane {
          padding: 20px;
        }

        @media (min-width: 576px) and (max-width: 767.98px) {
          .completed-builds .fpv-description .nav-tabs .nav-link h4 {
            font-size: 14px;
          }
          .completed-builds .product_detail_main .container {
            max-width: 100% !important;
          }
          .completed-builds
            .product_detail_main
            .browse_product_main
            .browse-container {
            padding: 0;
          }
          .completed-builds
            .product_detail_main
            .browse_product_main
            .header
            .column_1 {
            width: 47%;
          }
          .completed-builds
            .product_detail_main
            .browse_product_main
            .find_product
            .column_1 {
            width: 60%;
          }
          .completed-builds
            .product_detail_main
            .browse_product_main
            .find_product
            .column_2 {
            padding: 5px;
          }
          .completed-builds
            .product_detail_main
            .browse_product_main
            .find_product
            .column_3 {
            padding: 5px;
          }
          .completed-builds
            .product_detail_main
            .browse_product_main
            .find_product
            .column_4 {
            padding: 5px;
          }
          .completed-builds
            .product_detail_main
            .browse_product_main
            .product_icon {
            margin-right: 0;
            width: auto;
            height: 68px;
            padding: 8px;
          }
          .completed-builds .product_detail_main .find_product .product_detail {
            padding: 10px 10px;
            height: 68px;
          }
          .completed-builds
            .product_detail_main
            .find_product
            .product_detail
            .title {
            font-size: 11px;
          }
          .completed-builds
            .product_detail_main
            .find_product
            .product_detail
            .close_box {
            margin-left: 20%;
          }
          .completed-builds .product_detail_main .browse_product_main .buy_now {
            width: 80%;
          }

          .build_now {
            height: 100%;
            padding-top: 80px;
          }

          .build_drone .social-box {
            width: 90%;
          }

          .drone_parts .row h2 {
            font-size: 30px;
            white-space: nowrap;
          }
          .drone_parts .social-box {
            width: 50%;
          }
      `}</style>
    </Layout>
  )
}
