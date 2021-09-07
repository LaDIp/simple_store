import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductAction } from '../store/cartReducer'

// import style from './Product.module.css'

function Product({ product }) {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.cart)

  const addCart = () => {
    let newProduct = { product: product, quantity: 1 }
    dispatch(addProductAction(newProduct))
  }

  return (
    <li className={style.product} id={product.id} onClick={null}>
      <img className={style.img} src={product.image} alt='' />
      <p className={style.title}>{product.title}</p>
      <p className={style.price}>${product.price}</p>
      <div className={style.buttons}>
        <button className={style.addCart} onClick={addCart}>
          Add to cart
        </button>
        <button className={style.showMore}>Show more</button>
      </div>
    </li>
  )
}

export default Product
