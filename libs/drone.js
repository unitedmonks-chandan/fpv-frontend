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

export const saveDrone = async (userId, name, droneType, products) => {
  return await axios
    .post(
      `${url}/save-drone`,
      { userId, name, droneType, products },
      axiosConfig
    )
    .then((res) => {
      return res.data
    })
    .catch((err) => console.log(err))
}

export const userDrones = async (userId) => {
  return await axios
    .post(`${url}/user-drones`, { userId }, axiosConfig)
    .then((res) => {
      return res.data
    })
    .catch((err) => console.log(err))
}

export const removeSavedDrone = async (id) => {
  return await axios
    .post(`${url}/remove-saved-drone/${id}`, axiosConfig)
    .then((res) => {
      return res.data
    })
    .catch((err) => console.log(err))
}

export const findSavedDrone = async (id) => {
  return await axios
    .post(`${url}/find-saved-drone/${id}`, axiosConfig)
    .then((res) => {
      return res.data
    })
    .catch((err) => console.log(err))
}

export const completedDrones = async () => {
  return await axios
    .get(`${url}/complete-drones`, axiosConfig)
    .then((res) => {
      console.log(res)
      return res.data
    })
    .catch((err) => console.log(err))
}

export const findCompleteDrone = async (id) => {
  return await axios
    .get(`${url}/complete-drone/${id}`, axiosConfig)
    .then((res) => {
      return res.data
    })
    .catch((err) => console.log(err))
}
