import { defaultState, GET_CATEGORIES } from './actionTypes'

export const categoriesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return { ...state, categories: action.payload }
    default:
      return state
  }
}

export const getCategoriesAction = (payload) => ({
  type: GET_CATEGORIES,
  payload,
})

export const fetchCategories = (category) => {
  return function (dispatch) {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((json) => dispatch(getCategoriesAction(json)))
  }
}
