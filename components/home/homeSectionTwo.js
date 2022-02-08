import React from 'react'
import Link from 'next/link'

const HomeSectionTwo = () => {
  return (
    <div>
      <div className="section_2">
        <div className="container-fluid">
          <div className="content">
            <div className="row align-items-stretch">
              <div className="col-lg-8 p-0">
                <div className="video_section">
                  <video
                    autoPlay={true}
                    muted=""
                    className="h-100"
                    loop={true}
                    id="myVideo"
                  >
                    <source src="img/demo_video_2.mp4" type="video/mp4" />
                    {/* <!-- <source src="img/landing 2.ogg" type="video/ogg"> --> */}
                    {/* <!-- <source src="img/landing 2.webm" type="video/webm"> --> */}
                    Your browser does not support HTML5 video.
                  </video>
                </div>
              </div>
              <div className="col-lg-4 p-0">
                <div className="text_content">
                  <h2>Build your dream drone today?</h2>
                  <p className="para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque sapien velit, aliquet eget commodo nec, auctor a
                    sapien.
                  </p>
                  <Link href="/build-your-drone/">
                    <a className="btn btn-blue-grad d-block">
                      LET’S GET STARTED
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .how_it_works .section_title {
          font-size: 60px;
          color: #fff;
          font-weight: 600;
          padding-top: 9px;
          position: relative;
          text-align: center;
          margin-bottom: 35px;
        }
        .how_it_works .section_title::before {
          content: '';
          position: absolute;
          width: 70px;
          height: 5px;
          background-color: #3b18c6;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
        }
        .how_it_works .step {
          padding: 20px;
        }
        .how_it_works .head {
          font-size: 20px;
          margin: 14px 0 10px;
        }
        .drone_info_box {
          padding: 100px 0;
        }
        .section_title {
          font-size: 60px;
          padding-top: 13px;
          font-weight: 600;
          margin-bottom: 18px;
          position: relative;
        }
        .section_title::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 5px;
          width: 85px;
          background-color: #3b18c6;
        }
        .drone_info_box .para {
          color: #898989;
          line-height: 5px;
        }
        .drone_info_box .text-content {
          margin-bottom: 63px;
        }
        .drone_section {
          padding: 12px 0;
          margin-bottom: 100px;
        }
        .drone_section::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 65%;
          height: 100%;
          background-color: #fff;
          z-index: 0;
        }
        .drone_section.bg_blue_grad::after {
          left: 0;
          background: linear-gradient(104.6deg, #1562b6 0.99%, #3b18c6 92.86%);
        }
        .drone_section .drone_info {
          padding-top: 45px;
          padding-left: 40px;
        }
        .drone_section .caption {
          font-size: 16px;
          color: #3b18c6;
          font-weight: 600;
          text-transform: uppercase;
        }
        .drone_section.bg_blue_grad,
        .drone_section.bg_blue_grad a,
        .drone_section.bg_blue_grad span {
          color: #ffff !important;
        }
        .drone_section .name {
          font-size: 45px;
          font-weight: 600;
          margin: 9px 0 25px;
        }
        .drone_info {
          padding-bottom: 40px;
        }
        .drone_info .des {
          line-height: 120%;
          color: #898989;
        }
        .drone_section.bg_blue_grad .des {
          color: #cccccc;
        }
        .drone_info .drone_features .row > div {
          margin-top: 29px;
        }
        .drone_info .drone_features img {
          margin-right: 22px;
        }
        .drone_info .drone_features h4 {
          color: #777777;
          font-size: 16px;
          font-weight: 400;
          margin-bottom: 5px;
        }
        .bg_blue_grad .drone_features h4 {
          color: #cccccc;
        }
        .drone_info .drone_features p {
          font-size: 20px;
          font-weight: 500;
          color: #000;
          margin: 0;
        }
        .bg_blue_grad .drone_features p {
          color: #fff;
        }
        .drone_info .view_detail {
          display: block;
          margin-top: 45px;
          text-transform: uppercase;
          font-weight: 600;
          color: #3b18c6;
          font-size: 20px;
        }
        .drone_info .view_detail i {
          margin-left: 10px;
          transition: 0.2s;
        }
        .drone_info .view_detail:hover i {
          margin-left: 15px;
        }
        .section_2 .video_section {
          height: 512px;
        }
        .section_2 .text_content {
          background-color: #1f1f1f;
          color: #fff;
          padding: 85px;
          height: 100%;
        }
        .section_2 .text_content h2 {
          font-size: 70px;
          font-weight: 600;
          margin-bottom: 28px;
        }
        .section_2 .text_content p {
          font-size: 20px;
          color: #898989;
          margin-bottom: 130px;
        }
      `}</style>
    </div>
  )
}

export default HomeSectionTwo
