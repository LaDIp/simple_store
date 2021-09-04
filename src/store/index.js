import { createStore, combineReducers, applyMiddleware } from 'redux'
import { productsReducer } from './productsReducer'
import { cartReducer } from './cartReducer.js'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
