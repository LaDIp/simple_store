export const sortMethods = [
  'increase_price',
  'decrease_price',
  'increase_rating',
  'decrease_rating',
]

export const sortProducts = (method) => {
  switch (method) {
    case 'increase_price':
      return (a, b) => a.price - b.price
    case 'decrease_price':
      return (a, b) => b.price - a.price
    case 'increase_rating':
      return (a, b) => a.rating.rate - b.rating.rate
    case 'decrease_rating':
      return (a, b) => b.rating.rate - a.rating.rate
    default:
      return
  }
}
