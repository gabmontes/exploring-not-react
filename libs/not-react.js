(function (global) {
  global.notReactDOM = {
    render: function (component, element) {
      element.innerHTML = typeof component === 'function' ? component() : component
    }
  }
})(this)
