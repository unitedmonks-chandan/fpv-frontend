import React from 'react'

const HomeHeaderSection = () => {
  return (
    <div>
      <div className="header_section header section position-relative">
        <div className="cash_back">
          <img src="/img/cashback_badge.png" className="img-fluid" alt="img" />
        </div>
        <div className="container-fluid">
          <div className="content">
            <div className="row">
              <div className="col-lg-5">
                <div className="text-content">
                  <h1 className="hero_title">
                    Shop For Handmade & Custom
                    <span className="text-outline d-block">Drone</span>
                  </h1>
                  <p className="hero_para text-white">
                    Check our interactive drone builder and find the best
                    compatiable parts.{' '}
                  </p>
                  <a href="#" className="btn bg_white shadow">
                    LET’S GET STARTED
                  </a>
                </div>
              </div>
              <div className="col-lg-7 p-0 ps-lg-5">
                <div className="video h-100">
                  <video
                    autoPlay={true}
                    muted=""
                    loop=""
                    id="header_video"
                    className="h-100"
                  >
                    <source src="img/demo_video.mp4" type="video/mp4" />
                    {/* <!-- <source src="img/landing 2.ogg" type="video/ogg"> --> */}
                    {/* <!-- <source src="img/landing 2.webm" type="video/webm"> --> */}
                    Your browser does not support HTML5 video.
                  </video>
                </div>
              </div>
            </div>
            <a href="#" className="arrow_down flex-center">
              <i className="fas fa-chevron-down"></i>
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .cash_back {
          position: absolute;
          right: 0;
          top: 34px;
          z-index: 9;
        }
        .header_section {
          overflow: hidden;
        }

        .header_section .text-content {
          padding: 250px 0 140px;
          padding-left: 105px;
        }
        video {
          object-fit: cover;
        }
        .header_section::before,
        .header_section::after {
          width: 50%;
        }
        .header_section::after {
          background-image: url(../img/header_bg.png);
          background-size: 100% auto;
          display: none;
        }
        .header_section video {
          width: 100%;
        }
        .cash_back {
          position: absolute;
          right: 0;
          top: 34px;
          z-index: 9;
        }
        .header_section::before {
          background: linear-gradient(
            129.96deg,
            #1562b6 15.93%,
            #3b18c6 90.61%
          );
        }
        .header_section::after {
          background-color: #fff;
        }
        .header_section .hero_title {
          font-size: 70px;
          line-height: 70px;
          font-weight: 600;
          color: #fff;
          margin: 0;
        }
        .header_section .hero_para {
          margin: 25px 0;
          font-size: 20px;
          font-weight: 400;
        }
        .header_section .btn {
          padding: 19px 36px;
          color: #1562b6;
          border-radius: 5px;
          background-color: #fff;
        }
        .header_section .btn:hover {
          box-shadow: 0 2rem 2rem rgba(0, 0, 0, 0.15) !important;
        }
        .header_section .arrow_down {
          margin: 55px auto 0;
          font-size: 22px;
          width: 77px;
          height: 77px;
          border-radius: 50%;
          background-color: rgba(225, 225, 225, 8%);
          color: #fff;
          transition: all 0.5s;
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
        }
        .header_section .arrow_down::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          z-index: 1;
          background-color: rgba(255, 255, 255, 0.1);
          transition: all 0.3s;
        }
        .header_section .arrow_down:hover::before {
          opacity: 0;
          transform: scale(0.5, 0.5);
        }
      `}</style>
    </div>
  )
}

export default HomeHeaderSection
