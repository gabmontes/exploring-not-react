function formatName(user) {
  return `${user.firstName} ${user.lastName}`
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
}

const greetUser1Component = `<h1>Hello, ${formatName(user)}!</h1>`

$(function () {
  notReactDOM.render(
    greetUser1Component,
    document.getElementById('root')
  )
})
