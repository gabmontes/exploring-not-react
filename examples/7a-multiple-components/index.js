const numbers = [1, 2, 3, 4, 5]

const listItems = numbers.map(number => `
  <li>${number}</li>
`).join('')

notReactDOM.render(
  `<ul>${listItems}</ul>`,
  document.getElementById('root')
)
