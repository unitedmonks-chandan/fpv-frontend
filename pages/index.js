import Layout from '../components/layouts/layout'
import HomeHeaderSection from '../components/home/homeHeaderSection'
import HomeSectionOne from '../components/home/homeSectionOne'
import HomeSectionTwo from '../components/home/homeSectionTwo'
import HomeDroneOne from '../components/home/homeDroneOne'
import HomeDroneTwo from '../components/home/homeDroneTwo'
import HomeDroneThree from '../components/home/homeDroneThree'
import HomeBlogList from '../components/home/homeBlogList'
import HomeDroneParts from '../components/home/homeDroneParts'

export default function Home() {
  return (
    <div>
      <Layout>
        {/* <!-- header section start from here --> */}
        <HomeHeaderSection />
        {/* <!-- section 1 start from here --> */}
        <HomeSectionOne />

        {/* <!-- section 2 --> */}
        {/* <HomeSectionTwo /> */}

        <div className="drone_info_box section bg_lightgrey">
          <div className="container">
            <div className="content">
              <div className="text-content text-center">
                <h2 className="section_title">Our Completed Products</h2>
                <p className="para">Confused to build your unique drone? </p>

                <p className="para">
                  Check out our ready to go assembled drones created by experts{' '}
                </p>
              </div>
            </div>
          </div>
          <HomeDroneOne />
          <HomeDroneTwo />
          <HomeDroneThree />

          <div className="text-center content">
            <div className="btn btn-blue-grad rounded">VIEW MORE PRODUCTS</div>
          </div>
        </div>

        <HomeDroneParts />
        {/* <HomeBlogList /> */}
      </Layout>
      <style jsx>{`
        .header_section {
          padding: 250px 0 140px;
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
          position: relative;
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
