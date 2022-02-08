export default function Header() {
  return (
    <div
      className="header_section section position-relative"
      style={{ marginTop: '65px' }}
    >
      <div className="cash_back">
        <img src="/img/cashback_badge.png" className="img-fluid" alt="img" />
      </div>
      <div className="container">
        <div className="content">
          <div className="row">
            <div className="col-lg-5">
              <div className="text-content" style={{ marginTop: '-15em' }}>
                <h1 className="hero_title">
                  Building your Dream
                  <span className="text-outline d-block">Drone</span> Today?
                </h1>
                <p className="hero_para text-white">
                  Check our interactive drone builder and find the best
                  compatiable parts.
                </p>
                <a href="#" className="btn bg_white shadow">
                  LET’S GET STARTED
                </a>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="img">
                <img src="/img/drone_1.png" alt="drone" />
              </div>
            </div>
          </div>
          <a href="#" className="arrow_down flex-center">
            <i className="fas fa-chevron-down"></i>
            {/* <FontAwesomeIcon icon={faChevronDown} /> */}
          </a>
        </div>
      </div>
    </div>
  )
}
