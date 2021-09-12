import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchCategory,
  fetchProducts,
  getCategoryAction,
  getProductsAction,
} from '../../store/productsReducer'
import ProductsList from '../../components/ProductsList'
import Cart from '../../components/Cart'
import style from './Home.module.css'
import { fetchCategories } from '../../store/categoriesReducer'
import { useRef } from 'react'
import { sortMethods, sortProducts } from '../../utils/sortProducts'
import { filterProducts } from '../../utils/filterProducts'
import Select from '../../components/Select'

function Home() {
  const dispatch = useDispatch()
  const [category, setCategory] = useState('all')
  const [sortMethod, setSortMethod] = useState('default')
  const products = useSelector((state) => state.products.products)
    .filter(filterProducts(category))
    .sort(sortProducts(sortMethod))
  const categories = useSelector((state) => state.categories.categories)

  const changeCategory = (e) => {
    e.preventDefault()
    setCategory(e.target.value)
  }

  const changeSortMethod = (e) => {
    e.preventDefault()
    setSortMethod(e.target.value)
  }

  return (
    <>
      <div className='contaner'>
        <div className='panel'>
          <Select
            id='category'
            label='Category'
            disabledOption='Select category'
            defaultOption={{ value: 'all', title: 'All' }}
            options={categories.map((category) => {
              return {
                value: category,
                title: category.charAt(0).toUpperCase() + category.slice(1),
              }
            })}
            onChange={changeCategory}
          ></Select>
          <Select
            id='sort'
            label='Sort by'
            disabledOption='Select sort method'
            options={sortMethods}
            onChange={changeSortMethod}
          ></Select>
          <Cart />
        </div>
        {products?.length === 0 ? (
          <h2>Loading...</h2>
        ) : (
          <ProductsList products={products} />
        )}
      </div>
    </>
  )
}

export default Home
