import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { itemInCart, itemTypeCart } from '../../../context/searchContext'
const formatter = new Intl.NumberFormat('en-US', {
  // style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
})
export default function ResultComponent(
  itemType,
  result,
  handleSelect,
  cartItems
) {
  return (
    <div>
      <div
        className={result.length > 0 ? 'd-flex justify-content-between' : ''}
      >
        <div className="column_1"></div>
        <div className="column_2">
          <h4 className="title">Price</h4>
        </div>
        <div className="column_3">
          <h4 className="title">Where</h4>
        </div>
        <div className="column_4"></div>
      </div>
      {result &&
        result.map((product) =>
          product.merchant.map((item, key) => {
            if (item.mainMerchant === true) {
              return (
                <div
                  className="product_detail border-1 text-center d-flex align-items-center  justify-content-between"
                  key={key}
                >
                  <div className="column_1 d-flex align-items-center">
                    <input
                      type="checkbox"
                      id={key}
                      className="checkbox mx-4 "
                      checked={
                        !itemInCart(product._id, cartItems) ? false : true
                      }
                      onChange={(e) =>
                        handleSelect(e, {
                          productType: itemType,
                          image: product.featuredImage?.url,
                          _id: product._id,
                          name: product.name,
                          price: item.price,
                          affiliateLink: item.affiliateLink,
                        })
                      }
                    />
                    {product.featuredImage ? (
                      <img
                        src={product.featuredImage.url}
                        alt={product.name}
                        style={{ width: '50px', height: '50px' }}
                      />
                    ) : (
                      <img
                        src="/img/no-img.png"
                        alt={product.name}
                        style={{ width: '50px', height: '50px' }}
                      />
                    )}

                    <div className="product-title">
                    <p className="title m-0">
                      <Link href={'/products/' + product._id}>
                        <a target="_blank" style={{ textDecoration: 'none' }}>
                          {product.name}
                        </a>
                      </Link>
                    </p>
{ product && product.featured && (
    <Image className="recommended" src="/img/recommended_tag.png" alt="img" width={100} height={17}/>
)}
                          
                          </div>
                  </div>
                  <div className="column_2" style={{ width: '14%' }}>
                    <h2 className="price m-0">
                      $ {formatter.format(item.price)}
                    </h2>
                  </div>
                  <div className="column_3 mx-2">
                    <div className="where">
                      <img
                        src={
                          item.name.logo
                            ? item.name.logo.url
                            : '/img/no-img.png'
                        }
                        alt="card"
                      />
                    </div>
                  </div>
                  <div className="column_4 d-flex justify-content-between align-items-center">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={item.affiliateLink}
                      className="buy_now"
                    >
                      BUY NOW
                    </a>
                  </div>
                </div>
              )
            }
          })
        )}
    </div>
  )
}
