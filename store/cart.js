export const state = () => ({
  carts: [],
  total: 0,
})

export const getters = {
  getCarts: (state) => state.carts,
  getTotal: (state) => state.total,
}

export const mutations = {
  resetState(state) {
    state.carts = null
    state.total = 0
  },
  setCarts(state, carts) {
    state.carts = carts
  },
  setTotal(state, total) {
    let newTotal = 0
    state.carts.map((cart) => {
      if (cart.id === total.id) {
        cart.total = total.qty
      }
      newTotal += cart.stock.price * cart.total
      return cart
    })
    state.total = newTotal
  },
  addCart(state, cart) {
    state.carts = [...state.carts, cart]
  },
  updateCart(state, cart) {
    const updatedCart = state.carts.findIndex((item) => item.id === cart.id)
    state.carts[updatedCart] = cart
  },
  removeCart(state, id) {
    state.carts = state.carts.filter(function (item) {
      return item.id !== id
    })
  },
}

export const actions = {
  async getAllCart({ commit }, params) {
    return await this.$axios
      .get('cart', params)
      .then(({ data }) => {
        commit('setCarts', data.data)
        return data
      })
      .catch((err) => ({
        status: err.response.status,
        msg: err.response.data.error,
      }))
  },
  async insertCart({ commit }, params) {
    return await this.$axios
      .post('cart', params)
      .then(({ data }) => {
        commit('addCart', data.data)
      })
      .catch((err) => ({
        status: err.response.status,
        msg: err.response.data.error,
      }))
  },
  async updateCart({ commit }, params) {
    return await this.$axios
      .post('cart', params)
      .then(({ data }) => {
        commit('updateCart', data.data)
      })
      .catch((err) => ({
        status: err.response.status,
        msg: err.response.data.error,
      }))
  },
  async deleteCart({ commit }, id) {
    return await this.$axios
      .post(`cart/${id}/delete`)
      .then(() => {
        commit('removeCart', id)
      })
      .catch((err) => ({
        status: err.response.status,
        msg: err.response.data.error,
      }))
  },
  async deleteAllCart({ commit }, params) {
    return await this.$axios
      .delete('cart/all', params)
      .then(() => {
        commit('resetState')
      })
      .catch((err) => ({
        status: err.response.status,
        msg: err.response.data.error,
      }))
  },
}
