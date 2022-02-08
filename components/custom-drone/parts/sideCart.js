import React, { useContext } from 'react'
import { SearchContext, itemInCart } from '../../../context/searchContext'
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import { ToastContainer, toast } from 'react-toastify'

export default function SideCart(cartItems) {
  const formatter = new Intl.NumberFormat('en-US', {
    // style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  })
  const { removeProduct } = useContext(SearchContext)

  const removeResult = (e, product) => {
    e.preventDefault()
    let itemTypes = cartItems.filter(
      (item) => item.productType === product.productType
    )
    if (itemTypes.length === 1) {
      let message = `You need atleast one ${product.productType} to complete the cart!`

      const notify = () =>
        toast(message, {
          position: 'top-center',
          autoClose: 3000,
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

  return (
    <div>
      {cartItems &&
        cartItems?.map((item, key) => (
          <div
            className="product_checkout d-flex align-items-center justify-content-between"
            key={key}
          >
            <div className="div">
              <h4 className="name">
                <span>{item.productType}</span>
                <span className="text-blue"></span>
              </h4>

              <p className="product_des">{item.name}</p>
              <h3 className="price m-0">$ {formatter.format(item.price)}</h3>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={item.affiliateLink}
                className="btn"
                style={{ textDecoration: 'none' }}
              >
                BUY NOW
              </a>
              {/* <a onClick={() => removeResult(item)} className="btn bg-danger">
              Remove
            </a> */}
              <a
                href=""
                className="close_box"
                style={{
                  marginLeft: '10px',
                  color: 'red',
                  textDecoration: 'none',
                }}
                onClick={(e) => removeResult(e, item)}
              >
                <i className="fas fa-times "></i>
              </a>
            </div>
          </div>
        ))}
    </div>
  )
}
