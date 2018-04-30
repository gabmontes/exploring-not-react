function welcome (props) {
  return `<h1>Hello, ${props.name}</h1>`
}

function app () {
  return `
    <div>
      ${welcome({ name: 'Sara' })}
      ${welcome({ name: 'Cahal' })}
      ${welcome({ name: 'Edite' })}
    </div>
  `
}

notReactDOM.render(
  app(),
  document.getElementById('root')
)
