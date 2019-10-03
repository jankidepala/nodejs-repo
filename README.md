# NODE JS
 `Node.js is a server side framework that is built upon Chrome's powerful V8 JavaScript engine.`

### CONCEPTS::
#### Buffer::
Mechanism for reading or manipulating strams of binary data. interact with streams in context of things like TCP or video strams,  and file system ops.
#### Event loop::
Entity that handles external events and converts them into callback invocations.
Loops that picks events from the event queue and pushes their callbacks to the call stack.
The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.
Event Model :
Node - libuv , Ruby - Event Machine, Python - Twisted

V8 Call Stack ->LIFO
#### Callbacks::
in JS, callbacks are first class objects.
Call Stack[func()] ---Node[timer] --- Queue [ab1, cb2]

#### Stream
- All stream emit events
- Streams can be consumed by src.pipe(dst) - src readable and dst has to be writtable 
- both can be duplex
- pipe - a.pipe(b).pipe(c)
- Mode of stream -> Paused stream.read() | Flowing EventEmitter
- 2 diff types
1. Stream Implemnetation
2. Stream Consuming 
Readable - fs.createReadStream \ data, end | Paused and Flowing
Writable - data can be written fs.createWriteStream \ drain, finish
Duplex -net.Socket
Transform


#### Non-blocking or Asynchronous I/O::
Asynchronous I/O is a form of input/output processing that permits other processing to continue before the transmission has finished.

#### Blocking I/O
#### Blocking I/O
##### Blocking I/O
#### Prototypes
#### Callbacks
#### Modules::
module pattern -
 1.Core module - HTTP, URL, EVENTS, FILE SYSTEM. comes with nodejs
 2.User defined - application specific

