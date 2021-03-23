export const state = () => ({
  authenticated: false,
  token: null,
  user: null,
})

export const getters = {
  getUser: (state) => state.user,
  getToken: (state) => state.token,
  getAuthenticated: (state) => state.authenticated,
}

export const mutations = {
  resetState(state) {
    state.authenticated = false
    state.token = null
    state.user = null
    this.$cookies.remove('user')
    this.$cookies.remove('token')
  },
  setAuthenticated(state, authenticated) {
    state.authenticated = authenticated
  },
  setUser(state, user) {
    this.$cookies.set('user', user, {
      maxAge: 60 * 60,
    })
    state.user = user
  },
  setToken(state, token) {
    this.$cookies.set('token', token, {
      maxAge: 60 * 60,
    })
    state.token = token
  },
}

export const actions = {
  async login({ commit }, params) {
    return await this.$axios
      .post('login', params)
      .then(({ data }) => {
        commit('setToken', data.meta.token)
        commit('setUser', data.data)
        commit('setAuthenticated', true)

        return data
      })
      .catch((err) => ({
        status: err.response.status,
        msg: err.response.data.error,
      }))
  },
  async register({ commit }, params) {
    return await this.$axios
      .post('register', params)
      .then(({ data }) => {
        if (data.email) {
          return data
        }
        commit('setToken', data.meta.token)
        commit('setUser', data.data)
        commit('setAuthenticated', true)

        return data
      })
      .catch((err) => err.message)
  },
  async getUser({ commit }) {
    return await this.$axios
      .get('user')
      .then(({ data }) => {
        commit('setUser', data.data)

        return data.data
      })
      .catch((err) => ({
        status: err.response.status,
        msg: err.response.data.error,
      }))
  },
  async updateUser({ dispatch, state }, params) {
    return await this.$axios
      .post('user', params, {
        headers: {
          Authorization: `Bearer ${state.token}`,
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(({ data }) => {
        dispatch('getUser')
        return data.data
      })
      .catch((err) => {
        throw err
      })
  },
  logout({ commit }) {
    commit('resetState')
    commit('setAuthenticated', false)
    delete this.$axios.defaults.headers.common.Authorization
  },
}
