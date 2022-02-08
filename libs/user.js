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

export const googleVerify = async (token) => {
  return await axios
    .post(`${url}/google-verify`, { token }, axiosConfig)
    .then((res) => {
      return res.data
    })
    .catch((err) => console.log(err))
}
