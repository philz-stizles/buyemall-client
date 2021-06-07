export const addItemToCart = (existingItems, newItem) => {
  const existingCartItem = existingItems.find((item) => item.id === newItem.id)
  if (existingCartItem) {
    return existingItems.map((item) =>
      item.id === newItem.id ? { ...item, count: item.count + 1 } : item
    )
  }

  return [...existingItems, { ...newItem, count: 1 }]
}

export const removeItemFromCart = (existingItems, newItem) => {
  const existingCartItem = existingItems.find((item) => item.id === newItem.id)
  if (existingCartItem) {
    return existingItems.map((item) =>
      item.id === newItem.id ? { ...item, count: item.count + 1 } : item
    )
  }

  return [...existingItems, { ...newItem, count: 1 }]
}

export const incrementCartItem = (existingItems, id) => {
  const existingCartItem = existingItems.find((item) => item.id === id)
  if (existingCartItem) {
    return existingItems.map((item) => (item.id === id ? { ...item, count: item.count + 1 } : item))
  }

  return existingItems
}

export const decrementCartItem = (existingItems, id) => {
  const existingCartItem = existingItems.find((item) => item.id === id)
  if (existingCartItem) {
    const filteredItems = existingItems.filter((item) => item.id !== id)
    if (existingCartItem.count <= 1) {
      return filteredItems
    }

    return existingItems.map((item) => (item.id === id ? { ...item, count: item.count - 1 } : item))
  }

  return existingItems
}

export const getItemsCount = (items) => {
  return items.reduce((accumulator, item) => accumulator + item.count, 0)
}

export const getTotalAmount = (items) => {
  return items.reduce((accumulator, item) => accumulator + item.count * item.price, 0)
}
