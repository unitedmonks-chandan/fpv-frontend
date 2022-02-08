import React from 'react'

export default function DroneType({ droneType, onchange, page, nextPage }) {
  return (
    <>
      <div page-title="type of drone">
        <div className="row bg-warning">
          <div className="col-lg-9 bg-blue-grad d-flex align-items-center left_content p-0 m-0 position-relative">
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
                  disabled={page === 1}
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button
                  type="button"
                  className="swiper_btn btn_prev btn"
                  onClick={nextPage}
                  disabled={droneType === ''}
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
            <div className="part_modal">
              <div className="content">
                <span className="part_caption text-white d-block">
                  What type of Drone you are looking for?
                </span>
                <form className="drone_catagory">
                  <input
                    type="radio"
                    name="catagory"
                    id="racing"
                    value="Racing"
                    onChange={onchange}
                    checked={droneType === 'Racing'}
                  />
                  <label htmlFor="racing">
                    <img src="/img/catagory_3.png" alt="catagory" />
                    <div className="title text-white d-flex align-items-center">
                      <div className="option flex-center">A</div>
                      <p className="name m-0">Racing Drone</p>
                    </div>
                  </label>
                  <input
                    type="radio"
                    name="catagory"
                    id="cinematic"
                    value="Cinewhoop"
                    onChange={onchange}
                    checked={droneType === 'Cinewhoop'}
                  />
                  <label htmlFor="cinematic">
                    <img src="/img/catagory_2.png" alt="catagory" />
                    <div className="title text-white d-flex align-items-center">
                      <div className="option flex-center">B</div>
                      <p className="name m-0">Cinematic Drone</p>
                    </div>
                  </label>
                  <input
                    type="radio"
                    name="catagory"
                    id="freestyle"
                    value="Freestyle"
                    onChange={onchange}
                    checked={droneType === 'Freestyle'}
                  />
                  <label htmlFor="freestyle">
                    <img src="/img/category_0.png" alt="catagory" />
                    <div className="title text-white d-flex align-items-center">
                      <div className="option flex-center">C</div>
                      <p className="name m-0">Freestyle Drone</p>
                    </div>
                  </label>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex align-items-center right_content p-0 m-0">
            <div className="content">
              <h2 className="heading">Let’s build your dream drone</h2>
              <p className="para m-0">
                Answer our questions and we will suggest the best compatable
                parts
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
