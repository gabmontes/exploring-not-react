const state = {
  isToggleOn: true
}

function setState (fn) {
  Object.assign(state, fn(state))
  render()
}

function handleClick () {
  setState(prevState => ({
    isToggleOn: !prevState.isToggleOn
  }))
}

function toggle ({ isToggleOn }) {
  return `
    <button onclick="handleClick()">
      ${isToggleOn ? 'ON' : 'OFF'}
    </button>
  `
}

function render () {
  NotReactDom.render(
    toggle(state),
    document.getElementById('root')
  )
}

render()
