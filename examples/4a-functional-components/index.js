function welcome (props) {
  return `<h1>Hello, ${props.name}</h1>`
}

const element = welcome({ name: 'Sara' })

notReactDOM.render(
  element,
  document.getElementById('root')
)
