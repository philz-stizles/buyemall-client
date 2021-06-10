import axios from 'axios'

const baseUrl = process.env.REACT_APP_API_URL

export const addUserCart = async (cart) => await axios.post(`${baseUrl}/carts`, { cart })

export const getUserCart = async () => await axios.get(`${baseUrl}/carts`)

export const emptyUserCart = async () => await axios.delete(`${baseUrl}/carts`)

export const applyCoupon = async (coupon) => await axios.post(`${baseUrl}/carts/coupon`, { coupon })
