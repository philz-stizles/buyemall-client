import axios from 'axios'

const baseUrl = process.env.REACT_APP_API_URL

export const createCategory = async (data) => await axios.post(`${baseUrl}/categories`, data)

export const getCategories = async () => await axios.get(`${baseUrl}/categories`)

export const getCategory = async (slug) => await axios.get(`${baseUrl}/categories/${slug}`)

export const updateCategory = async (slug, data) =>
  await axios.put(`${baseUrl}/categories/${slug}`, data)

export const removeCategory = async (slug) => await axios.delete(`${baseUrl}/categories/${slug}`)

export const getCategorySubs = async (id) =>
  await axios.get(`${baseUrl}/categories/subCategories/${id}`)
