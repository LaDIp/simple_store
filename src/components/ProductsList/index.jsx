import Product from '../Product'
import style from './ProductsList.module.css'

function ProductsList({ products }) {
  return (
    <ul className={style.productsList}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  )
}

export default ProductsList
