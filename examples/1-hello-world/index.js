function helloWorldComponent() {
  return '<h1>Hello, world!</h1>'
}

$(function () {
  notReactDOM.render(
    helloWorldComponent,
    document.getElementById('root')
  )
})
