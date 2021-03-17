export const state = () => ({
  provinces: null,
  cities: null,
})

export const getters = {
  getCities: (state) => state.cities,
  getProvinces: (state) => state.provinces,
}

export const mutations = {
  setProvinces(state, provinces) {
    state.provinces = provinces
  },
  setCities(state, cities) {
    state.cities = cities
  },
}

export const actions = {
  async getProvinces({ commit }) {
    this.$axios.setHeader('key', '4cf3b7e938b1e97fe5e325c60bb9bb61')
    return await this.$axios
      .get('https://api.rajaongkir.com/starter/province')
      .then(({ data }) => {
        commit('setProvinces', data.rajaongkir.results)
        return data.rajaongkir.results
      })
      .catch((err) => ({ msg: err.msg }))
  },
  async getCities({ commit }) {
    this.$axios.setHeader('key', '4cf3b7e938b1e97fe5e325c60bb9bb61')
    return await this.$axios
      .get('https://api.rajaongkir.com/starter/city')
      .then(({ data }) => {
        commit('setCities', data.rajaongkir.results)
        return data.rajaongkir.results
      })
      .catch((err) => ({ msg: err.msg }))
  },
}
