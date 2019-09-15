# NODE JS
 `Node.js is a server side framework that is built upon Chrome's powerful V8 JavaScript engine.`

### CONCEPTS::
#### Buffer :
Mechanism for reading or manipulating strams of binary data. interact with streams in context of things like TCP or video strams,  and file system ops.
#### Event loop
Entity that handles external events and converts them into callback invocations.
Loops that picks events from the event queue and pushes their callbacks to the call stack.
The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.
Event Model :
Node - libuv , Ruby - Event Machine, Python - Twisted

V8 Call Stack ->LIFO
#### Callbacks
in JS, callbacks are first class objects.
Call Stack[func()] ---Node[timer] --- Queue [ab1, cb2]

#### Non-blocking or Asynchronous I/O 
Operators are functions that build on the observables foundation to enable sophisticated manipulation ossf collections. For, RxJS defines operators such as map(), filter(), concat(), and flatMap().
#### Blocking I/O
#### Blocking I/O
##### Blocking I/O
#### Prototypes
#### Callbacks
#### Modules
module pattern -
 Core module - HTTP, URL, EVENTS, FILE SYSTEM. comes with nodejs
 user defined - application specific

