import axios from 'axios'

const url = 'https://partpicker.herokuapp.com/api/v1'

// const url = 'http://localhost:8000/api/v1'

const axiosConfig = {
  headers: {
    withCredentials: true,
  },
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

export const getHomeParts = async () => {
  return await axios
    .get(`${url}/get-home-parts`, axiosConfig)
    .then((res) => {
      console.log(res.data)
      return res.data
    })
    .catch((err) => console.log(err))
}
export const productPaginate = async (page) => {
  return await axios
    .get(`${url}/product-paginate/?page=${page}`, axiosConfig)
    .then((res) => {
      return res.data
    })
    .catch((err) => console.log(err))
}

export const productSearchPaginate = async (category, page) => {
  return await axios
    .get(
      `${url}/product-search-paginate/?category=${category}&page=${page}`,
      axiosConfig
    )
    .then((res) => {
      return res.data
    })
    .catch((err) => console.log(err))
}

export const productsData = async () => {
  return await axios
    .get(`${url}/products`, axiosConfig)
    .then((res) => {
      return res.data
    })
    .catch((err) => console.log(err))
}

export const singleProduct = async (id) => {
  return await axios
    .get(`${url}/product/${id}`, axiosConfig)
    .then((res) => {
      return res.data
    })
    .catch((err) => console.log(err))
}

//  FInd Frames
export const stepOne = async (typeOfDrone, frameType) => {
  return await axios
    .post(
      `${url}/product/search/step-one`,
      {
        typeOfDrone,
        frameType,
      },
      axiosConfig
    )
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.log(err)
    })
}

// Find Batteries
export const stepTwo = async (batteryType) => {
  return await axios
    .post(
      `${url}/product/search/step-two`,
      {
        batteryType,
      },
      axiosConfig
    )
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.log(err)
    })
}

// Find Motors
export const stepThree = async (batteryType) => {
  return await axios
    .post(
      `${url}/product/search/step-three`,
      {
        batteryType,
      },
      axiosConfig
    )
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.log(err)
    })
}

// Find Stacks
export const stepFour = async (typeOfDrone, software, frame) => {
  return await axios
    .post(
      `${url}/product/search/step-four`,
      {
        typeOfDrone,
        software,
        frame,
      },
      axiosConfig
    )
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.log(err)
    })
}

// Find VTX
export const stepFive = async (vtx) => {
  return await axios
    .post(
      `${url}/product/search/step-five`,
      {
        vtx,
      },
      axiosConfig
    )
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.log(err)
    })
}

// Find ESCs
// export const stepFour = async (typeOfDrone, hdOrAnalog, software, esc) => {
//   return await axios
//     .post(
//       `${url}/product/search/step-four`,
//       {
//         typeOfDrone,
//         hdOrAnalog,
//         software,
//         esc,
//       },
//       axiosConfig
//     )
//     .then((res) => {
//       return res.data
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// }

// Find Controllers
// export const stepFive = async (
//   typeOfDrone,
//   hdOrAnalog,
//   software,
//   controller
// ) => {
//   return await axios
//     .post(
//       `${url}/product/search/step-five`,
//       {
//         typeOfDrone,
//         hdOrAnalog,
//         software,
//         controller,
//       },
//       axiosConfig
//     )
//     .then((res) => {
//       return res.data
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// }

// Find Cameras
export const stepSeven = async (typeOfDrone, hdOrAnalog, software, camera) => {
  return await axios
    .post(
      `${url}/product/search/step-seven`,
      {
        typeOfDrone,
        hdOrAnalog,
        software,
        camera,
      },
      axiosConfig
    )
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.log(err)
    })
}

// Find Antennas
export const stepEight = async (typeOfDrone, hdOrAnalog, software, antenna) => {
  return await axios
    .post(
      `${url}/product/search/step-eight`,
      {
        typeOfDrone,
        hdOrAnalog,
        software,
        antenna,
      },
      axiosConfig
    )
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.log(err)
    })
}

// Find Frames
export const stepNine = async (typeOfDrone) => {
  return await axios
    .post(
      `${url}/product/search/step-nine`,
      {
        typeOfDrone,
      },
      axiosConfig
    )
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.log(err)
    })
}

// Find Propellers
export const stepTen = async (propeller) => {
  return await axios
    .post(
      `${url}/product/search/step-ten`,
      {
        propeller,
      },
      axiosConfig
    )
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.log(err)
    })
}

// Find Miscellaneous
export const stepEleven = async (miscellaneous) => {
  return await axios
    .post(
      `${url}/product/search/step-eleven`,
      {
        miscellaneous,
      },
      axiosConfig
    )
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.log(err)
    })
}
