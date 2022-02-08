export const setStorage = (key, value) => {
  if (process.browser) {
    return localStorage.setItem(key, JSON.stringify(value))
  }
}

export const getStorage = (key) => {
  if (process.browser) {
    let item = localStorage.getItem(key)
    return JSON.parse(item)
  }
}

export const removeStorage = (key) => {
  if (process.browser) {
    localStorage.removeItem(key)
  }
}
