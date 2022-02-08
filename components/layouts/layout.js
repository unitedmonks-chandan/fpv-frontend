import Nav from './nav'
import Footer from './footer'
export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <div className="row">{children}</div>
      <Footer />
    </>
  )
}
