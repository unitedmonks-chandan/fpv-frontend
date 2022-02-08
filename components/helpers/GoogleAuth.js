import React, { useContext } from 'react'
import GoogleLogin from 'react-google-login'
import { UserContext } from '../../context/userContext'
import { googleVerify } from '../../libs/user'
import { ToastContainer, toast } from 'react-toastify'

const GoogleAuth = () => {
  const { addUser } = useContext(UserContext)

  const handleSuccess = (googleData) => {
    let tokenId = googleData.tokenId
    googleVerify(tokenId).then((res) => {
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
        addUser(res.user)
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
      }
    })
  }

  const handleFailure = (googleData) => {
    console.log(googleData)
  }
  return (
    <>
      <ToastContainer />
      <GoogleLogin
        clientId="552795491788-g9bm3sjendqmmsocfqjb89udl2o72np5.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={handleSuccess}
        onFailure={handleFailure}
        cookiePolicy={'single_host_origin'}
        style={{ width: '100%' }}
      ></GoogleLogin>

      <style jsx>{`
        .build_drone .social-box {
          border: 1px solid #cccccc;
          padding: 20px;
          margin: auto 20px;
        }
        .build_drone .google-login {
          height: 50px;
          border: 1px solid #cccccc;
          display: flex;
          align-items: center;
          width: 100%;
        }
        .build_drone .google-login:hover .google-text {
          font-size: 13px;
        }
        .build_drone .google-icon {
          border-right: 1px solid #cccccc;
          padding: 10px;
        }
        .build_drone .google-text {
          color: #c4c4c4;
          margin-bottom: 0;
          margin: auto auto;
          transition: 0.1s ease all;
        }
        .build_drone .social-icon {
          border-radius: 100%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .build_drone .base-icon {
          border: 1px solid #c4c4c4;
          width: 40px;
          height: 40px;
        }
        .build_drone .base-icon:hover {
          border: none;
          background: #c4c4c4;
        }
        .build_drone .facebook-icon:hover {
          background: #1562b6;
        }
        .build_drone .twitter-icon:hover {
          background: #1da1f2;
        }
        .build_drone .ig-icon:hover {
          background: #e1306c;
        }
        .build_drone .base-icon:hover i {
          color: white;
        }

        .build_drone .name-form {
          border: 1px solid #cccccc;
          outline: none;
          padding: 10px;
          width: 100%;
        }
        .build_drone .name-form::placeholder {
          color: #c4c4c4;
        }
        .build_drone .btn-submit {
          width: 100%;
          padding: 10px;
          color: white;
          text-transform: uppercase;
          outline: none;
          border: none;
          border-radius: 5px;
        }
      `}</style>
    </>
  )
}

export default GoogleAuth
