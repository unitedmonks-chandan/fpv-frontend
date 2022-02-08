import React from 'react'
import ReactLoading from 'react-loading'
import InputForm from './parts/inputForm'
import ResultComponent from './parts/resultComponent'
import SideCart from './parts/sideCart'
import { itemInCart, itemTypeCart } from '../../context/searchContext'
import { formatter } from '../../_helpers/formatter'

export default function Propellers({
  propeller,
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
  page,
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
                  // disabled={!itemTypeCart('Propeller', cartItems)}
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
            <div className="part_modal w-100 input-form">
              <div className="content">
                <span className="part_caption text-white d-block">
                  What kind of props you thinking?
                </span>
                {InputForm(
                  'propeller',
                  categories,
                  propeller,
                  result,
                  onchange
                )}

                <div style={{ display: loading ? '' : 'none' }}>
                  <ReactLoading
                    type="bubbles"
                    color="white"
                    height={'10%'}
                    width={'10%'}
                  />
                </div>
                <div className="find_product text-white">
                  {result.length > 0 ? (
                    ResultComponent(
                      'Propeller',
                      result,
                      handleSelect,
                      cartItems
                    )
                  ) :null}
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
    </>
  )
}
