import {
  defaultState,
  ADD_PRODUCT,
  DEL_PRODUCT,
  INC_PRODUCT,
  DEC_PRODUCT,
} from './actionTypes'

export const cartReducer = (state = defaultState, action) => {
  console.log(action)
  switch (action.type) {
    case ADD_PRODUCT:
      if (Object.keys(state.cart).length === 0) {
        return {
          ...state,
          cart: {
            id: null,
            userId: null,
            date: Date.now(),
            products: [action.payload],
          },
        }
      } else {
        const isItemInCart = state.cart.products.find(
          (item) => item.product.id === action.payload.product.id
        )
        if (isItemInCart) {
          return {
            ...state,
            cart: {
              ...state.cart,
              products: state.cart.products.map((item) => {
                if (item.product.id === action.payload.product.id)
                  return { ...item, quantity: item.quantity + 1 }
                return item
              }),
            },
          }
        }

        return {
          ...state,
          cart: {
            ...state.cart,
            products: [...state.cart.products, action.payload],
          },
        }
      }
    case DEL_PRODUCT:
      return {
        ...state,
        cart: {
          ...state.cart,
          products: state.cart.products.filter(
            (item) => item.product.id !== action.payload.product.id
          ),
        },
      }
    case INC_PRODUCT:
      return {
        ...state,
        cart: {
          ...state.cart,
          products: state.cart.products.map((item) => {
            if (item.product.id === action.payload.product.id)
              return { ...item, quantity: item.quantity + 1 }
            return item
          }),
        },
      }
    case DEC_PRODUCT:
      return {
        ...state,
        cart: {
          ...state.cart,
          products: state.cart.products.map((item) => {
            if (
              item.product.id === action.payload.product.id &&
              item.quantity > 1
            )
              return { ...item, quantity: item.quantity - 1 }
            return item
          }),
        },
      }
    default:
      return state
  }
}

export const addProductAction = (payload) => ({
  type: ADD_PRODUCT,
  payload: payload,
})
export const delProductAction = (payload) => ({
  type: DEL_PRODUCT,
  payload: payload,
})
export const incProductAction = (payload) => ({
  type: INC_PRODUCT,
  payload: payload,
})
export const decProductAction = (payload) => ({
  type: DEC_PRODUCT,
  payload: payload,
})
