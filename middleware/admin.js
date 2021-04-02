export default function ({ app, redirect }) {
  if (!app.$cookies.get('token')) {
    if (app.$cookies.get('user') && !app.$cookies.get('user').role === 'admin')
      return redirect('/login')
  }
}
