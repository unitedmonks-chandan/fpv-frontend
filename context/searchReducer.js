export const sumItems = (cartItems) => {
  return {
    total:
      cartItems.length > 0
        ? cartItems.reduce((total, item) => total + item.price, 0)
        : 0,
  }
}

const searchReducer = (searchState, action) => {
  switch (action.type) {
    case 'ADD_CATEGORIES':
      searchState.categories.push({ ...action.payload })
      return {
        ...searchState,
      }

    case 'SET_PAGE':
      searchState.page = action.payload
      return {
        ...searchState,
      }

    case 'ADD_DRONE_TYPE':
      if (searchState.droneType === '') {
        searchState.droneType = action.payload
        return {
          ...searchState,
          cartItems: [...searchState.cartItems],
          ...sumItems(searchState.cartItems),
        }
      } else {
        searchState.droneType = action.payload
        searchState.cartItems = []
        searchState.batteryType = ''
        searchState.hdOrAnalog = ''
        searchState.cartItems = ''
        searchState.motor = ''
        searchState.software = ''
        searchState.stack = ''
        searchState.esc = ''
        searchState.propeller = ''
        searchState.miscellaneous = ''
        searchState.total = 0
        return {
          ...searchState,
          cartItems: [...searchState.cartItems],
          ...sumItems(searchState.cartItems),
        }
      }

    case 'ADD_ITEM':
      if (
        !searchState.cartItems.find((item) => item._id === action.payload._id)
      ) {
        searchState.cartItems.push({ ...action.payload })
      }

      return {
        ...searchState,
        cartItems: [...searchState.cartItems],
        ...sumItems(searchState.cartItems),
      }

    case 'REMOVE_ITEM':
      return {
        ...searchState,
        cartItems: [
          ...searchState.cartItems.filter(
            (item) => item._id !== action.payload._id
          ),
        ],
        ...sumItems(searchState.cartItems),
      }

    case 'ADD_FRAME':
      if (searchState.frame === '') {
        searchState.frame = action.payload
        return {
          ...searchState,
          cartItems: [...searchState.cartItems],
          ...sumItems(searchState.cartItems),
        }
      } else {
        searchState.frame = action.payload
        searchState.batteryType = ''
        searchState.hdOrAnalog = ''
        searchState.motor = ''
        searchState.software = ''
        searchState.stack = ''
        searchState.esc = ''
        searchState.vtx = ''
        searchState.camera = ''
        searchState.propeller = ''
        searchState.miscellaneous = ''
        searchState.total = 0

        return {
          ...searchState,
          cartItems: [
            ...searchState.cartItems.filter(
              (item) =>
                item.productType !== 'Frame' &&
                item.productType !== 'Battery' &&
                item.productType !== 'Motor' &&
                item.productType !== 'Stack' &&
                item.productType !== 'ESC' &&
                item.productType !== 'Flight Controller' &&
                item.productType !== 'VTX' &&
                item.productType !== 'Camera' &&
                item.productType !== 'Propeller' &&
                item.productType !== 'Misecellaneous'
            ),
          ],
          ...sumItems(searchState.cartItems),
        }
      }

    case 'ADD_BATTERY_TYPE':
      if (searchState.batteryType === '') {
        searchState.batteryType = action.payload
        return {
          ...searchState,
          cartItems: [...searchState.cartItems],
          ...sumItems(searchState.cartItems),
        }
      } else {
        searchState.batteryType = action.payload
        searchState.hdOrAnalog = ''
        searchState.motor = ''
        searchState.software = ''
        searchState.stack = ''
        searchState.esc = ''
        searchState.vtx = ''
        searchState.camera = ''
        searchState.propeller = ''
        searchState.miscellaneous = ''
        searchState.total = 0
        return {
          ...searchState,
          cartItems: [
            ...searchState.cartItems.filter(
              (item) =>
                item.productType !== 'Battery' &&
                item.productType !== 'Motor' &&
                item.productType !== 'Stack' &&
                item.productType !== 'ESC' &&
                item.productType !== 'Flight Controller' &&
                item.productType !== 'VTX' &&
                item.productType !== 'Camera' &&
                item.productType !== 'Antenna' &&
                item.productType !== 'Propeller' &&
                item.productType !== 'Miscellaneous'
            ),
          ],
          ...sumItems(searchState.cartItems),
        }
      }

    case 'ADD_HD_OR_ANALOG':
      if (searchState.hdOrAnalog === '') {
        searchState.hdOrAnalog = action.payload
        return {
          ...searchState,
          cartItems: [...searchState.cartItems],
          ...sumItems(searchState.cartItems),
        }
      } else {
        searchState.hdOrAnalog = action.payload
        searchState.motor = ''
        searchState.software = ''
        searchState.stack = ''
        searchState.esc = ''
        searchState.vtx = ''
        searchState.camera = ''
        searchState.propeller = ''
        searchState.miscellaneous = ''
        searchState.total = 0
        return {
          ...searchState,
          cartItems: [
            ...searchState.cartItems.filter(
              (item) =>
                item.productType !== 'Motor' &&
                item.productType !== 'Stack' &&
                item.productType !== 'ESC' &&
                item.productType !== 'Flight Controller' &&
                item.productType !== 'VTX' &&
                item.productType !== 'Camera' &&
                item.productType !== 'Antenna' &&
                item.productType !== 'Propeller' &&
                item.productType !== 'Miscellaneous'
            ),
          ],
          ...sumItems(searchState.cartItems),
        }
      }

    case 'ADD_MOTOR':
      if (searchState.motor === '') {
        searchState.motor = action.payload
        return {
          ...searchState,
          cartItems: [...searchState.cartItems],
          ...sumItems(searchState.cartItems),
        }
      } else {
        searchState.motor = action.payload
        searchState.software = ''
        searchState.stack = ''
        searchState.esc = ''
        searchState.vtx = ''
        searchState.camera = ''
        searchState.propeller = ''
        searchState.miscellaneous = ''
        searchState.total = 0
        return {
          ...searchState,
          cartItems: [
            ...searchState.cartItems.filter(
              (item) =>
                item.productType !== 'Motor' &&
                item.productType !== 'Stack' &&
                item.productType !== 'ESC' &&
                item.productType !== 'Stack' &&
                item.productType !== 'Flight Controller' &&
                item.productType !== 'VTX' &&
                item.productType !== 'Camera' &&
                item.productType !== 'Antenna' &&
                item.productType !== 'Propeller' &&
                item.productType !== 'Miscellaneous'
            ),
          ],
          ...sumItems(searchState.cartItems),
        }
      }

    case 'ADD_SOFTWARE':
      if (searchState.software === '') {
        searchState.software = action.payload
        return {
          ...searchState,
          cartItems: [...searchState.cartItems],
          ...sumItems(searchState.cartItems),
        }
      } else {
        if (action.payload === 'Kiss') {
          searchState.software = action.payload
          searchState.stack = ''
          searchState.esc = ''
          searchState.controller = ''
          searchState.propeller = ''
          searchState.miscellaneous = ''
          return {
            ...searchState,
            cartItems: [
              ...searchState.cartItems.filter(
                (item) =>
                  item.productType !== 'Stack' &&
                  item.productType !== 'ESC' &&
                  item.productType !== 'VTX' &&
                  item.productType !== 'Flight Controller' &&
                  item.productType !== 'Camera' &&
                  item.productType !== 'Antenna' &&
                  item.productType !== 'Propeller' &&
                  item.productType !== 'Miscellaneous'
              ),
            ],
            ...sumItems(searchState.cartItems),
          }
        }
        if (action.payload === 'Betaflight') {
          searchState.software = action.payload
          return {
            ...searchState,
            cartItems: [
              ...searchState.cartItems.filter(
                (item) =>
                  item.productType !== 'ESC' &&
                  item.productType !== 'Stack' &&
                  item.productType !== 'ESC' &&
                  item.productType !== 'Flight Controller' &&
                  item.productType !== 'VTX' &&
                  item.productType !== 'Camera' &&
                  item.productType !== 'Antenna' &&
                  item.productType !== 'Propeller' &&
                  item.productType !== 'Miscellaneous'
              ),
            ],
            ...sumItems(searchState.cartItems),
          }
        }
      }

    case 'ADD_STACK':
      if (searchState.stack === '') {
        searchState.stack = action.payload
        searchState.esc = ''
        searchState.controller = ''
        searchState.propeller = ''
        searchState.miscellaneous = ''
        searchState.total = 0
        return {
          ...searchState,
          cartItems: [...searchState.cartItems],
          ...sumItems(searchState.cartItems),
        }
      } else {
        searchState.stack = action.payload
        searchState.esc = ''
        searchState.controller = ''
        searchState.propeller = ''
        searchState.miscellaneous = ''
        searchState.total = 0
        return {
          ...searchState,
          cartItems: [
            ...searchState.cartItems.filter(
              (item) =>
                item.productType !== 'Stack' &&
                item.productType !== 'ESC' &&
                item.productType !== 'VTX' &&
                item.productType !== 'Flight Controller' &&
                item.productType !== 'Camera' &&
                item.productType !== 'Antenna' &&
                item.productType !== 'Propeller' &&
                item.productType !== 'Miscellaneous'
            ),
          ],
          ...sumItems(searchState.cartItems),
        }
      }

    case 'ADD_ESC':
      if (searchState.esc === '') {
        searchState.esc = action.payload
        searchState.stack = ''
        return {
          ...searchState,
          cartItems: [...searchState.cartItems],
          ...sumItems(searchState.cartItems),
        }
      } else {
        searchState.esc = action.payload
        searchState.stack = ''
        return {
          ...searchState,
          cartItems: [
            ...searchState.cartItems.filter(
              (item) =>
                item.productType !== 'ESC' &&
                item.productType !== 'VTX' &&
                item.productType !== 'Camera' &&
                item.productType !== 'Antenna' &&
                item.productType !== 'Propeller' &&
                item.productType !== 'Miscellaneous'
            ),
          ],
          ...sumItems(searchState.cartItems),
        }
      }
    case 'ADD_CONTROLLER':
      if (searchState.controller === '') {
        searchState.controller = action.payload
        searchState.stack = ''
        return {
          ...searchState,
          cartItems: [...searchState.cartItems],
          ...sumItems(searchState.cartItems),
        }
      } else {
        searchState.controller = action.payload
        searchState.vtx = ''
        searchState.camera = ''
        searchState.antenna = ''
        searchState.propeller = ''
        searchState.miscellaneous = ''
        return {
          ...searchState,
          cartItems: [
            ...searchState.cartItems.filter(
              (item) =>
                item.productType !== 'Controller' &&
                item.productType !== 'VTX' &&
                item.productType !== 'Camera' &&
                item.productType !== 'Propeller' &&
                item.productType !== 'Miscellaneous'
            ),
          ],
          ...sumItems(searchState.cartItems),
        }
      }
    case 'ADD_VTX':
      if (searchState.vtx === '') {
        searchState.vtx = action.payload
        return {
          ...searchState,
          cartItems: [...searchState.cartItems],
          ...sumItems(searchState.cartItems),
        }
      } else {
        searchState.vtx = action.payload
        searchState.camera = ''
        searchState.antenna = ''
        searchState.propeller = ''
        searchState.miscellaneous = ''
        return {
          ...searchState,
          cartItems: [
            ...searchState.cartItems.filter(
              (item) =>
                item.productType !== 'VTX' &&
                item.productType !== 'Camera' &&
                item.productType !== 'Antenna' &&
                item.productType !== 'Propeller' &&
                item.productType !== 'Miscellaneous'
            ),
          ],
          ...sumItems(searchState.cartItems),
        }
      }
    case 'ADD_CAMERA':
      if (searchState.camera === '') {
        searchState.camera = action.payload
        searchState.miscellaneous = ''
        return {
          ...searchState,
          cartItems: [...searchState.cartItems],
          ...sumItems(searchState.cartItems),
        }
      } else {
        searchState.camera = action.payload
        searchState.antenna = ''
        searchState.propeller = ''
        searchState.miscellaneous = ''
        return {
          ...searchState,
          cartItems: [
            ...searchState.cartItems.filter(
              (item) =>
                item.productType !== 'Camera' &&
                item.productType !== 'Antenna' &&
                item.productType !== 'Propeller' &&
                item.productType !== 'Miscellaneous'
            ),
          ],
          ...sumItems(searchState.cartItems),
        }
      }
    case 'ADD_ANTENNA':
      if (searchState.antenna === '') {
        searchState.antenna = action.payload
        return {
          ...searchState,
          cartItems: [...searchState.cartItems],
          ...sumItems(searchState.cartItems),
        }
      } else {
        searchState.antenna = action.payload
        searchState.propeller = ''
        searchState.miscellaneous = ''
        return {
          ...searchState,
          cartItems: [
            ...searchState.cartItems.filter(
              (item) =>
                item.productType !== 'Antenna' &&
                item.productType !== 'Propeller'
            ),
          ],
          ...sumItems(searchState.cartItems),
        }
      }

    case 'ADD_PROPELLER':
      if (searchState.propeller === '') {
        searchState.propeller = action.payload
        searchState.miscellaneous = ''
        return {
          ...searchState,
          cartItems: [...searchState.cartItems],
          ...sumItems(searchState.cartItems),
        }
      } else {
        searchState.propeller = action.payload
        searchState.miscellaneous = ''
        return {
          ...searchState,
          cartItems: [
            ...searchState.cartItems.filter(
              (item) =>
                item.productType !== 'propeller' &&
                item.productType !== 'miscellaneous'
            ),
          ],
          ...sumItems(searchState.cartItems),
        }
      }
    case 'ADD_MISCELLANEOUS':
      if (searchState.miscellaneous === '') {
        searchState.miscellaneous = action.payload
        return {
          ...searchState,
          cartItems: [...searchState.cartItems],
          ...sumItems(searchState.cartItems),
        }
      } else {
        searchState.miscellaneous = action.payload
        return {
          ...searchState,
          cartItems: [
            ...searchState.cartItems.filter(
              (item) => item.productType !== 'miscellaneous'
            ),
          ],
          ...sumItems(searchState.cartItems),
        }
      }

    default:
      return searchState
  }
}

export default searchReducer
