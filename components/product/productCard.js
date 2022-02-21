import React from 'react'
import { withRouter } from 'next/router'
import Link from 'next/link'

const productCard = ({ products }) => {
  return products?.map((product, key) => (
    <div className="col-lg-3 col-md-6 col-sm-12 product-col" key={key}>
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
            <p className="product-title font-weight-bold">{product.name} </p>
            <h2 className="price m-0 text-blue">
                      $272.66
                    </h2>
          </a>
        </Link>

        {/* <h4 className="blue">$ {product.price}</h4> */}
      </div>
      <style jsx>{`
        .product-box{
         cursor:pointer;
        }
        .product-box a {
          text-decoration: none;
        }
        .product-col{
        margin-top:50px;
        }
        .product-box .product-title{
           color:#000;
           font-weight:500;
           margin: 15px 0;
           line-height: 1.3;
        }
      .product-box .image-box{
       position: relative;
      }
      .product-box .product-overlay{
       overflow:hidden;
       border-radius:3px;
       background: rgba(59, 24, 198, .4);
       position: absolute;
       z-index: 20;
       height: 100%;
       width: 0;
       transition: .5s ease;
      }
      .product-box:hover .product-overlay{
      width: 100%;
      }
       .product-box .price{
        font-size: 20px;
        font-weight: 500;
        line-height: 100%;
       }
      .product-box img{
         border-radius:3px;
         border:1px solid #e1e1e1;
      }
      `}</style>
    </div>
  ))
}

export default withRouter(productCard)
