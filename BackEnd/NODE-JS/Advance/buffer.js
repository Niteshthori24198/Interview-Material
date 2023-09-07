
// allocate buffer of specific size (bytes)

const buffer = Buffer.alloc(16).fill(0)

console.log(buffer)


// Create a Buffer from Existing Data:

const data = [1, 2, 3, 4, 5];

const buffer1 = Buffer.from(data)

console.log(buffer1)

console.log(Array.from(buffer1))


const buffer2 = Buffer.from('Hello World!')

console.log(buffer2)

// Checking a Buffer:


// Buffer Size:

const buffersize = buffer.byteLength;

const bufferoffset = buffer.byteOffset

console.log(buffersize, bufferoffset)


// Buffer Contents: 


const data1 = buffer2.toString('utf-8')

console.log(data1)


// Adding data to buffer: (data, offset)

buffer.write('Nitesh', 4)

buffer[0] = 50

console.log(buffer)


// slicing data from buffer 

const out = buffer1.slice(2, 4)

console.log(out)


// copy and concat buffer

const b1 = Buffer.from('Welcome to ')

const b2 = Buffer.from('India')

const b3 = Buffer.concat([b1, b2])

console.log(b3.toString())

const b4 = Buffer.alloc(16)


// (targetbuffer, startpointAtTargetBuffer)

b3.copy(b4, 7)

b3.copy(b4,2,4,b3.byteLength)

// (targetbuffer , startpointAtTarget, startpointAtSource , sourcebuffersize)

console.log(b4)