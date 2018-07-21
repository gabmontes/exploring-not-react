# Exploring notReact

This is an exploratory work to determine how a minimal reimplementation of React, called `notReact`, can succeed in replicating the basic behavior of React.
It is so minimal that only accepts pure functional "not-react" components.

The (revised) minimal `notReact` implementation is in `src/not-react.js`.
It only has **140 bytes** long!
And could even be reduced to **44 bytes** if willing to go all the way down :D

```js
var notReactDOM={render(h,e){e.innerHTML=h}}
```

## Usage

Check out the `examples` folder. The examples follow the [Quick Start](https://reactjs.org/docs/hello-world.html) guide of React.

## Install

If you ever dare using this library for anything, you can `npm install not-react-dom` or just copy the file.
That's it!

The library is conveniently wrapped in an UMD loader so it can be safely loaded using RequireJS, Node.js' `require()` or just an `<script>` tag that will expose the global `notReactDOM` object.

## Conclusions

The most relevant finding of this exercise is that **the lib's code** needed to implement the "hello world" example **did not need a single change** to later implement all the other examples, **no matter how complex the example was**.
This is a clear difference with any other framework or library, that needs more and more code to support additional use cases.

Perhaps that characteristic is good enough to forgive some negative aspects found along the way:

- Mapping a list of components into HTML needs `.join('')` at the end to avoid JavaScript to join the array of strings with commas.
Not bad considering the final size of the library.

- Event handling is not "elegant" as handler calls are plain text and handlers need to be global.
Fixing that would have required tons of additional logic!

- State? Global state!?
Well... if there only are functional components, the state has to be somewhere.
And that "somewhere" has to be accessible by the global event handlers.

- Rendering large pages would be really slow as the whole DOM tree is rewritten on each state change.
For small pages or document trees it would work pretty well anyway.

- And, no, no fancy stuff.
No error checking, sanitization, security, nothing.
Only suitable for Perfect Programmers (TM) and Lovely Users (TM).

## License

Unlicense
