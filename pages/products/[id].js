import React, { useEffect, useState } from 'react'
import { withRouter, useRouter } from 'next/router'
import { singleProduct } from '../../libs/products'
import Layout from '../../components/layouts/layout'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import StarRatings from 'react-star-ratings'
import { formatter } from '../../_helpers/formatter'

SwiperCore.use([Navigation])
import BlockUi from 'react-block-ui'
import 'react-block-ui/style.css'

const ProductDetail = () => {
  const router = useRouter()
  const { id } = router.query
  const [loading, setLoading] = useState(false)
  const [product, setProduct] = useState({})
  const [productName, setProductName] = useState('')
  const [productDescription, setProductDesciption] = useState('')
  const [productCategory, setProductCategory] = useState({})
  const [productSubCategory, setPorductSubCategory] = useState([])
  const [productMerchant, setProductMerchant] = useState([])
  const [productSpecifications, setProductSpecifications] = useState([])
  const [productRating, setProductRating] = useState(0)
  const [productImages, setProductImages] = useState([])

  useEffect(() => {
    setLoading(true)
    singleProduct(id).then((res) => {
      res && setProduct(res)
      res && setProductName(res.name)
      res && setProductDesciption(res.description)
      res && setProductCategory(res.category)
      res && setPorductSubCategory(res.subcategory)
      res && setProductMerchant(res.merchant)
      res && setProductSpecifications(res.specifications)
      res && setProductRating(res.rating)
      res.images &&
        res.featuredImage &&
        setProductImages([...res.images, res.featuredImage])
      setLoading(false)
    })
  }, [id])

  return (
    <>
      <Layout>
        <BlockUi tag="div" blocking={loading}>
          <div className="product_header header text-center text-white">
            <h1 className="hero_title">Products Details</h1>
          </div>
          <div className="product_detail_main">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="swiper mySwiper position-relative">
                    <div className="swiper-wrapper">
                      <Swiper slidesPerView={1} navigation={true} loop={true}>
                        {product && productImages.length > 0 ? (
                          productImages?.map((item, key) => (
                            <SwiperSlide key={key}>
                              <img
                                src={item.url}
                                className="img-fluid"
                                alt="product"
                              />
                            </SwiperSlide>
                          ))
                        ) : (
                          <SwiperSlide>
                            <img
                              src="/img/no-img.png"
                              alt="product"
                              style={{ width: '60px', height: '60px' }}
                              className="img-fluid"
                            />
                          </SwiperSlide>
                        )}
                      </Swiper>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="detail_content">
                    <h2 className="product_title">{productName}</h2>
                    <div className="reviews d-flex align-items-center">
                      <div className="my-rating readOnly me-2">
                        {productRating > 0 && (
                          <StarRatings
                            rating={productRating}
                            starDimension="25px"
                            starRatedColor="blue"
                            numberOfStars={5}
                            name="rating"
                          />
                        )}
                        {productRating === 0 && (
                          <StarRatings
                            rating={0}
                            starDimension="25px"
                            starRatedColor="blue"
                            numberOfStars={5}
                            name="rating"
                          />
                        )}
                      </div>
                      <span className="rating">
                        ( {product.rating} Average Rating)
                      </span>
                    </div>
                    <div className="product_table">
                      <div className="header d-flex">
                        <div className="col col_1 text-start">
                          <h3>Merchant</h3>
                        </div>
                        <div className="col col_2"></div>
                        <div className="col col_3">
                          <h3>Availabity</h3>
                        </div>
                        <div className="col col_4">
                          <h3>Price</h3>
                        </div>
                        <div className="col col_5"></div>
                      </div>

                      {productMerchant &&
                        productMerchant?.map((item, key) => (
                          <div
                            className="product_detail d-flex flex-column align-items-center"
                            key={key}
                          >
                            <div className="d-flex w-100 align-items-center">
                              <div className="col col_1 text-start">
                                <img
                                  src={item.name.logo.url}
                                  alt={productName}
                                  style={{ height: '30px', width: 'auto' }}
                                />
                              </div>
                              <div className="col col_1"></div>
                              <div className="col col_2">
                                <h3>{item.available ? 'Yes' : 'No'} </h3>
                              </div>
                              <div className="col col_4">
                                <h2 className="price m-0 text-blue">
                                  $ {formatter.format(item.price)}
                                </h2>
                                {/* <span className="caption m-0">
                                COMPARE PRICES
                              </span> */}
                              </div>
                              <div className="col col_5 d-flex justify-content-between align-items-center">
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href={item.affiliateLink}
                                  className="buy_now btn-blue-grad"
                                >
                                  BUY NOW
                                </a>
                                {/* <a href="#" className="close_box text-dark">
                                <i className="fas fa-times"></i>
                              </a> */}
                              </div>
                            </div>
                            <a
                              href="#"
                              className="buy_now btn-blue-grad text-center d-block d-sm-none mt-2 w-100 ms-0"
                            >
                              BUY NOW
                            </a>
                          </div>
                        ))}
                    </div>
                    <div className="text-content">
                      <h2 className="heading">DESCRIPTION</h2>
                      <p className="paragraph">{productDescription}</p>
                    </div>
                    <div className="text-content">
                      <h2 className="heading">CATEGORY</h2>
                      <p className="paragraph">
                        {productCategory.name && productCategory.name.name}
                        {/* {JSON.stringify(productCategory.name.name)} */}
                      </p>
                    </div>
                    <div className="text-content">
                      <h2 className="heading">SUB CATEGORY</h2>
                      {productSubCategory &&
                        productSubCategory.map((item, key) => (
                          <p className="paragraph" key={key}>
                            {item}
                          </p>
                        ))}
                    </div>
                    <div className="text-content">
                      <h2 className="heading">SPECIFICATION</h2>
                      <div className="specification">
                        {productSpecifications &&
                          productSpecifications?.map((item, key) => (
                            <div
                              className="spec_row d-flex align-items-center row"
                              key={key}
                            >
                              <p className="col-3">{item.name}</p>
                              <p className="col-9">{item.value}</p>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BlockUi>
      </Layout>
    </>
  )
}
export default withRouter(ProductDetail)
