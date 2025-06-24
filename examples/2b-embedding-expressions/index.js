function formatName (user) {
  return `${user.firstName} ${user.lastName}`
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
}

function getGreeting (user) {
  if (user) {
    return `<h1>Hello, ${formatName(user)}!</h1>`
  }
  return '<h1>Hello, Stranger.</h1>'
}

NotReactDom.render(
  getGreeting(user),
  document.getElementById('root')
)
NotReactDom.render(
  getGreeting(),
  document.getElementById('root2')
)
