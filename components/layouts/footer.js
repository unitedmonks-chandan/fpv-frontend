
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="content">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="box">
                <h2 className="section_title">
                  Connect <br />
                  with us
                  <span className="icon d-block">
                    <i className="fas fa-level-up-alt"></i>
                  </span>
                </h2>
                <div className="subscribe_newlatter">
                  <span className="caption">Subscribe to our newsletter</span>
                  <div className="input d-flex justify-content-between align-items-center">
                    <input type="email" />
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="box">
                <h3 className="head">MENU</h3>
                <div className="links">
                  <a href="#" className="link">
                    Drone Builder
                  </a>
                  <a href="#" className="link">
                    Completed Builds
                  </a>
                  <a href="#" className="link">
                    Browse Products
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="box">
                <h3 className="head">CATEGORY</h3>
                <div className="links">
                  <a href="#" className="link">
                    Racing Drone
                  </a>
                  <a href="#" className="link">
                    Cinematic Drone
                  </a>
                  <a href="#" className="link">
                    Freestyle Drone
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="box">
                <h3 className="head">COMPANY</h3>
                <div className="links">
                  <a href="#" className="link">
                    About
                  </a>
                  <a href="#" className="link">
                    Contact & Imprint
                  </a>
                  <a href="#" className="link">
                    Terms of Service
                  </a>
                  <a href="#" className="link">
                    User Code of Conduct
                  </a>
                  <a href="#" className="link">
                    Industry Code of Conduct
                  </a>
                  <a href="#" className="link">
                    Privacy Policy
                  </a>
                  <a href="#" className="link">
                    Affiliate Disclosure
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="socials d-flex align-items-center">
              <a href="#" className="social_link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social_link">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="social_link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social_link">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <p className="copyright_txt">
              ©2021 Drone, LLC. All rights reserved.{' '}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
