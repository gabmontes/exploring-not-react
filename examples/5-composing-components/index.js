function welcomeComponent({ name }) {
  return `<h1>Hello, ${name}</h1>`
}

function appComponent() {
  return `
    <div>
      ${welcomeComponent({ name: 'Sara' })}
      ${welcomeComponent({ name: 'Cahal' })}
      ${welcomeComponent({ name: 'Edite' })}
    </div>
  `
}

$(function () {
  notReactDOM.render(
    appComponent,
    document.getElementById('root')
  )
})
