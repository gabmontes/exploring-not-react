function formatName(user) {
  return `${user.firstName} ${user.lastName}`
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
}

const greetUserComponent = function ({ user }) {
  if (user) {
    return `<h1>Hello, ${formatName(user)}!</h1>`
  }
  return '<h1>Hello, Stranger.</h1>'
}

$(function () {
  notReactDOM.render(
    () => greetUserComponent({ user }),
    document.getElementById('root1')
  )
  notReactDOM.render(
    () => greetUserComponent({}),
    document.getElementById('root2')
  )
})
