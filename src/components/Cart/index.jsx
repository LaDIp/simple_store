import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  decProductAction,
  delProductAction,
  incProductAction,
} from '../../store/cartReducer'
import style from './Cart.module.css'

function Cart() {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.cart)

  const [visible, setVisible] = useState(false)

  const showCart = () => {
    setVisible(
      cart.products?.length === 0 || Object.keys(cart).length === 0
        ? false
        : !visible
    )
  }

  const delProduct = (product) => {
    setVisible(Object.keys(cart.products).length === 1 ? false : true)
    dispatch(delProductAction(product))
  }

  const incProduct = (product) => {
    dispatch(incProductAction(product))
  }
  const decProduct = (product) => {
    dispatch(decProductAction(product))
  }

  console.log(cart)
  return (
    <>
      <button className={style.cartButton} onClick={showCart}>
        Cart<span>&nbsp;</span>
        {cart.products?.length > 0 &&
          cart.products
            ?.reduce(
              (accumulator, currentValue) =>
                accumulator +
                currentValue.product.price * currentValue.quantity,
              0
            )
            .toFixed(2)}
      </button>
      {visible ? (
        <table className={style.cart}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Amount</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>
            {cart.products?.map((product) => (
              <tr className={style.cartItems}>
                <td>{product.product.title}</td>
                <td>
                  <button
                    onClick={() => decProduct(product)}
                    disabled={product.quantity === 1 ? 'disabled' : null}
                  >
                    -
                  </button>
                  {product.quantity}
                  <button onClick={() => incProduct(product)}>+</button>
                </td>
                <td>{product.product.price.toFixed(2)}</td>
                <td>
                  <button onClick={() => delProduct(product)}>X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </>
  )
}

export default Cart
