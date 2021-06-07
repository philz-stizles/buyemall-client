import axios from 'axios'

const baseUrl = process.env.REACT_APP_API_URL

export const createCoupon = async (data) => await axios.post(`${baseUrl}/coupons`, data)

export const getCoupons = async () => await axios.get(`${baseUrl}/coupons`)

export const removeCoupon = async (id) => await axios.delete(`${baseUrl}/coupons/${id}`)
