import axios from 'axios'

const baseUrl = process.env.REACT_APP_API_URL

export const createProduct = async (product) => await axios.post(`${baseUrl}/products`, product)

export const upload = async (uri) => await axios.post(`${baseUrl}/products/upload`, { image: uri })

export const removeImage = async (upload_id) =>
  await axios.delete(`${baseUrl}/products/upload/${upload_id}`)

export const getProductsByLimit = async (limit) =>
  await axios.get(`${baseUrl}/products?limit=${limit}`)

export const removeProduct = async (slug) => await axios.delete(`${baseUrl}/products/${slug}`)

export const getProduct = async (slug) => await axios.get(`${baseUrl}/products/${slug}`)

export const updateProduct = async (slug, product) =>
  await axios.put(`${baseUrl}/products/${slug}`, product)

export const getFilteredProducts = async ({ page, limit, sort, order }) =>
  await axios.post(`${baseUrl}/products/filtered`, {
    limit,
    sort,
    order,
    page
  })

// export const getProductsTotal = async () => await axios.get(`${baseUrl}/products/total`)

// export const setProductRating = async (productId, star, authtoken) =>
//   await axios.put(
//     `${baseUrl}/products/${productId}/set-rating`,
//     { star },
//     { headers: { authtoken } }
//   )

export const getRelatedProducts = async (productId) =>
  await axios.get(`${baseUrl}/products/related/${productId}`)

// export const getProductsBySearch = async (arg) => await axios.post(`${baseUrl}/search/filters`, arg)
