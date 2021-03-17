export default function ({ app, redirect }) {
  if (!app.$cookies.get('token')) {
    return redirect('/login')
  } else {
    app.$axios.defaults.headers.common.Authorization = `Bearer ${app.$cookies.get(
      'token'
    )}`
  }
}
