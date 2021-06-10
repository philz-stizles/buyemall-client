import axios from 'axios'

const baseUrl = process.env.REACT_APP_API_URL

export const createOrder = async (stripeResponse) =>
  await axios.post(`${baseUrl}/orders`, { stripeResponse })

export const getUserOrders = async () => await axios.get(`${baseUrl}/orders`)

export const getOrders = async () => await axios.get(`${baseUrl}/orders`)
