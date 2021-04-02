export const state = () => ({
  product: null,
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
    console.log(params)
    return await this.$axios
      .get('products', { params })
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
        commit('setProduct', data)
        return data
      })
      .catch((err) => ({
        status: err.response.status,
        msg: err.response.data.error,
      }))
  },
}
