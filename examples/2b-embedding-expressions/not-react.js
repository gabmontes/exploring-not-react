;(function (global) {
  global.NotReactDom = {
    render (html, element) {
      element.innerHTML = html
    }
  }
})(this)
