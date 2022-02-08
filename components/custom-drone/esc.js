export default function ESC({ onchange, droneType }) {
  return (
    <>
      <div page-title="Control">
        <div className="row bg-warning">
          <div className="col-lg-9 bg-blue-grad d-flex align-items-center left_content p-0 m-0 position-relative">
            <div className="part_modal w-100">
              <div className="content">
                <span className="part_caption text-white d-block">
                  What type of ESCs would you like?
                </span>
                <form className="drone_catagory label_outline d-flex flex-wrap">
                  <input
                    type="radio"
                    name="control"
                    id="Stack"
                    value="Stack"
                    onChange={onchange}
                  />
                  <label htmlFor="Stack">
                    <h2 className="text-white">Stack</h2>
                    <div className="title text-white d-flex align-items-center">
                      <div className="option flex-center">A</div>
                    </div>
                  </label>
                  <input
                    type="radio"
                    name="control"
                    id="Individual"
                    value="Individual"
                    onChange={onchange}
                  />
                  <label htmlFor="Individual">
                    <h2 className="text-white">Individual</h2>
                    <div className="title text-white d-flex align-items-center">
                      <div className="option flex-center">B</div>
                    </div>
                  </label>
                  <input
                    type="radio"
                    name="control"
                    id="16x"
                    value="16x"
                    onChange={onchange}
                  />
                  <label htmlFor="16x">
                    <h2 className="text-white">16x16</h2>
                    <div className="title text-white d-flex align-items-center">
                      <div className="option flex-center">A</div>
                    </div>
                  </label>
                  <input
                    type="radio"
                    name="control"
                    id="20x"
                    value="20x"
                    onChange={onchange}
                  />
                  <label htmlFor="20x">
                    <h2 className="text-white">20x20</h2>
                    <div className="title text-white d-flex align-items-center">
                      <div className="option flex-center">A</div>
                    </div>
                  </label>
                  <input
                    type="radio"
                    name="control"
                    id="30x"
                    value="30x"
                    onChange={onchange}
                  />
                  <label htmlFor="30x">
                    <h2 className="text-white">30x30</h2>
                    <div className="title text-white d-flex align-items-center">
                      <div className="option flex-center">A</div>
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
                <div className="product_checkout d-flex align-items-center">
                  <div className="div">
                    <h4 className="name">
                      Battery <span className="text-blue">4x</span>
                    </h4>
                    <p className="product_des">
                      Auline SONY VTC5A 18650 2600mAh 6S1P 22.2V Li-ion Battery
                      14673
                    </p>
                    <h3 className="price m-0">$272.66 </h3>
                  </div>
                  <a href="#" className="btn">
                    BUY NOW
                  </a>
                </div>
                {/* <!-- 2 --> */}
                <div className="product_checkout d-flex align-items-center">
                  <div className="div">
                    <h4 className="name">VTX</h4>
                    <p className="product_des">
                      Auline SONY VTC5A 18650 2600mAh 6S1P 22.2V Li-ion Battery
                      14673
                    </p>
                    <h3 className="price m-0">$272.66 </h3>
                  </div>
                  <a href="#" className="btn">
                    BUY NOW
                  </a>
                </div>
                {/* <!-- 3 --> */}
                <div className="product_checkout d-flex align-items-center">
                  <div className="div">
                    <h4 className="name">Motors</h4>
                    <p className="product_des">
                      Auline SONY VTC5A 18650 2600mAh 6S1P 22.2V Li-ion Battery
                      14673
                    </p>
                    <h3 className="price m-0">$272.66 </h3>
                  </div>
                  <a href="#" className="btn">
                    BUY NOW
                  </a>
                </div>
              </div>
              <div className="total_price bg-blue-grad d-flex justify-content-between align-items-center">
                <h3 className="m-0">TOTAl</h3>
                <h3 className="m-0">$366</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
