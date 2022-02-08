import Link from 'next/link'
import React, { useState, useContext, useRef } from 'react'
import { UserContext } from '../../context/userContext'
import { useRouter } from 'next/router'
import GoogleAuth from '../helpers/GoogleAuth'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
const btnBlueGrad = {
  padding: ' 20px 40px',
  /* height: 70px; */
  fontSize: '18px',
  fontWeight: 600,
  color: ' #fff',
  background: 'linear-gradient(96.48deg, #1562b6 8.17%, #4c2dcb 93.07%)',
  borderRadius: 0,
  transition: ' 0.2s',
}
export default function Nav() {
  const [open, setOpen] = useState(false)
  const { user, removeUser } = useContext(UserContext)
  const router = useRouter()
  const logInRef = useRef(null)
  const toggle = (event) => {
    event.preventDefault()
    setOpen(!open)
  }
  const googleLogIn = () => {
    logInRef.current
  }
  const logOut = (e) => {
    e.preventDefault()
    removeUser()
    router.push('/')
  }
  const goToDashboard = () => router.push('/user/drones')

  return (
    <nav className="navbar navbar-expand-xl fixed-top d-flex align-items-center p-0">
      <div className="container-fluid p-0">
        <Link href="/">
          <a className="navbar-brand">LOGO</a>
        </Link>
        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={(event) => toggle(event)}
        >
          <i className="fas fa-bars"></i>
        </button>
        <div
          className={
            open
              ? 'show collapse navbar-collapse position-absolute w-100'
              : 'collapse navbar-collapse position-absolute w-100'
          }
          id="navbarSupportedContent"
        >
          <a
            className="close_popup d-xl-none"
            onClick={(event) => toggle(event)}
          >
            <i className="fas fa-times"></i>
          </a>
          <div className="container">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/build-now">
                  <a className="nav-link">drone Builder</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#drones">
                  <a className="nav-link">Completed Builds</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/products">
                  <a className="nav-link">Products</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex right_content align-items-center ms-auto">
          {user && (
            <ul className="navbar-nav flex-row ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={(e) => logOut(e)}>
                  <i className="fas fa-sign-out-alt"></i> LOGOUT
                </a>
              </li>
            </ul>
          )}

          <div className="btn" style={btnBlueGrad}>
            {user ? (
              <span onClick={goToDashboard}>MY ACCOUNT</span>
            ) : (
              <>
                <div onClick={googleLogIn}>
                  LOGIN
                  <div className="nav-login">
                    <GoogleAuth ref={logInRef} />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .nav-login {
          opacity: 0;
          position: 'absolute';
          position: absolute;
          top: 18%;
          left: 0px;
        }
      `}</style>
    </nav>
  )
}
