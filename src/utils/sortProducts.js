export const sortMethods = [
  { value: 'increase_price', title: 'Increase price' },
  { value: 'decrease_price', title: 'Decrease price' },
  { value: 'increase_rating', title: 'Increase rating' },
  { value: 'decrease_rating', title: 'Decrease rating' },
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
