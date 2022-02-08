import React, { useEffect, useState, useContext } from 'react'
import { SearchContext } from '../../context/searchContext'
import { UserContext } from '../../context/userContext'
import { formatter } from '../../_helpers/formatter'
import GoogleAuth from '../../components/helpers/GoogleAuth'
import { saveDrone } from '../../libs/drone'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

const List = () => {
  const { cartItems, total, droneType } = useContext(SearchContext)
  const { user } = useContext(UserContext)
  const [name, setName] = useState('')
  const [products, setProducts] = useState([])
  const router = useRouter()

  useEffect(() => {
    let productsarray = []
    cartItems.map((item) => productsarray.push(item._id))
    setProducts(productsarray)
  }, [cartItems])

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    saveDrone(user._id, name, droneType, products).then((res) => {
      setName('')
      router.replace('/user/drones')
    })
  }

  return (
    <>
      <main className="build_drone header container-fluid bg-grey">
        <div className="row">
          <div className="col-xl-9 pt-80">
            <div className="container">
              <h2 className="heading px30">
                Let’s build your dream
                <span className="text-blue fw-bold"> {droneType} </span> drone
              </h2>

              <div className="browse_product_main mt-40">
                <div className="container browse-container">
                  <div className="content">
                    <div className="find_product text-white m-0">
                      {cartItems?.map((item, key) => (
                        <div className="d-flex" key={key}>
                          <div className="product_icon bg-blue-grad flex-cente">
                            <Image
                              src={`/product_icons/${item.productType.toUpperCase()}.png`}
                              alt="icon"
                              width={31}
                              height={32}
                            />

                            <h3 className="name">{item.productType}</h3>
                          </div>
                          <div className="product_detail w-100 border-1 text-center d-flex align-items-center">
                            <div className="column_1 d-flex align-items-center">
                              {item.image && (
                                <img
                                  src={item.image}
                                  alt={item.image && item.name}
                                  width="60px"
                                />
                              )}
                              <Link href={`/products/${item._id}`}>
                                <a>
                                  <p className="title m-0 text-dark">
                                    {item.name}
                                  </p>
                                </a>
                              </Link>
                            </div>
                            <div className="column_2">
                              <h2 className="price m-0 text-blue">
                                $ {formatter.format(item.price)}
                              </h2>
                            </div>
                            <div className="column_4 d-flex justify-content-end align-items-center">
                              <a
                                target="_blank"
                                href={item.affiliateLink}
                                rel="noreferrer noonenner"
                                className="buy_now bg-blue-grad text-white"
                              >
                                BUY NOW
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="find_product text-white m-0">
                      <div className="d-flex">
                        <div className=" bg-blue-grad product_detail w-100 text-center d-flex align-items-center">
                          <div className="column_1_total d-flex justify-content-end align-items-center">
                            <p className="title m-0 text-white text-uppercase">
                              Total
                            </p>
                          </div>
                          <div className="column_2_total text-white">
                            <h2 className="price m-0">
                              $ {formatter.format(total)}
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 pr-20 bg-white pt-80 build_drone_right">
            {user ? (
              <>
                <div className="social-box">
                  <h3 className="heading px30">
                    Welcome <br />
                    <span>{user.firstName + ' ' + user.lastName}</span>
                  </h3>
                  <p className="lh-1 px14 mt-20">
                    Save this custom drone and give it a name
                  </p>
                  <form action="" className="fpv-form">
                    <input
                      className="name-form"
                      type="text"
                      name="drone_name"
                      id="drone_name"
                      placeholder="Drone Name"
                      onChange={handleName}
                    />
                    <input
                      className="btn-submit bg-blue-grad mt-20"
                      type="submit"
                      value="Save"
                      onClick={(e) => handleSubmit(e)}
                    />
                  </form>
                </div>
              </>
            ) : (
              <div className="social-box">
                <h3 className="heading px30">Login or Register</h3>
                <p className="lh-1 px14 mt-20">
                  For express checkout, exciting offers & save this custom drone
                  into your account
                </p>
                <GoogleAuth />
              </div>
            )}
          </div>
        </div>
      </main>
      <style jsx>{`
        .build_drone {
          min-height: 100vh;
          height: 100%;
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
          min-height: 100vh;
          height: auto;
        }
        /*  .build_drone .fpv-part-text{width: 75%; padding-top: 5px;}
            .build_drone .fpv-part-price{text-align: center; padding-top: 5px; width: 12.5%;}
            .build_drone .fpv-part-buy{padding: 13px; border-radius: 5px;}
            .build_drone .fpv-part-buy h4{margin-bottom: 0;}
            .build_drone .fpv-part{padding: 15px; border-radius: 5px;} */

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
      `}</style>
    </>
  )
}

export default List
