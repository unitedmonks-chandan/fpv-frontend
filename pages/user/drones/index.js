import React, { useContext, useEffect, useState } from 'react'
import { withRouter, useRouter } from 'next/router'
import Layout from '../../../components/layouts/layout'
import { userDrones } from '../../../libs/drone'
import { UserContext } from '../../../context/userContext'
import { removeSavedDrone } from '../../../libs/drone'
import Link from 'next/link'
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import Popup from 'reactjs-popup'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import BlockUi from 'react-block-ui'
import 'react-block-ui/style.css'

const SavedDrones = () => {
  const { user } = useContext(UserContext)
  const [drones, setDrones] = useState([])
  const [showConfirm, setShowConfirm] = useState(false)
  const router = useRouter()

  useEffect(() => {
    !user && router.replace('/')
    user && userDrones(user._id).then((res) => setDrones(res))
  }, [user])

  const handleRemove = (e, id) => {
    e.preventDefault()
    removeSavedDrone(id).then((res) => {
      if (res.status === 'success') {
        const notify = () =>
          toast(res.message, {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        setTimeout(() => window.location.reload(), 4000)
        return notify()
      }
      if (res.status === 'error') {
        const notify = () =>
          toast(res.message, {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        return notify()
        alert('error')
      }
    })
  }

  const contentStyle = { width: 'auto' }
  const [closeModal, setCloseModal] = useState(true)

  const close = () => {
    setCloseModal(false)
    setTimeout(() => {
      setCloseModal(true)
    }, 1000)
  }

  const Modal = (drone) => (
    <Popup
      trigger={<i className="far fa-trash-alt grey-dark"></i>}
      {...{ contentStyle }}
      modal={closeModal}
    >
      <div className="modalConfirm" style={{ padding: '1em', width: '300px' }}>
        <h4 style={{ marginBottom: '1em' }}>You are sure to delete this?</h4>
        <button
          type="button"
          onClick={(e) => handleRemove(e, drone._id)}
          style={{
            width: '80px',
            height: '35px',
            lineHeight: '35px',
            marginRight: '15px',
            backgroundColor: '#fff',
            fontSize: '14px',
            fontWeight: '600',
            color: '#000',
            borderRadius: '3px',
            textDecoration: 'none',
            display: 'inline-block',
          }}
        >
          Yes
        </button>
        <button
          type="button"
          onClick={() => close()}
          className="buttons"
          style={{
            width: '80px',
            height: '35px',
            lineHeight: '35px',
            marginRight: '15px',
            backgroundColor: '#fff',
            fontSize: '14px',
            fontWeight: '600',
            color: '#000',
            borderRadius: '3px',
            textDecoration: 'none',
            display: 'inline-block',
          }}
        >
          No
        </button>
      </div>
    </Popup>
  )

  return (
    <>
      <Layout>
        <main className="header px-0">
          <ToastContainer />

          <div className="saved_drones bg-grey position-relative p-0">
            <div className="container">
              <div className="fpv-drones pt-100">
                <h3 className="px30 text-center saved-drones-title">
                  Your Saved Drones
                </h3>
                <div className="row mt-40">
                  {drones?.map((drone, key) => (
                    <div className="col-lg-4" key={key}>
                      <div className="drone-box">
                        <span className="px14 blue">{drone.droneType}</span>
                        <h3 className="px30">{drone.name}</h3>
                        <div className="drone-buttons">
                          <Link href={`/user/drones/${drone.random}`}>
                            <a className="btn-drone bg-blue-grad">
                              View the parts
                            </a>
                          </Link>
                          <Modal drone={drone} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
      <style jsx>{`
        .saved_drones {
          min-height: 100vh;
          height: 100%;
        }
        .saved_drones .saved-drones-title {
          font-weight: 600;
        }
        .saved_drones .drone-box {
          padding: 20px;
          border: 2px solid #cccccc;
        }
        .saved_drones .drone-box .btn-drone {
          padding: 10px;
          color: white;
          font-weight: 400;
          text-transform: uppercase;
          font-size: 12px;
          border-radius: 5px;
        }
        .saved_drones .drone-box .btn-drone:hover {
          background: linear-gradient(96.48deg, #1562b6 15%, #4c2dcb 85%);
        }
        .saved_drones .drone-box i {
          margin-left: 10px;
          cursor: pointer;
        }
        .saved_drones .drone-box i:hover {
          font-size: 17px;
        }
        .saved_drones .drone-buttons {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 20px auto;
        }

        .popup-content {
          margin: auto;
          background: rgb(255, 255, 255);
          width: 30%;
          padding: 5px;
        }
      `}</style>
    </>
  )
}

export default withRouter(SavedDrones)
