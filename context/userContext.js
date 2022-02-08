import React, { createContext, useState, useReducer, useEffect } from 'react'
import { setStorage, getStorage, removeStorage } from '../_helpers/storage'

export const UserContext = createContext()

const initialState = getStorage('_fpvUser') || null

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(initialState)

  const addUser = (value) => setUser(value)
  const removeUser = () => {
    removeStorage('_fpvUser')
    setUser(null)
  }

  useEffect(() => {
    setStorage('_fpvUser', user)
  }, [user])

  const userContextValues = {
    user,
    addUser,
    removeUser,
  }

  return (
    <UserContext.Provider value={userContextValues}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
