import axios from 'axios'

const baseUrl = process.env.REACT_APP_API_URL

export const createSubCategory = async (data) => {
  return await axios.post(`${baseUrl}/subCategories`, data)
}

export const getSubCategories = async () => await axios.get(`${baseUrl}/subCategories`)

export const getSubCategory = async (slug) => {
  return await axios.get(`${baseUrl}/sub-categories/${slug}`)
}

export const updateSubCategory = async (slug, data) => {
  return await axios.put(`${baseUrl}/subCategories/${slug}`, data)
}

export const removeSubCategory = async (slug) => {
  return await axios.delete(`${baseUrl}/subCategories/${slug}`)
}
