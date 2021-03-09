export default function ({ app, redirect }) {
  console.log(app.$cookies.get('token'))
  if (app.$cookies.get('token')) {
    return redirect('/')
  }
}
