# Exploring notReact

This repo is an exploratory work on how a minimal version of React, `notReact` can succeed in implementing the basic behavior of React.
It is so minimal that only accepts pure functional "not-react" components.

The (revised) minimal `notReact` implementation is in `src/not-react.js`.
It only has **140 bytes** long!
And could even be reduced to **45 bytes** if willing to go all the way down :D

```js
var notReactDOM={render (h,e){e.innerHTML=h}}
```

Check out the `examples` folder as it follows the [Quick Start](https://reactjs.org/docs/hello-world.html) guide of React.

## Conclusions

The most relevant finding of this exercise is that **the lib's code** needed to implement the "hello world" example **did not need a single change** to implement all the other examples, **no matter how complex the example was**.
This is a clear difference with any other framework or library, that needs more and more code to support additional use cases.

Perhaps that characteristic is good enough to forgive some negative aspects found along the way:

- Mapping a list of components into HTML needs `.join('')` at the end to avoid JavaScript to join the array of strings with commas.
Not bad considering the final size of the library.

- Event handling is not "elegant" as handler calls are plain text and handlers need to be global.
Fixing that would have required tons of additional logic!

- State?
Global state!?
Well... if there only are functional components, the state has to be somewhere.
And that "somewhere" has to be accessible by the global event handlers.

- Performance would be really bad as the whole DOM tree is rewritten on each state change.
For small pages would work pretty well anyway.

- And, no.
No error checking, sanitization, security, nothing.
Only suitable for Perfect Programmers (TM) and Lovely Users (TM).
