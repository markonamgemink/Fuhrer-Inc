export const state = () => ({
  sideBarOpen: false,
})

export const getters = {
  sideBarOpen: (state) => state.sideBarOpen,
}

export const mutations = {
  toggleSideBar(state) {
    state.sideBarOpen = !state.sideBarOpen
  },
}
