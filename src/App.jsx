import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchCategory,
  fetchProducts,
  getCategoryAction,
  getProductsAction,
} from './store/productsReducer'
import ProductsList from './ProductsList'
import Cart from './Cart'
import './App.css'
import { fetchCategories } from './store/categoriesReducer'
import { useRef } from 'react'
import { sortMethods, sortProducts } from './utils/sortProducts'
import { filterProducts } from './utils/filterProducts'

function App() {
  const dispatch = useDispatch()
  const [category, setCategory] = useState('all')
  const [sortMethod, setSortMethod] = useState('default')
  const products = useSelector((state) => state.products.products)
    .filter(filterProducts(category))
    .sort(sortProducts(sortMethod))
  const categories = useSelector((state) => state.categories.categories)
  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(fetchCategories())
  }, [])

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
        <Cart />
        <select onChange={(e) => changeCategory(e)}>
          <option disabled selected>
            Select category
          </option>
          <option value='all'>all</option>
          {categories.map((category) => (
            <option value={category}>{category}</option>
          ))}
        </select>
        <select onChange={(e) => changeSortMethod(e)}>
          <option disabled selected>
            Select sort method
          </option>
          {sortMethods.map((method) => (
            <option value={method}>{method}</option>
          ))}
        </select>
        <ProductsList products={products} />
      </div>
    </>
  )
}

export default App
