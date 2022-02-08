import React, { useEffect, useState } from 'react'
import { completedDrones } from '../../libs/drone'
import Link from 'next/link'

const HomeDroneOne = () => {
  const [drone, setDrone] = useState(null)
  useEffect(() => {
    async function getDrone() {
      let data = await completedDrones()
      let { drones } = data
      setDrone(drones[0])
    }
    getDrone()
  })
  return (
    drone && (
      <div className="drone_section position-relative">
        <div className="container">
          <div className="content">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="img">
                  <img src={drone.featureImage?.url} alt="drone" />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="drone_info">
                  <span className="caption">{drone.droneType} DRONE</span>
                  <h2 className="name">{drone.droneName}</h2>
                  <p className="des">{drone.description}</p>
                  <div className="drone_features">
                    <div className="row">
                      <div className="col-6 col-lg-12 col-xl-6 d-flex align-items-center">
                        <img
                          src="/img/setting_icon.png"
                          alt={drone.droneName}
                        />
                        <div>
                          <h4>Frame </h4>
                          <p>{drone.frameFeature}</p>
                        </div>
                      </div>
                      <div className="col-6 col-lg-12 col-xl-6 d-flex align-items-center">
                        <img src="/img/transmission_icon.png" alt="icon" />
                        <div>
                          <h4>Video Transmission</h4>
                          <p>{drone.videoTransmission}</p>
                        </div>
                      </div>
                      <div className="col-6 col-lg-12 col-xl-6 d-flex align-items-center">
                        <img src="/img/camera_icon.png" alt="icon" />
                        <div>
                          <h4>Cell Count</h4>
                          <p>{drone.cellCount}</p>
                        </div>
                      </div>
                      <div className="col-6 col-lg-12 col-xl-6 d-flex align-items-center">
                        <img src="/img/vps_icon.png" alt="icon" />
                        <div>
                          <h4>Motor</h4>
                          <p>{drone.motorFeature}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link href={`/completed-drone/${drone._id}`}>
                    <a className="link view_detail">
                      VIEW DETAILS
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default HomeDroneOne
