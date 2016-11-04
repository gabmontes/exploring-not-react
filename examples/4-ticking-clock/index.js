function tick() {
  function elementComponent() {
    return `
      <div>
        <h1>Hello, world!</h1>
        <h2>It is ${new Date().toLocaleTimeString()}.</h2>
      </div>
    `
  }
  notReactDOM.render(
    elementComponent,
    document.getElementById('root')
  )
}

$(function () {
  setInterval(tick, 1000)
})
