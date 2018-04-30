;(function (global) {
  global.notReactDOM = {
    render (html, element) {
      element.innerHTML = html
    }
  }
})(this)
