import React, { useState, useEffect } from 'react'
import { allCategories } from '../../libs/category'
import { getHomeParts } from '../../libs/products'
import Link from 'next/link'

const HomeDroneParts = () => {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  useEffect(() => {
    async function getAllCategories() {
      let res = await allCategories() 
      setCategories(res)
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
      categories.map((category, key) => (
        <div className="col-lg-6" key={key}>
          <div className="parts d-flex justify-content-between align-items-center">
            <h3 className="m-0">{category.name?.name}</h3>
            <div className="img">
              {products.map(
                (product, key) =>
                  product.category._id === category._id && (
                    <Link href={`/products/${product._id}`}>
                      <a>
                        <img className="part-img"
                          src={product.featuredImage?.url}
                          alt="box"
                          key={key}
                        />
                      </a>
                    </Link>
                  )
              )}
            </div>
          </div>
          <style jsx>{`
          .parts {
          height:110px;
          border-bottom: 1px solid #454545;
          cursor: pointer;
          overflow: hidden;
          position:relative;
        }
        .parts h3 {
          font-size: 25px;
          transition: 0.4s;
        }
        .parts .img {
          transform: translateX(75px);
          transition: 0.4s;
          display:flex;
          flex-wrap:nowrap;
          align-items:center;
        }
        .parts:hover .img {
          transform: translateX(0px);
        }
        .parts .part-img{
          width:76px;
          padding:0 3px;
        }
          `}</style>
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
                <a className="btn btn-blue-grad"><span className="btn-text">CHECK ALL CATEGORY</span></a>
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
        .parts_drone .btn-text{
        position:relative;
        z-index:20;
        color:#fff;
        }
        .parts_drone .text-content {
          position:relative;
          margin-bottom: 75px;
        }
        .parts_drone .section_title::before{
          display:block;
          content:'';
          background: #3b18c6;
          height:5px;
          width:85px;
          top:0;
          margin: 0 auto;
          margin-bottom:20px;
        }
        .parts_drone .btns {
          margin-top: 60px;
        }
      `}</style>
    </>
  )
}

export default HomeDroneParts
