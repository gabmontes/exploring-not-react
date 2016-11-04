let state = {
  isToggleOn: true
}

function setState(newState) {
  Object.assign(state, newState)
  render()
}

function handleClick() {
  setState({
    isToggleOn: !state.isToggleOn
  })
}

function toggleComponent({ isToggleOn }) {
  return `
    <button onclick="handleClick()">
      ${isToggleOn ? 'ON' : 'OFF'}
    </button>
  `
}

function render() {
  notReactDOM.render(
    () => toggleComponent(state),
    document.getElementById('root')
  )
}

$(function () {
  render()
})
