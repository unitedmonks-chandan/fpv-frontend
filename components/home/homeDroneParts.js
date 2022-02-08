import React, { useState, useEffect } from 'react'
import { allCategories } from '../../libs/category'
import { getHomeParts } from '../../libs/products'
import Link from 'next/link'

const HomeDroneParts = () => {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  useEffect(() => {
    async function getAllCategories() {
      await allCategories().then((res) => setCategories(res))
    }
    async function getAllHomeParts() {
      await getHomeParts().then((res) => {
        console.log(res)
        setProducts(res.products)
      })
    }
    getAllCategories()
    getAllHomeParts()
  }, [])

  const Parts = ({ categories, products }) => {
    return (
      categories &&
      categories?.map((category, key) => (
        <div className="col-md-6 overflow-hidden" key={key}>
          <div className="parts d-flex justify-content-between align-items-center">
            <h3 className="m-0">{category.name?.name}</h3>
            <div className="img">
              {products.map(
                (product, key) =>
                  product.category._id === category._id && (
                    <Link href={`/products/${product._id}`}>
                      <a>
                        <img
                          src={product.featuredImage?.url}
                          alt="box"
                          key={key}
                          width={70}
                          height={70}
                        />
                      </a>
                    </Link>
                  )
              )}
            </div>
          </div>
        </div>
      ))
    )
  }
  return (
    <>
      <div className="parts_drone">
        <div className="container">
          <div className="content">
            <div className="text-content text-center">
              <h2 className="section_title text-white">Drone Parts</h2>
            </div>
            <div className="row">
              <Parts categories={categories} products={products} />
            </div>
            <div className="btns d-flex justify-content-center">
              <Link href="/products">
                <a className="btn btn-blue-grad">CHECK ALL CATEGORY</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .parts_drone {
          background-color: #1f1f1f;
          padding: 100px 0;
          color: #fff;
        }
        .parts_drone .text-content {
          margin-bottom: 75px;
        }
        .parts_drone .parts {
          padding-bottom: 18px;
          border-bottom: 1px solid #454545;
          margin-bottom: 20px;
          cursor: pointer;
        }
        .parts_drone .parts h3 {
          font-size: 25px;
          transition: 0.4s;
        }
        .parts_drone .parts:hover h3 {
          font-style: italic;
        }
        .parts_drone .parts .img {
          transform: translateX(82px);
          transition: 0.4s;
        }
        .parts_drone .parts:hover .img {
          transform: translateX(0px);
        }
        .parts_drone .btns {
          margin-top: 60px;
        }
      `}</style>
    </>
  )
}

export default HomeDroneParts
