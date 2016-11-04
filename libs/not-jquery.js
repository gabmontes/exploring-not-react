(function (global) {
  const jqMethods = {
    // $().append()
    append: function (content) {
      this._elements.forEach(function (elem) {
        content.each(function () {
          elem.appendChild(this)
        })
      })
      return this
    },
    // $().click()
    click: function (handler) {
      this._elements.forEach(function (elem) {
        elem.addEventListener('click', handler)
      })
      return this
    },
    // $().css()
    css: function (properties) {
      this._elements.forEach(function (elem) {
        Object.keys(properties).forEach(function (prop) {
          elem.style[prop] = properties[prop]
        })
      })
      return this
    },
    // $().each()
    each: function (iterator) {
      this._elements.forEach(function (elem, i) {
        iterator.call(elem, i)
      })
      return this
    },
    // $().html()
    html: function (html) {
      this._elements.forEach(function (elem) {
        elem.innerHTML = html
      })
      return this
    },
    // $().text()
    text: function (text) {
      this._elements.forEach(function (elem) {
        elem.textContent = text
      })
      return this
    },
    // $().toggleClass()
    toggleClass: function (className) {
      this._elements.forEach(function (elem) {
        elem.classList.toggle(className)
      })
      return this
    }
  }
  function wrap(elements) {
    var wrapped = Object.create(jqMethods)
    wrapped._elements = elements
    return wrapped
  }
  // $(handler|html|selector)
  global.$ = global.$ || function (arg) {
    if (typeof arg === 'function') {
      // handler to execute on DOM ready
      const fn = arg
      if (document.readyState !== 'loading') {
        fn()
      } else {
        document.addEventListener('DOMContentLoaded', fn)
      }
      return this
    }
    let elements
    if (arg.trim().charAt(0) === '<') {
      // html string
      const html = arg
      const parent = document.createElement('div')
      parent.innerHTML = html
      elements = parent.children
    } else {
      // selector
      const selector = arg
      elements = document.querySelectorAll(selector)
    }
    return wrap([...elements])
  }
  // $.getJSON()
  global.$.getJSON = global.$.getJSON || function (url, callback) {
    if (global.fetch) {
      fetch(url)
        .then(response => response.json())
        .then(callback)
    } else {
      const request = new XMLHttpRequest()
      request.open('GET', url, true)
      request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
          callback(JSON.parse(request.responseText))
        }
      }
      request.send()
    }
  }
})(this)
