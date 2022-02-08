import React, { useState, useEffect } from 'react'
import Layout from '../../components/layouts/layout'
import { productSearchPaginate } from '../../libs/products'
import { allCategories } from '../../libs/category'
import { withRouter, useRouter } from 'next/router'
import ProductCard from '../../components/product/productCard'
import BlockUi from 'react-block-ui'
import 'react-block-ui/style.css'

export async function getServerSideProps({ query }) {
  const page = Number(query.page) || 1
  const categories = await allCategories()

  return {
    props: {
      page,
      categories,
    },
  }
}

function Products({ data, page, categories }) {
  const [loading, setLoading] = useState(false)
  const [productResult, setProductResult] = useState([])
  const [category, setCategory] = useState('')
  const [noProducts, setNoProducts] = useState(false)
  const router = useRouter()

  useEffect(() => {
    productResult.length < 1 && setLoading(true)
  }, [productResult])

  const previous = () => router.replace(`/products/?page=${page - 1}`)
  const next = () => router.replace(`/products/?page=${page + 1}`)

  const handleCategory = async (e) => {
    setLoading(true)
    let category = await e.target.value
    router.replace('products?page=1')
    setCategory(category)
  }

  useEffect(() => {
    async function filterProducts(category, page) {
      await productSearchPaginate(category, page).then((res) => {
        if (res.total === 0) {
          setNoProducts(true)
          setLoading(false)
        } else {
          setNoProducts(false)
        }
        setProductResult(res)
        setLoading(false)
      })
    }
    filterProducts(category, page)
  }, [category, page])

  return (
    <>
      <Layout>
        <div className="browse-products px-0">
          <div className="product_header header text-center text-white">
            <h1 className="hero_title">Browse Products</h1>
          </div>
          <BlockUi tag="div" blocking={loading}>
            <div className="fpv-browse">
              <div className="container ">
                <div className="filter-products">
                  <h4>Filter By</h4>

                  <div className="row mt-20">
                    <div className="col-sm-3">
                      <select
                        name="filter-option"
                        className="fpv-filter"
                        id="category-filter"
                        onChange={handleCategory}
                      >
                        <option value="">Category</option>
                        {categories?.map((category, key) => (
                          <option value={category._id} key={key}>
                            {category.name.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                {noProducts ? (
                  <div className="error mt-5">
                    <h3 className="mb-20 mx20">NO PRODUCTS AVAILABLE </h3>
                    <div className="error-img">
                      <img
                        className="drone_icon error_icon"
                        src="/img/drone_icon.png"
                        alt="error-img"
                      />
                      <img
                        className="cancel_icon error_icon"
                        src="/img/error_icon.png"
                        alt="error-img"
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="fpv-products mt-40">
                      <div className="row">
                        {productResult.products && (
                          <ProductCard products={productResult.products} />
                        )}
                      </div>
                    </div>

                    <div className="pagination mt-5">
                      <button
                        type="button"
                        href="#"
                        className={
                          page === 1
                            ? 'pagination-button mr-20 disabled'
                            : 'pagination-button mr-20'
                        }
                        onClick={previous}
                        text="PREVIOUS"
                        disabled={page === 1}
                      >
                        <i className="fas fa-angle-double-left"></i>
                        <p className="px14 ml-15">PREVIOUS</p>
                      </button>
                      <button
                        type="button"
                        href="#"
                        className={
                          page === productResult.lastPage ||
                          productResult.lastPage === 0
                            ? 'pagination-button disabled'
                            : 'pagination-button'
                        }
                        onClick={next}
                        disabled={
                          page === productResult.lastPage ||
                          productResult.lastPage === 0
                        }
                      >
                        <p className="px14 mr-15">NEXT</p>
                        <i className="fas fa-angle-double-right"></i>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </BlockUi>
        </div>
      </Layout>
      <style jsx>{`
        .mb-20 {
          margin-bottom: 20px;
        }
        .browse-products .mr-15 {
          margin-right: 15px;
        }
        .browse-products .ml-15 {
          margin-left: 15px;
        }
        .browse-products .mr-20 {
          margin-right: 20px;
        }
        .browse-products .mb-40 {
          margin-bottom: 40px;
        }
        .browse-products .fpv-browse {
          background: #f0f1f2;
          padding: 40px 0;
        }
        .browse-products .filter-products .fpv-filter {
          border: none;
          outline: none;
          background: white;
          font-size: 16px;
          padding: 10px;
          width: 100%;
        }
        .browse-products .fpv-products .product-box {
          cursor: pointer;
        }
        .browse-products .fpv-products .image-box {
          position: relative;
        }
        .browse-products .fpv-products .product-overlay {
          height: 100%;
          width: 100%;
          position: absolute;
          z-index: 20;
          background: rgba(59, 24, 198, 0.4);
          content: '';
          display: none;
        }
        .browse-products .fpv-products .image-box:hover .product-overlay {
          display: block;
        }
        .browse-products .fpv-products .product-img {
          position: relative;
          z-index: 10;
        }

        .btn .btn-light {
          position: absolute;
          margin-left: 20px;
        }

        .browse-products .pagination {
          display: flex;
          justify-content: end;
        }
        .browse-products .pagination-button p {
          margin-bottom: 0;
        }
        .browse-products .pagination-button {
          display: flex;
          padding: 10px 20px;
          border-radius: 5px;
          border: none;
          color: white;
          align-items: center;
          background: linear-gradient(
            129.96deg,
            #1562b6 15.93%,
            #3b18c6 90.61%
          );
        }

        .browse-products .disabled {
          opacity: 0.7;
        }

        .error {
          background: rgba(255, 255, 255, 0.6);
          text-align: center;
          padding: 30px;
          margin-left: 100px;
          margin-right: 80px;
        }
        .error-img {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .drone_icon {
          position: absolute;
        }
        .cancel_icon {
          margin-left: 4px;
        }
      `}</style>
    </>
  )
}

export default withRouter(Products)
