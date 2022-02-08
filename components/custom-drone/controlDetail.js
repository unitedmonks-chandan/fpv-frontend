import React from 'react'

import { itemInCart, itemTypeCart } from '../../context/searchContext'
import InputForm from './parts/inputForm'
import ResultComponent from './parts/resultComponent'
import SideCart from './parts/sideCart'

import { formatter } from '../../_helpers/formatter'

export default function controlDetail({
  droneType,
  software,
  cartItems,
  total,
  onchange,
  prevPage,
  nextPage,
}) {
  return (
    <>
      <div page-title="Control_detail">
        <div className="row bg-warning">
          <div className="col-lg-9 bg-blue-grad d-flex  left_content p-0 m-0 position-relative">
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
                  disabled={software === ''}
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
            <div className="part_modal w-100 input-form">
              <div className="content">
                <span className="part_caption text-white d-block">
                  What type of flight control system would you like?
                </span>
                {/* <form
                  className={
                    software !== ''
                      ? 'drone_catagory label_outline d-flex outline_sm'
                      : 'drone_catagory label_outline d-flex'
                  }
                > */}
                <form className="drone_catagory label_outline d-flex">
                  <input
                    type="radio"
                    name="flight"
                    id="bita_2"
                    value="Betaflight"
                    checked={software === 'Betaflight'}
                    onChange={onchange}
                  />
                  <label htmlFor="bita_2">
                    <h2
                      className="text-white"
                      style={{ fontSize: software !== '' ? '20px' : '30px' }}
                    >
                      Betaflight
                    </h2>
                    <div className="title text-white d-flex align-items-center">
                      <div className="option flex-center">A</div>
                    </div>
                  </label>
                  <input type="radio" name="flight" id="kiss" />
                  <label htmlFor="kiss" className="coming-soon">
                    <h2 className="offwhite coming-soon-title">KISS</h2>
                    <p className="custom-border offwhite px14">COMING SOON</p>
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
