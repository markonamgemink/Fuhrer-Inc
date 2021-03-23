export default function ({ $axios, store, app }) {
  if (app.$cookies.get('token')) {
    $axios.onRequest((config) => {
      if (config.headers.common.Authorization == null) {
        config.headers.common.Authorization =
          store.state.user.token || app.$cookies.get('token')
      }
    })
  }
}
