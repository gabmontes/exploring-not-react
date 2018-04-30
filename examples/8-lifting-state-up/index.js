function boilingVerdict (props) {
  if (props.celsius >= 100) {
    return `<p>The water would boil.</p>`
  }
  return `<p>The water would not boil.</p>`
}

const state = {
  temperature: '',
  scale: 'c'
}

function setState (newState) {
  Object.assign(
    state,
    typeof newState === 'function' ? newState(state) : newState
  )
  render()
}

function handleCelsiusChange (e) {
  setState({ scale: 'c', temperature: e.value })
}

function handleFahrenheitChange (e) {
  setState({ scale: 'f', temperature: e.value })
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

function toCelsius (fahrenheit) {
  return (fahrenheit - 32) * 5 / 9
}

function toFahrenheit (celsius) {
  return (celsius * 9 / 5) + 32
}

function tryConvert (temperature, convert) {
  const input = parseFloat(temperature)
  if (Number.isNaN(input)) {
    return ''
  }
  const output = convert(input)
  const rounded = Math.round(output * 1000) / 1000
  return rounded.toString()
}

function temperatureInput (props) {
  const temperature = props.temperature
  const scale = props.scale
  const onTemperatureChange = props.onTemperatureChange

  return `
    <fieldset>
      <legend>Enter temperature in ${scaleNames[scale]}:</legend>
      <input
        value="${temperature}"
        onchange=${onTemperatureChange}(this) />
    </fieldset>
  `
}

function calculator (props) {
  const scale = props.scale
  const temperature = props.temperature

  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
  const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

  return `
    <div>
      ${temperatureInput({ scale: 'c', temperature: celsius, onTemperatureChange: 'handleCelsiusChange' })}
      ${temperatureInput({ scale: 'f', temperature: fahrenheit, onTemperatureChange: 'handleFahrenheitChange' })}
      ${boilingVerdict({ celsius: parseFloat(celsius) })}
    </div>
  `
}

function render () {
  notReactDOM.render(
    calculator(state),
    document.getElementById('root')
  )
}

render()
