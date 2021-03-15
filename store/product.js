export const state = () => ({
  product: {
    id: Number,
    name: String,
    desc: String,
    price: Number,
    stock: Number,
    image: String,
    size: String,
    category: String,
  },
  products: [],
})

export const getters = {
  getProducts: (state) => state.products,
  getProduct: (state) => state.product,
}

export const mutations = {
  resetState(state) {
    state.products = null
    state.product = null
  },
  setProducts(state, products) {
    state.products = products
  },
  setProduct(state, product) {
    state.product = product
  },
}

export const actions = {
  async getAllProduct({ commit }, params) {
    return await this.$axios
      .get('products/distinct', params)
      .then(({ data }) => {
        commit('setProducts', data.data)
        return data
      })
      .catch((err) => ({
        status: err.response.status,
        msg: err.response.data.error,
      }))
  },
  async getProduct({ commit }, id) {
    return await this.$axios
      .get(`products/${id}`)
      .then(({ data }) => {
        commit('setProduct', data.data)
        return data
      })
      .catch((err) => ({
        status: err.response.status,
        msg: err.response.data.error,
      }))
  },
}
