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

#### Streams
- Collection of data that might not be available all at once.
- They don't have to fit in memory.
- are readable or witable
- All stream emit events
- Streams can be consumed by src.pipe(dst) - src readable and dst has to be writtable 
- both can be duplex
- pipe - a.pipe(b).pipe(c)
- Mode of stream -> Paused stream.read() | Flowing EventEmitter
- 2 diff types
1. Stream Implemnetation - who use stream module
2. Stream Consuming - pipe or events

4 diff types of stream
1. Readable - stream from where data can be consumed. fs.createReadStream \ data, end | 
- Readable stream can be Paused (stream.read()) or  Flowing mode
- All readable stream start with paused mode
- Flowing modestream needs EventEmitter
2. Writable - data can be written fs.createWriteStream \ drain, finish
3. Duplex -readable and writable. net.Socket
4. Transform - zlib createGzip

#### WebSockets 

#### Server sent events
connection is uni-directional, unlike web sockets
Connection should always be kept alive
text/event-stream content type header
SSE is a mechanism that allows the server to asynchronously push the data to the client once the client-server connection is established.
The server can then decide to send data whenever a new “chunk” of data is available.
It can be considered as a one-way publish-subscribe model.


#### SCALING: Cluster and Child processor
Single thread has limitation. Using multiple process is only way to scale  nodeJs
We scale bcos of
1. workload, 
3 things to scale appl
1. cloning - part of workload divided
2. decompossing based on functionality - Microservice
3. Splitting - knows as sharding, data partition


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

