export const state = () => ({
  sideBarOpen: false,
  activeMenu: null,
})

export const getters = {
  sideBarOpen: (state) => state.sideBarOpen,
  activeMenu: (state) => state.activeMenu,
}

export const mutations = {
  toggleSideBar(state) {
    state.sideBarOpen = !state.sideBarOpen
  },
  toggleActiveMenu(state, menu) {
    state.activeMenu = menu
  },
}
