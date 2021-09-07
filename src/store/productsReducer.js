import { defaultState, GET_CATEGORY, GET_PRODUCTS } from './actionTypes'

export const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.payload }
    default:
      return state
  }
}

export const getProductsAction = (payload) => ({ type: GET_PRODUCTS, payload })

export const fetchProducts = () => {
  return function (dispatch) {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => dispatch(getProductsAction(json)))
  }
}
