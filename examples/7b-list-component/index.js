function numberList (props) {
  const numbers = props.numbers
  const listItems = numbers.map((number) => `
    <li key=${number.toString()}>
      ${number}
    </li>
  `).join('')
  return `
    <ul>${listItems}</ul>
  `
}

const numbers = [1, 2, 3, 4, 5]
NotReactDom.render(
  numberList({ numbers }),
  document.getElementById('root')
)
