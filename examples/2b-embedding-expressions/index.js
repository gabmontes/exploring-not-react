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

notReactDOM.render(
  getGreeting(user),
  document.getElementById('root')
)
notReactDOM.render(
  getGreeting(),
  document.getElementById('root2')
)
