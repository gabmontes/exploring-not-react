// Wrap it in an UMD loader to allow usage in any environment.
;(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory)
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory()
  } else {
    root.NotReactDOM = factory()
  }
}(typeof self !== 'undefined' ? self : this, function () {
  // We just need to implement `NotReactDom` as a function that updates the HTML
  // content of an element!
  return {
    render (element, container) {
      container.innerHTML = element
    }
  }
}))
