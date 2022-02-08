import React, { useEffect, useState, useContext } from 'react'
import { setStorage, getStorage } from '../_helpers/storage'
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import Layout from '../components/layouts/layout'
import DroneType from '../components/custom-drone/typeOfDrone'
import BatteryDetail from '../components/custom-drone/batteryDetail'
import AnalogDetail from '../components/custom-drone/analogDetail'
import ControlDetail from '../components/custom-drone/controlDetail'
import MotorDetail from '../components/custom-drone/motorDetail'
import OnlyStack from '../components/custom-drone/onlyStack'

import VTX from '../components/custom-drone/VTX'
import Cameras from '../components/custom-drone/camera'
import Miscellaneous from '../components/custom-drone/miscellaneous'
import Frames from '../components/custom-drone/frames'
import Propellers from '../components/custom-drone/propellers'
import BatteryResults from '../components/custom-drone/batteryResults'
import { allCategories } from '../libs/category'
import { SearchContext, itemInCart } from '../context/searchContext'

import {
  stepOne,
  stepTwo,
  stepThree,
  stepFour,
  stepFive,
  stepSix,
  stepSeven,
  stepEight,
  stepNine,
  stepTen,
  stepEleven,
} from '../libs/products'

export default function CustomDrone() {
  const {
    // page,
    // setPage,
    addProduct,
    removeProduct,
    cartItems,
    total,
    droneType,
    addDroneType,
    addBatteryType,
    batteryType,
    hdOrAnalog,
    addHdOrAnalog,
    addMotor,
    motor,
    software,
    addSoftware,
    stack,
    addStack,
    esc,
    addEcs,
    controller,
    addController,
    vtx,
    addVtx,
    camera,
    addCamera,
    antenna,
    addAntenna,
    frame,
    addFrame,
    propeller,
    addPropeller,
    miscellaneous,
    addMiscellaneous,
  } = useContext(SearchContext)

  const [loading, setLoading] = useState(false)
  const [cats, setCats] = useState(getStorage('categories') || [])

  /* Search State       */
  const [frameResult, setFrameResult] = useState([])
  const [batteriesResult, setBatteriesResult] = useState([])
  const [motorResult, setMotorResult] = useState([])
  const [stackResult, setStackResult] = useState([])
  const [escResult, setEscResult] = useState([])
  const [controllerResult, setControllerResult] = useState([])
  const [vtxResult, setVtxResult] = useState([])
  const [cameraResult, setCameraResult] = useState([])
  const [propellerResult, setPropellerResult] = useState([])
  const [miscellaneousResult, setMiscellaneousResult] = useState([])

  const [page, setPage] = useState(1)

  const prevPage = () => setPage(page - 1)
  const nextPage = () => setPage(page + 1)

  const handleTypeOfDrone = async (e) => {
    if (droneType === '') {
      addDroneType(e.currentTarget.value)
    } else {
      setFrameResult([])
      setBatteriesResult([])
      setMotorResult([])
      setEscResult([])
      setCameraResult([])
      setControllerResult([])
      setPropellerResult([])
      setMiscellaneousResult([])
      addDroneType(e.target.value)
    }
  }

  const handleFrame = async (e) => {
    if (frame === '') {
      setLoading(true)
      addFrame(e.target.value)
    } else {
      setLoading(true)
      setFrameResult([])
      setBatteriesResult([])
      setMotorResult([])
      setEscResult([])
      setControllerResult([])
      setCameraResult([])
      setPropellerResult([])
      setMiscellaneousResult([])
      addFrame(e.target.value)
    }
  }
  const handleBatteryType = async (e) => {
    if (batteryType === '') {
      await addBatteryType(e.target.value)
    }
    if (batteryType !== '') {
      setBatteriesResult([])
      setMotorResult([])
      setEscResult([])
      setCameraResult([])
      setControllerResult([])
      setPropellerResult([])
      setMiscellaneousResult([])
      addBatteryType(e.target.value)
    }
  }

  const handleSoftware = async (e) => {
    if (software === '') {
      addSoftware(e.target.value)
    } else {
      setEscResult([])
      setCameraResult([])
      setControllerResult([])
      setPropellerResult([])
      setMiscellaneousResult([])
      addSoftware(e.target.value)
    }
  }
  // const handleHdOrAnalog = async (e) => {
  //   if (hdOrAnalog === '') {
  //     addHdOrAnalog(e.target.value)
  //   } else {
  //     setMotorResult([])
  //     setEscResult([])
  //     setCameraResult([])
  //     setControllerResult([])
  //     setPropellerResult([])
  //     setMiscellaneousResult([])
  //     addHdOrAnalog(e.target.value)
  //   }
  // }

  // const handleStack = async (e) => {
  //   if (stack === '') {
  //     setLoading(true)
  //     addStack(e.target.value)
  //   } else {
  //     setEscResult([])
  //     setCameraResult([])
  //     setControllerResult([])
  //     setPropellerResult([])
  //     setMiscellaneousResult([])
  //     addStack(e.target.value)
  //   }
  // }

  const handleVtx = async (e) => {
    if (vtx === '') {
      setLoading(true)
      addVtx(e.target.value)
    } else {
      setCameraResult([])
      setPropellerResult([])
      setMiscellaneousResult([])
      addVtx(e.target.value)
    }
  }

  // const handleCamera = async (e) => {
  //   if (antenna === '') {
  //     setLoading(true)
  //     addCamera(e.target.value)
  //   } else {
  //     confirmAlert({
  //       title: 'Confirm to submit',
  //       message:
  //         'This will remove next items ( selected previously ) form cart.',
  //       buttons: [
  //         {
  //           label: 'Yes',
  //           onClick: () => {
  //             setCameraResult([])
  //             setPropellerResult([])
  //             setMiscellaneousResult([])
  //             addCamera(e.target.value)
  //           },
  //         },
  //         {
  //           label: 'No',
  //           onClick: () => e.preventDefault(),
  //         },
  //       ],
  //     })
  //   }
  // }

  const handlePropeller = async (e) => {
    if (propeller === '') {
      setLoading(true)
      addPropeller(e.target.value)
    } else {
      setPropellerResult([])
      setMiscellaneousResult([])
      addPropeller(e.target.value)
    }
  }

  const handleMiscellaneous = async (e) => {
    if (miscellaneous === '') {
      setLoading(true)
      addMiscellaneous(e.target.value)
    } else {
      setMiscellaneousResult([])
      addMiscellaneous(e.target.value)
    }
  }

  const handleSelected = (e, product) => {
    if (e.target.checked === true) {
      addProduct(product)
    }
    if (e.target.checked === false) {
      let itemTypes = cartItems.filter(
        (item) => item.productType === product.productType
      )
      if (itemTypes.length === 1) {
        let message = `You need atleast one ${product.productType} item to complete the cart!`

        const notify = () =>
          toast(message, {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        return notify()
      } else {
        removeProduct(product)
      }
    }
  }

  /* Set Categories  */
  useEffect(() => {
    async function getAllCategories() {
      await allCategories().then((res) => setCats(res))
      setStorage('categories', cats)
    }
    getAllCategories()
  }, [droneType])

  useEffect(() => {
    setStorage('categories', cats)
  }, [droneType])
  /* end */

  /* Start of searches ... */

  // Search Step One - Find Frames
  useEffect(() => {
    async function getFrameResult() {
      droneType &&
        frame &&
        (await stepOne(droneType, frame).then((res) => {
          setLoading(false)
          let filteredProducts = []
          res?.map((product) =>
            product.merchant.map((item) => {
              if (item.mainMerchant === true) {
                filteredProducts.push(product)
              }
            })
          )
          setFrameResult(filteredProducts)
        }))
    }
    getFrameResult()
  }, [droneType, frame])

  // Search Step Two - Find Batteries
  useEffect(() => {
    async function getBatteryResult() {
      batteryType &&
        (await stepTwo(batteryType).then((res) => {
          let filteredProducts = []
          res.map((product) =>
            product.merchant.map((item) => {
              if (item.mainMerchant === true) {
                filteredProducts.push(product)
              }
            })
          )
          setBatteriesResult(filteredProducts)
        }))
    }
    getBatteryResult()
  }, [batteryType])

  // Search Step Three - Find Motors
  useEffect(() => {
    async function getMotorresult() {
      batteryType &&
        (await stepThree(batteryType).then((res) => {
          setLoading(false)
          let filteredProducts = []
          res.map((product) =>
            product.merchant.map((item) => {
              if (item.mainMerchant === true) {
                filteredProducts.push(product)
              }
            })
          )
          setMotorResult(filteredProducts)
        }))
    }
    getMotorresult()
  }, [batteryType])

  // Search Step Four - Find Stacks
  useEffect(() => {
    async function getStackresult() {
      droneType &&
        software &&
        frame &&
        (await stepFour(droneType, software, frame).then((res) => {
          setLoading(false)
          let filteredStack = []

          res?.map((product) =>
            product.merchant.map((item) => {
              if (item.mainMerchant === true) {
                filteredStack.push(product)
              }
            })
          )
          setStackResult(filteredStack)
        }))
    }
    getStackresult()
  }, [droneType, software, frame])

 
  // Search Step Six - Find VTX
  useEffect(() => {
    async function getVtxResult() {
      vtx &&
        (await stepFive(vtx).then((res) => {
          setLoading(false)
          let filteredProducts = []
          res.map((product) =>
            product.merchant.map((item) => {
              if (item.mainMerchant === true) {
                filteredProducts.push(product)
              }
            })
          )
          setVtxResult(filteredProducts)
        }))
    }

    async function getVtxComboResult() {
      vtx &&
        (await stepFive(vtx).then((res) => {
          setLoading(false)
          let filteredVtxs = []
          let filteredCameras = []
          res.vtxs?.map((product) =>
            product.merchant.map((item) => {
              if (item.mainMerchant === true) {
                filteredVtxs.push(product)
              }
            })
          )
          res.cameras?.map((product) =>
            product.merchant.map((item) => {
              if (item.mainMerchant === true) {
                filteredCameras.push(product)
              }
            })
          )
          setVtxResult(filteredVtxs)
          setCameraResult(filteredCameras)
        }))
    }
    vtx === 'hd' && getVtxResult()
    vtx === 'analog' && getVtxComboResult()
  }, [vtx])


  // Search Step Ten - Find Propellers
  useEffect(() => {
    async function getPropellerResult() {
      propeller &&
        (await stepTen(propeller).then((res) => {
          setLoading(false)
          let filteredProducts = []
          res.map((product) =>
            product.merchant.map((item) => {
              if (item.mainMerchant === true) {
                filteredProducts.push(product)
              }
            })
          )
          setPropellerResult(filteredProducts)
        }))
    }
    getPropellerResult()
  }, [propeller])

  // Search Step Eleven - FInd Miscellaneous
  useEffect(() => {
    async function getMiscellaneousResult() {
      miscellaneous &&
        (await stepEleven(miscellaneous).then((res) => {
          setLoading(false)
          let filteredProducts = []
          res.map((product) =>
            product.merchant.map((item) => {
              if (item.mainMerchant === true) {
                filteredProducts.push(product)
              }
            })
          )
          setMiscellaneousResult(filteredProducts)
        }))
    }
    getMiscellaneousResult()
  }, [miscellaneous])

  /* End of searches ....*/

  return (
    <>
      <Layout>
        <main className="custom_parts" style={{ marginTop: '65px' }}>
          <ToastContainer />
          <div className="container-fluid position-relative p-0">
            {page === 1 && (
              <DroneType
                cartItems={cartItems}
                page={page}
                onchange={handleTypeOfDrone}
                droneType={droneType}
                nextPage={nextPage}
              />
            )}
            {page === 2 && (
              <Frames
                categories={cats}
                page={page}
                prevPage={prevPage}
                nextPage={nextPage}
                result={frameResult}
                droneType={droneType}
                frame={frame}
                stack={stack}
                onchange={handleFrame}
                handleSelect={handleSelected}
                cartItems={cartItems}
                total={total}
                loading={loading}
              />
            )}
            {page === 3 && (
              <BatteryDetail
                categories={cats}
                page={page}
                prevPage={prevPage}
                nextPage={nextPage}
                onchange={handleBatteryType}
                battery={batteryType}
                result={batteriesResult}
                droneType={droneType}
                handleSelect={handleSelected}
                cartItems={cartItems}
                total={total}
                loading={loading}
              />
            )}
            {page === 4 && (
              <BatteryResults
                categories={cats}
                page={page}
                prevPage={prevPage}
                nextPage={nextPage}
                onchange={handleBatteryType}
                battery={batteryType}
                result={batteriesResult}
                droneType={droneType}
                handleSelect={handleSelected}
                cartItems={cartItems}
                total={total}
                loading={loading}
              />
            )}
            {page === 5 && (
              <MotorDetail
                categories={cats}
                page={page}
                prevPage={prevPage}
                nextPage={nextPage}
                motor={motor}
                result={motorResult}
                droneType={droneType}
                handleSelect={handleSelected}
                cartItems={cartItems}
                total={total}
                loading={loading}
              />
            )}

            {page === 6 && (
              <ControlDetail
                page={page}
                prevPage={prevPage}
                nextPage={nextPage}
                result={motorResult}
                droneType={droneType}
                software={software}
                onchange={handleSoftware}
                handleSelect={handleSelected}
                cartItems={cartItems}
                total={total}
                loading={loading}
              />
            )}
            {page === 7 && (
              <OnlyStack
                categories={cats}
                page={page}
                prevPage={prevPage}
                nextPage={nextPage}
                result={stackResult}
                // escResult={escResult}
                // flightControllerResult={controllerResult}
                droneType={droneType}
                stack={stack}
                // onchange={handleStack}
                handleSelect={handleSelected}
                cartItems={cartItems}
                total={total}
                loading={loading}
              />
            )}
            {page === 8 && (
              <VTX
                categories={cats}
                page={page}
                prevPage={prevPage}
                nextPage={nextPage}
                result={[]}
                droneType={droneType}
                vtx={vtx}
                vtxResult={vtxResult}
                cameraResult={cameraResult}
                onchange={handleVtx}
                handleSelect={handleSelected}
                cartItems={cartItems}
                total={total}
                loading={loading}
              />
            )}

            {page === 9 && (
              <Propellers
                categories={cats}
                page={page}
                prevPage={prevPage}
                nextPage={nextPage}
                result={propellerResult}
                droneType={droneType}
                propeller={propeller}
                onchange={handlePropeller}
                handleSelect={handleSelected}
                cartItems={cartItems}
                total={total}
                loading={loading}
              />
            )}

            {page === 10 && (
              <Miscellaneous
                categories={cats}
                page={page}
                prevPage={prevPage}
                nextPage={nextPage}
                onchange={handleMiscellaneous}
                miscellaneous={miscellaneous}
                result={miscellaneousResult}
                droneType={droneType}
                handleSelect={handleSelected}
                cartItems={cartItems}
                total={total}
                loading={loading}
              />
            )}
          </div>
        </main>
      </Layout>
    </>
  )
}
