import React, { createContext, useState, useReducer, useEffect } from 'react'
import searchReducer from './searchReducer'
import { setStorage, getStorage } from '../_helpers/storage'
export const SearchContext = createContext()

const initialState = getStorage('searchState') || {
  cartItems: [],
  droneType: '',
  batteryType: '',
  hdOrAnalog: '',
  motor: '',
  software: '',
  stack: '',
  ecs: '',
  controller: '',
  vtx: '',
  camera: '',
  antenna: '',
  frame: '',
  propeller: '',
  miscellaneous: '',
  total: 0,
  page: 1,
}

export const itemTypeCart = (productType, cartItems) => {
  return cartItems && cartItems.find((item) => item.productType === productType)
}

export const itemInCart = (id, cartItems) => {
  return cartItems && cartItems.find((item) => item._id === id)
}
const SearchContextProvider = ({ children }) => {
  const [searchState, setSearchState] = useReducer(searchReducer, initialState)

  const setPage = (page) => setSearchState({ type: 'SET_PAGE', payload: page })

  const addProduct = (product) =>
    setSearchState({ type: 'ADD_ITEM', payload: product })

  const removeProduct = (product) =>
    setSearchState({ type: 'REMOVE_ITEM', payload: product })

  const addDroneType = (drone) => {
    setSearchState({ type: 'ADD_DRONE_TYPE', payload: drone })
  }

  const addBatteryType = (battery) => {
    setSearchState({ type: 'ADD_BATTERY_TYPE', payload: battery })
  }

  const addHdOrAnalog = (hdOrAnalog) => {
    setSearchState({ type: 'ADD_HD_OR_ANALOG', payload: hdOrAnalog })
  }

  const addMotor = (motor) => {
    setSearchState({ type: 'ADD_MOTOR', payload: motor })
  }

  const addSoftware = (software) => {
    setSearchState({ type: 'ADD_SOFTWARE', payload: software })
  }

  const addStack = (stack) => {
    setSearchState({ type: 'ADD_STACK', payload: stack })
  }

  const addEcs = (esc) => {
    setSearchState({ type: 'ADD_ESC', payload: esc })
  }

  const addController = (controller) => {
    setSearchState({ type: 'ADD_CONTROLLER', payload: controller })
  }

  const addVtx = (vtx) => {
    setSearchState({ type: 'ADD_VTX', payload: vtx })
  }

  const addCamera = (camera) => {
    setSearchState({ type: 'ADD_CAMERA', payload: camera })
  }

  const addAntenna = (antenna) => {
    setSearchState({ type: 'ADD_ANTENNA', payload: antenna })
  }

  const addFrame = (frame) => {
    setSearchState({ type: 'ADD_FRAME', payload: frame })
  }

  const addPropeller = (propeller) => {
    setSearchState({ type: 'ADD_PROPELLER', payload: propeller })
  }
  const addMiscellaneous = (miscellaneous) => {
    setSearchState({ type: 'ADD_MISCELLANEOUS', payload: miscellaneous })
  }

  const searchContextValues = {
    ...searchState,
    setPage,
    addProduct,
    removeProduct,
    addDroneType,
    addBatteryType,
    addHdOrAnalog,
    addMotor,
    addSoftware,
    addStack,
    addEcs,
    addController,
    addVtx,
    addCamera,
    addAntenna,
    addFrame,
    addPropeller,
    addMiscellaneous,
  }

  useEffect(() => {
    setStorage('searchState', searchState)
  }, [searchState])

  return (
    <SearchContext.Provider value={searchContextValues}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider
