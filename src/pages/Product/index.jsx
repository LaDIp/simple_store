import Rating from '@material-ui/lab/Rating'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addProductAction } from '../../store/cartReducer'
import { fetchProducts } from '../../store/productsReducer'
import style from './Product.module.css'

function Product({
  match: {
    params: { id },
  },
}) {
  const dispatch = useDispatch()
  const product = useSelector((state) => state.products.products).filter(
    (product) => product.id === Number(id)
  )[0]

  const addCart = () => {
    let newProduct = { product: product, quantity: 1 }
    dispatch(addProductAction(newProduct))
  }

  if (!product) {
    return <h2>Product not found!</h2>
  }

  return (
    <div className='contaner'>
      <Link className={style.back} to='/'>
        &lt; Back
      </Link>
      <div className={style.product}>
        <img className={style.img} src={product.image} alt='' />
        <article className={style.productArticle}>
          <h1 className={style.title}>{product.title}</h1>
          <p className={style.description}>{product.description}</p>
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
          </div>
        </article>
      </div>
    </div>
  )
}

export default Product
