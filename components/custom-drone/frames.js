import React from 'react'
import ReactLoading from 'react-loading'
import InputForm from './parts/inputForm'
import ResultComponent from './parts/resultComponent'
import SideCart from './parts/sideCart'
import { itemTypeCart } from '../../context/searchContext'

import { formatter } from '../../_helpers/formatter'

export default function Frames({
  frame,
  droneType,
  result,
  handleSelect,
  cartItems,
  categories,
  total,
  onchange,
  loading,
  prevPage,
  nextPage,
}) {
  return (
    <>
      <div page-title="Control">
        <div className="row bg-warning">
          <div className="col-lg-9 bg-blue-grad d-flex left_content p-0 m-0 position-relative">
            <div
              className="swiper_btns btn-group"
              role="group"
              aria-label="Basic example"
            >
              <div
                className="swiper_btns btn-group"
                role="group"
                aria-label="Basic example"
              >
                <button
                  type="button"
                  className="swiper_btn btn_next btn"
                  onClick={prevPage}
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button
                  type="button"
                  className="swiper_btn btn_prev btn"
                  onClick={nextPage}
                  disabled={!itemTypeCart('Frame', cartItems)}
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
            <div className="part_modal w-100 input-form">
              <div className="content">
                <span className="part_caption text-white d-block">
                  Select a Frame
                </span>
                {InputForm('frame', categories, frame, result, onchange)}
                {/* {InputForm('frame', categories, frame, result, onchange)} */}

                <div style={{ display: loading ? '' : 'none' }}>
                  <ReactLoading
                    type="bubbles"
                    color="white"
                    height={'10%'}
                    width={'10%'}
                  />
                </div>
                <div className="find_product text-white">
                  {/* <div className="header d-flex justify-content-between">
                    <div className="column_1"></div>
                    <div className="column_2">
                      <h4 className="title">Price</h4>
                    </div>
                    <div className="column_3">
                      <h4 className="title">Where</h4>
                    </div>
                    <div className="column_4"></div>
                  </div> */}
                  {result.length > 0 &&
                    ResultComponent('Frame', result, handleSelect, cartItems)}
                  {/* {droneType !== '' && result.length === 0 && (
                    <h5 style={{ color: '#FFF' }}>No parts to display!</h5>
                  )} */}

                  {/* {frame !== '' && result.length === 0 ? (
                    <div className="error">
                      <h3 className="mb-20 px20">NO PRODUCTS AVAILABLE </h3>
                      <div className="error-img">
                        <img
                          className="drone_icon error_icon"
                          src="img/drone_icon.png"
                          alt="error-img"
                        />
                        <img
                          className="cancel_icon error_icon"
                          src="img/error_icon.png"
                          alt="error-img"
                        />
                      </div>
                    </div>
                  ) : null} */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex right_content p-0 m-0">
            <div className="content">
              <div className="main_content">
                <h2 className="heading">
                  Let’s build your dream
                  <br />
                  <span className="text-blue fw-bold">{droneType}</span> drone
                </h2>
                {SideCart(cartItems)}
              </div>
              <div className="total_price bg-blue-grad d-flex justify-content-between align-items-center">
                <h3 className="m-0">TOTAL</h3>
                <h3 className="m-0">
                  $ {total ? formatter.format(total) : '0.00'}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .error {
            background: rgba(255, 255, 255, 0.6);
            text-align: center;
            padding: 30px;
            margin-left: 100px;
            margin-right: 80px;
          }
          .error-img {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .drone_icon {
            position: absolute;
          }
          .cancel_icon {
            margin-left: 4px;
          }
        `}
      </style>
    </>
  )
}
