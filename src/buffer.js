//binary data is set of collection of 1 and 0
// 12 - 1100
//stream - sequence of data moved from one point to another
//big data is broken into chunks
//How does buffer helps to interact with or manipulate binary while streaming..
//Buffer is stream of data
//NodeJs can control the speed of fdata arrival and spead of steam in case of video streaming.

const buf1 = Buffer.alloc(1000);
const buf2 = Buffer.from("hello buffer");
console.log(buf2.toString());