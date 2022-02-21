import React from 'react'
import Image from 'next/image'

export default function DroneCard({key}){
  return(
    <>
    <div className="col-xl-6" key={key}>
               <div className="drone_info_box section bg_lightgrey">
              <div className="drone_section position-relative">
                <div className="content">
                  <div className="row align-items-center">
                   <div className="col-lg-6 col-img">
                     <div className="img">
                      <Image src="/img/drone_2.png" alt="drone" width={100} height={100} layout="responsive"/>
         </div>
       </div>
        <div className="col-lg-6">
            <div className="drone_info">
                <span className="caption">RACING DRONE</span>
                <h2 className="name">Quadron Controller Combo Copter</h2>
             <div className="drone_features">
                  <div className="row">
                    <div className="col-6 d-flex align-items-center">
                      <Image src="/img/setting_icon.png" alt="icon" width={34} height={34}/>
                       <div className="drone-text">
                     <h4>Flight time</h4>
                       <p>16 min</p>
           </div>
         </div>
            <div className="col-6 d-flex align-items-center">
                      <Image src="/img/transmission_icon.png" alt="icon" width={70} height={70} />
                                          <div className="drone-text">
                      <h4>Transmission Distance</h4>
                      <p>1.2 ml (2 km)</p>
              </div>
            </div>
                 <div className="col-6 d-flex align-items-center">
                    <Image src="/img/camera_icon.png" alt="icon" width={34} height={34} />
                   <div className="drone-text">
                      <h4>Effective Pixels</h4>
                         <p>1.2 mp</p>
                                                 </div>
                                                </div>
                 <div className="col-6 d-flex align-items-center">
                      <Image src="/img/vps_icon.png" alt="icon" width={34} height={34} />
                     <div className="drone-text">
                      <h4>VPS range</h4>
                       <p>30 m</p>
                </div>
              </div>
            </div>
          </div>
      <a href="#" className="link view_detail">VIEW DETAILS <i className="fas fa-long-arrow-alt-right"></i></a>
                 </div>
               </div>
             </div>
           </div>
          </div>
        </div>
        </div>
    <style jsx>{`
 .drone_info_box{padding: 0; margin-top: 60px;}
.drone_section{padding: 20px; background: white; margin-bottom: 0;}
.drone_section::after{display: none;}
.drone_section .img{position:relative; height:100%; width:100%;}
.drone_section .name{font-size: 25px; margin: 9px 0;}
.drone_info .view_detail{font-size: 16px;}
.drone_section .drone_info{padding-top: 3px; padding-left: 0; padding-bottom: 5px;}
 .drone_info .drone_features .row > div{margin-top: 15px;}
 .drone_info .drone_features h4{font-size: 14px;}
 .drone_info .drone_features p{font-size: 15px;}
 .drone_info .drone_features .drone-text{margin-left:22px;}
 .col-img{padding: 0;}
`}</style>
    </>
  )
}