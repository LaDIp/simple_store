export const filterProducts = (category) => (product) => {
  return category === 'all' ? product : product.category === category
}
