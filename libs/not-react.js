(function (global) {
  global.notReactDOM = {
    render: function (component, element) {
      element.innerHTML = typeof component === 'string' ? component : component()
    }
  }
})(this)
