import 'bootstrap/dist/css/bootstrap.css'
import '../styles/global.css'
import '../styles/main.css'
import '../styles/media.css'

import SearchContextProvider from '../context/searchContext'
import UserContextProvider from '../context/userContext'

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <SearchContextProvider>
        <Component {...pageProps} />
      </SearchContextProvider>
    </UserContextProvider>
  )
}

export default MyApp
