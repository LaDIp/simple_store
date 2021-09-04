import React from 'react'
import ReactDOM from 'react-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './store/productsReducer'
import ProductsList from './ProductsList'
import Cart from './Cart'
import './App.css'

function App() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  console.log(products)
  return (
    <>
      <div className='contaner'>
        <Cart />
        <ProductsList products={products} />
      </div>
    </>
  )
}

export default App
