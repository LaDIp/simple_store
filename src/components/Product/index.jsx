import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductAction } from '../../store/cartReducer'
import Rating from '@material-ui/lab/Rating'
import style from './Product.module.css'
import { Link } from 'react-router-dom'

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
      <Rating
        className={style.rating}
        name='read-only'
        precision={0.1}
        value={product.rating.rate}
        readOnly
      />
      <p className={style.price}>${product.price}</p>
      <div className={style.buttons}>
        <button className={style.addCart} onClick={addCart}>
          Add to cart
        </button>
        <Link to={`/product/${product.id}`} className={style.showMore}>
          Show more
        </Link>
      </div>
    </li>
  )
}

export default Product
