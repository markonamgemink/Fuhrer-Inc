export const state = () => ({
  authenticated: false,
  token: null,
  user: null,
})

export const getters = {
  getUser: (state) => state.user,
  getToken: (state) => window.$nuxt.$cookies.get('token') || state.token,
  getAuthenticated: (state) => state.authenticated,
}

export const mutations = {
  resetState(state) {
    state.authenticated = false
    state.token = null
    state.user = null
  },
  setAuthenticated(state, authenticated) {
    state.authenticated = authenticated
  },
  setUser(state, user) {
    state.user = user
  },
  setToken(state, token) {
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
        this.$axios.defaults.headers.common.Authorization = `Bearer ${data.meta.token}`
        localStorage.setItem('token', data.meta.token)
        window.$nuxt.$cookies.set('token', data.meta.token, {
          maxAge: 60 * 60,
        })
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
        this.$axios.defaults.headers.common.Authorization = `Bearer ${data.meta.token}`
        window.$nuxt.$cookies.set('token', data.meta.token, {
          maxAge: 60 * 60,
        })
        return data
      })
      .catch((err) => err.message)
  },
  async getUser({ commit }) {
    return await this.$axios
      .get('user')
      .then(({ data }) => {
        commit('setUser', data.data)
        return data
      })
      .catch((err) => ({
        status: err.response.status,
        msg: err.response.data.error,
      }))
  },
  logout({ commit }) {
    commit('resetState')
    commit('setAuthenticated', false)
    delete this.$axios.defaults.headers.common.Authorization
    window.$nuxt.$cookies.remove('token')
  },
}
