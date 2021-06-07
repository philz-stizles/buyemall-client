import axios from 'axios'

const baseUrl = process.env.REACT_APP_API_URL

export const saveUserAddress = async (address) =>
  await axios.put(`${baseUrl}/users/address`, { address })

export const addToUserWishlist = async (productId) =>
  await axios.put(`${baseUrl}/users/wishlist/${productId}`)

export const getUserWishlist = async () => await axios.get(`${baseUrl}/users/wishlist`)

export const removeFromUserWishlist = async (productId) =>
  await axios.delete(`${baseUrl}/users/wishlist/${productId}`)
