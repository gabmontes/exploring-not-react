// Wrap it all in an IIFE to avoid interferences with the global context.
;(function (global) {
  'use strict'

  // It looks like we just need to implement `notReactDOM` as a very simple
  // function that only updates the HTML content of an element!
  global.notReactDOM = {
    render (html, element) {
      element.innerHTML = html
    }
  }
})(this)
