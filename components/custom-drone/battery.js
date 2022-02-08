import React from 'react'
import ReactLoading from 'react-loading'
import { itemInCart, itemTypeCart } from '../../context/searchContext'
import InputForm from './parts/inputForm'
import ResultComponent from './parts/resultComponent'
import SideCart from './parts/sideCart'

export default function BatteryResults({
  categories,
  battery,
  result,
  droneType,
  handleSelect,
  cartItems,
  total,
  onchange,
  loading,
  prevPage,
  nextPage,
}) {
  const formatter = new Intl.NumberFormat('en-US', {
    // style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  })

  return (
    <>
      <div page-title="battery_detail">
        <div className="row bg-warning">
          <div className="col-lg-9 bg-blue-grad d-flex left_content p-0 m-0 position-relative flex-wrap">
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
                  disabled={!battery}
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
            <div className="part_modal w-100 input-form">
              <div className="content">
                <span className="part_caption text-white d-block">
                  What type of battery cell configuration?
                </span>
                {InputForm('battery', categories, battery, result, onchange)}
                <div style={{ display: loading ? '' : 'none' }}>
                  <ReactLoading
                    type="bubbles"
                    color="white"
                    height={'10%'}
                    width={'10%'}
                  />
                </div>

                <div className="find_product text-white">
                  <div
                    style={{
                      display: result && result.length > 0 ? '' : 'none',
                    }}
                  >
                    {ResultComponent(
                      'Battery',
                      result,
                      handleSelect,
                      cartItems
                    )}
                  </div>
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
