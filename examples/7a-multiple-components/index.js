const numbers = [1, 2, 3, 4, 5]

const listItems = numbers.map(number => `
  <li>${number}</li>
`).join('')

NotReactDom.render(
  `<ul>${listItems}</ul>`,
  document.getElementById('root')
)
