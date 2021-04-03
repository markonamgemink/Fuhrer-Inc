export default function ({ app, redirect }) {
  if (!app.$cookies.get('token')) {
    return redirect('/admin/login')
  } else if (!app.$cookies.get('user').role === 'admin') {
    return redirect('/admin/login')
  }
}
