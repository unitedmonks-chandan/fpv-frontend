import React from 'react'
import { withRouter } from 'next/router'
import Link from 'next/link'

const productCard = ({ products }) => {
  return products?.map((product, key) => (
    <div className="col-sm-3" key={key}>
      <div className="product-box">
        <div className="image-box">
          <div className="product-overlay"></div>
          <img
            className="product-img"
            src={product.featuredImage && product.featuredImage.url}
            alt={product.name}
          />
        </div>

        <Link href={'/products/' + product._id}>
          <a rel="norefferer noopener">
            <p className="font-weight-bold mt-20">{product.name} </p>
          </a>
        </Link>

        {/* <h4 className="blue">$ {product.price}</h4> */}
      </div>
      <style jsx>{`
        .product-box a {
          text-decoration: none;
        }
      `}</style>
    </div>
  ))
}

export default withRouter(productCard)
