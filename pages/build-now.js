import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/layouts/layout'
export default function Landing() {
  const router = useRouter()
  const buildDrone = (e) => {
    e.preventDefault()
    router.replace('/build-your-drone')
  }
  return (
    <>
      <Layout>
        <main className="build_now d-flex align-items-center bg-blue-grad">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h1 className="build-now-title white">Drone Builder</h1>
                <h3 className="white mt-20">
                  Let’s build your dream drone <br />
                  From Racing to Freestyle, Long Range and Cinematics
                </h3>
                <a
                  href="#"
                  onClick={(e) => buildDrone(e)}
                  className="btn bg_white shadow"
                >
                  BUILD NOW
                </a>
              </div>
              <div className="col-lg-6">
                <img
                  className="build-now-img"
                  src="img/drone_4.png"
                  alt="drone-img"
                />
              </div>
            </div>
          </div>
        </main>
      </Layout>
      <style jsx>{`
        .build_now {
          min-height: 100vh;
          height: auto;
        }

        .build_now .build-now-title {
          font-weight: 600;
          font-size: 70px;
        }
        .build_now .bg_white {
          background: white;
        }
        .build_now .btn {
          padding: 10px 25px;
          margin-top: 30px;
          font-size: 25px !important;
        }
        .build_now .shadow:hover {
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
        }

        @media (max-width: 992px) {
          .build_now {
            padding-top: 120px;
            height: 100%;
          }
          .build_now .build-now-img {
            margin-top: 80px;
          }
        }

        @media (min-width: 576px) and (max-width: 767.98px) {
          .build_now {
            height: 100%;
            padding-top: 80px;
          }
        }
      `}</style>
    </>
  )
}
