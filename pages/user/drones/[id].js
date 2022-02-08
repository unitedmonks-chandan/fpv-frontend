import React, { useEffect, useState, useRef } from 'react'
import Layout from '../../../components/layouts/layout'
import { withRouter } from 'next/router'
import { findSavedDrone } from '../../../libs/drone'
import { formatter } from '../../../_helpers/formatter'
import Link from 'next/link'
import ReactTooltip from 'react-tooltip'
import Image from 'next/image'
import BlockUi from 'react-block-ui'
import 'react-block-ui/style.css'

import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from 'react-share'

export async function getServerSideProps({ query }) {
  const { id } = query
  const data = await findSavedDrone(id)
  return {
    props: {
      data,
    },
  }
}

const PartList = ({ data }) => {
  const { drone } = data
  const [loading, setLoading] = useState(false)
  const [prices, setPrices] = useState([])
  const [info, setInfo] = useState('Copy link to clipboard')

  useEffect(() => {
    if (!data) {
      return setLoading(true)
    }
  }, [data])

  const url = ''
  if (typeof window !== 'undefined') {
    url = window.location.href
  }
  const textAreaRef = useRef(null)

  function copyToClipboard(e) {
    e.preventDefault()
    textAreaRef.current.select()
    navigator.clipboard.writeText(textAreaRef.current.value)
    setInfo('Link copied successfully!')
    setTimeout(() => setInfo('Copy link to clipboard.'), 1500)
  }

  const sumItems = (prices) =>
    prices.length > 0 ? prices.reduce((total, item) => total + item, 0) : 0

  useEffect(() => {
    drone.products?.map((product) =>
      product.merchant?.map(
        (item) => item.mainMerchant && setPrices((old) => [...old, item.price])
      )
    )
  }, [drone])

  return (
    <Layout>
      <BlockUi tag="div" blocking={loading}>
        <main className="build_drone drone_parts header container-fluid bg-grey">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <p className="blue text-uppercase drone-type">
                  {drone.droneType}
                </p>
                <h2 className="heading px40 m-0">{drone.name}</h2>
              </div>
              <div className="col-lg-6 drone-social d-flex justify-content-end">
                <div className="social-box mt-40 d-flex align-items-center">
                  <p className="px18 m-0">Share</p>
                  <FacebookShareButton url={url}>
                    <a
                      href="#"
                      className="social-icon base-icon facebook-icon ml-20"
                    >
                      <i className="fab fa-facebook-f fa-lg grey"></i>
                    </a>
                  </FacebookShareButton>
                  <EmailShareButton url={url}>
                    <a href="#" className="social-icon base-icon ml-10">
                      <i className="far fa-envelope fa-lg grey"></i>
                    </a>
                  </EmailShareButton>
                  <TwitterShareButton url={url}>
                    <a
                      href="#"
                      className="social-icon base-icon twitter-icon ml-10"
                    >
                      <i className="fab fa-twitter fa-lg grey"></i>
                    </a>
                  </TwitterShareButton>
                  <a
                    href="#"
                    className="social-icon base-icon ig-icon ml-10"
                    data-tip
                    data-for="getContent"
                    onClick={(e) => copyToClipboard(e)}
                  >
                    <i className="fas fa-clipboard fa-lg grey"></i>
                    <input type="hidden" value={url} ref={textAreaRef} />
                    <ReactTooltip
                      id="getContent"
                      place="top"
                      type="dark"
                      effect="solid"
                      getContent={() => info}
                      className="tool"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="browse_product_main mt-20">
              <div className="container browse-container">
                <div className="content">
                  <div className="find_product m-0">
                    <p className="drone-p font-weight-bold">Part List</p>
                    {drone.products?.map((product, key) => (
                      <div className="d-flex" key={key}>
                        <div className="product_icon bg-blue-grad flex-cente">
                          <Image
                            src={`/product_icons/${product.category.name.name.toUpperCase()}.png`}
                            width={35}
                            height={35}
                            alt="icon"
                          />
                          <h3 className="name" style={{ margin: '3px' }}>
                            {product.category.name.name}
                          </h3>
                        </div>
                        <div className="product_detail w-100 border-1 text-center d-flex align-items-center">
                          <div className="column_1 d-flex align-items-center">
                            <img
                              width={'50x'}
                              src={product.featuredImage?.url}
                              alt={product.featuredImage && product.name}
                            />
                            <Link href={`/products/${product._id}`}>
                              <a>
                                <p className="title m-0 text-dark">
                                  {product.name}
                                </p>
                              </a>
                            </Link>
                          </div>
                          {product.merchant?.map(
                            (item, key) =>
                              item.mainMerchant === true && (
                                <div className="column_2" key={key}>
                                  <h2 className="price m-0 text-blue">
                                    $ {formatter.format(item.price)}
                                  </h2>
                                </div>
                              )
                          )}
                          {product.merchant?.map(
                            (item, key) =>
                              item.mainMerchant === true && (
                                <div
                                  className="column_4 d-flex justify-content-end align-items-center"
                                  key={key}
                                >
                                  <a
                                    href={item.affiliateLink}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="buy_now bg-blue-grad text-white"
                                  >
                                    BUY NOW
                                  </a>
                                </div>
                              )
                          )}
                        </div>
                      </div>
                    ))}

                    <div className="d-flex">
                      <div className="bg-blue-grad product_detail w-100 text-center d-flex align-items-center">
                        <div className="column_1_total d-flex justify-content-end align-items-center">
                          <p className="title m-0 text-white text-uppercase">
                            Total
                          </p>
                        </div>
                        <div className="column_2_total text-white">
                          <h2 className="price m-0">
                            $ {formatter.format(sumItems(prices))}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <style jsx>{`
          .browse_product_main {
            background-color: #f0f1f2;
            padding: 80px 0;
          }
          .text-dark {
            color: #000 !important;
          }
          .browse_product_main .find_product .product_detail {
            background-color: #fff;
          }
          .browse_product_main .product_icon {
            width: 88px;
            height: 88px;
            border-radius: 3px;
            margin-right: 13px;
            padding-top: 15px;
            text-align: center;
          }
          .browse_product_main .product_icon .name {
            font-size: 11px;
            font-weight: 600;
            color: #fff;
            margin-top: 6px;
          }
          .browse_product_main .header .title {
            padding-left: 30px;
          }
          .browse_product_main .product_detail {
            height: 88px;
          }
          .browse_product_main .find_product .caption {
            font-weight: 500;
          }

          //  .build-drone css

          .build_drone {
            min-height: 100vh;
            height: auto;
          }

          .build_drone .bg-white {
            background: white;
          }
          .build_drone.bg-grey {
            background: #f0f1f2;
          }
          .build_drone .browse_product_main {
            padding: 0;
          }
          .build_drone .browse_product_main .column_1 {
            width: 75%;
          }
          .build_drone .browse_product_main .column_2 {
            width: 12.5%;
          }
          .build_drone .browse_product_main .column_4 {
            width: 12.5%;
          }
          .build_drone .browse_product_main .column_1_total {
            width: 76%;
            margin-right: 10px;
          }
          .build_drone .browse_product_main .column_2_total {
            width: 12%;
          }
          .build_drone .browse_product_main .column_4_total {
            width: 12%;
          }
          .build_drone .browse_product_main .find_product .header {
            margin-top: 0;
          }
          .build_drone_right {
            height: 100vh;
          }

          .build_drone .social-box {
            border: 1px solid #cccccc;
            padding: 20px;
            margin: auto 20px;
          }
          .build_drone .google-login {
            height: 50px;
            border: 1px solid #cccccc;
            display: flex;
            align-items: center;
          }
          .build_drone .google-login:hover .google-text {
            font-size: 13px;
          }
          .build_drone .google-icon {
            border-right: 1px solid #cccccc;
            padding: 10px;
          }
          .build_drone .google-text {
            color: #c4c4c4;
            margin-bottom: 0;
            margin: auto auto;
            transition: 0.1s ease all;
          }
          .build_drone .social-icon {
            border-radius: 100%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .build_drone .base-icon {
            border: 1px solid #c4c4c4;
            width: 40px;
            height: 40px;
          }
          .build_drone .base-icon:hover {
            border: none;
            background: #c4c4c4;
          }
          .build_drone .facebook-icon:hover {
            background: #1562b6;
          }
          .build_drone .twitter-icon:hover {
            background: #1da1f2;
          }
          .build_drone .ig-icon:hover {
            background: #e1306c;
          }
          .build_drone .base-icon:hover i {
            color: white;
          }

          .build_drone .name-form {
            border: 1px solid #cccccc;
            outline: none;
            padding: 10px;
            width: 100%;
          }
          .build_drone .name-form::placeholder {
            color: #c4c4c4;
          }
          .build_drone .btn-submit {
            width: 100%;
            padding: 10px;
            color: white;
            text-transform: uppercase;
            outline: none;
            border: none;
            border-radius: 5px;
          }

          .drone_parts {
            padding-top: 60px;
            padding-bottom: 60px;
          }
          .drone_parts .row .drone-p {
            margin: 40px 0 0;
          }
          .drone_parts .browse-container {
            padding: 0;
          }

          .drone_parts .social-box {
            width: auto;
            margin: auto 0;
          }
          .drone_parts .drone-type {
            font-weight: 500;
            margin-bottom: 0;
          }
          .tool {
            background: #242424;
            color: white;
          }
        `}</style>
      </BlockUi>
    </Layout>
  )
}

export default withRouter(PartList)
