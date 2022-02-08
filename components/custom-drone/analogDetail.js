import React from 'react'
import ReactLoading from 'react-loading'
import { itemInCart, itemTypeCart } from '../../context/searchContext'
import InputForm from './parts/inputForm'
import SideCart from './parts/sideCart'
import { formatter } from '../../_helpers/formatter'

export default function AnalogDetail({
  categories,
  hdOrAnalog,
  droneType,
  result,
  handleSelect,
  cartItems,
  battery,
  total,
  removeResult,
  onchange,
  loading,
  prevPage,
  nextPage,
}) {
  return (
    <>
      <div page-title="Analog_detail">
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
                  // disabled={hdOrAnalog === ''}
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
            <div className="part_modal w-100 input-form">
              <div className="content">
                <span className="part_caption text-white d-block">
                  Would you like to fly in HD or Analog?
                </span>
                <form
                  className={
                    hdOrAnalog !== ''
                      ? 'drone_catagory label_outline  d-flex outline_sm'
                      : 'drone_catagory label_outline  d-flex'
                  }
                >
                  <input
                    type="radio"
                    name="fly"
                    id="hd"
                    value="HD"
                    onChange={onchange}
                    checked={hdOrAnalog === 'HD'}
                  />
                  <label htmlFor="hd">
                    <h2
                      className="text-white"
                      style={{
                        fontSize: hdOrAnalog !== '' ? '20px' : '30px',
                      }}
                    >
                      HD
                    </h2>
                    <div className="title text-white d-flex align-items-center">
                      <div className="option flex-center">A</div>
                    </div>
                  </label>
                  <input
                    type="radio"
                    name="fly"
                    id="analog"
                    value="Analog"
                    checked={hdOrAnalog === 'Analog'}
                    onChange={onchange}
                  />
                  <label htmlFor="analog">
                    <h2
                      className="text-white"
                      style={{
                        fontSize: hdOrAnalog !== '' ? '20px' : '30px',
                      }}
                    >
                      ANALOG
                    </h2>
                    <div className="title text-white d-flex align-items-center">
                      <div className="option flex-center">B</div>
                    </div>
                  </label>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex right_content p-0 m-0">
            <div className="content">
              <div className="main_content">
                <h2 className="heading">
                  Let’s build your dream <br />
                  <span className="text-blue fw-bold">{droneType}</span> drone
                </h2>
                {SideCart(cartItems, removeResult)}
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
