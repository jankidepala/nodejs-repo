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

#### Solution for real time app:
    1. Long polling
    2. web hooks
    3. Pub/Sub
    4. web sockets
    5. serve sent events

- Ajax polling/regular polling - req and response
- Long polling - Long polling is technique where the server elects to hold a client connection open for as long as possible, delivering a response only after data becomes available or timeout threshold has been reached. After receiving response client immediately sends the next request.
On the client side, only a single request to the server needs to be managed. When the response is received, the client can initiate a new request, repeating this process as many times as necessary.
Challenges: Message can be lost if not received. Also performance and scaling, device support and fallbacks

#### WebSockets 
To enable Web applications to maintain bidirectional communications with server-side processes, this specification introduces the WebSocket interface.
Do not use if you do not need real time update. Use http instead
when to use web sockets:
Real time Applications, Gaming Applications, Chat

#### Server sent events
connection is uni-directional, unlike web sockets
Connection should always be kept alive
text/event-stream content type header
SSE is a mechanism that allows the server to asynchronously push the data to the client once the client-server connection is established.
The server can then decide to send data whenever a new “chunk” of data is available.
It can be considered as a one-way publish-subscribe model.
SSE is perfect for scenarios such as:
    When an efficient unidirectional communication protocol is needed that won’t add unnecessary server load (which is what happens with long polling)
    When you need a protocol with a predefined standard for handling errors
    When you want to use HTTP-based methods for realtime data streaming
    When you need a unidirectional protocol with better latency for users tha other HTTP-based ways of streaming data

Here are a few examples where SSE is already in use:
    Subscribing to a feed of cryptocurrency or stock prices
    Subscribing to a Twitter feed
    Receiving live sports scores
    News updates or alerts

#### SCALING: Cluster and Child processor
Single thread has limitation. Using multiple process is only way to scale  nodeJs
We scale bcos of
1. workload, 
3 things to scale appl
1. cloning - part of workload divided
2. decompossing based on functionality - Microservice
3. Splitting - knows as sharding, data partition

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

