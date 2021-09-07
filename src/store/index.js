import { createStore, combineReducers, applyMiddleware } from 'redux'
import { productsReducer } from './productsReducer'
import { cartReducer } from './cartReducer.js'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { categoriesReducer } from './categoriesReducer'

const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  cart: cartReducer,
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
