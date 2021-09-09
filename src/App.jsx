import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter,
} from 'react-router-dom'
import Product from './pages/Product'
import Home from './pages/Home/'
import { useDispatch } from 'react-redux'
import { fetchProducts } from './store/productsReducer'
import { fetchCategories } from './store/categoriesReducer'
import './App.css'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(fetchCategories())
  }, [])

  return (
    <HashRouter basename='/'>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/product/:id' component={Product} />
      </Switch>
    </HashRouter>
  )
}

export default App
