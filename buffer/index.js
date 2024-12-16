const bufferToString = require("./buffer-to-string.js")

let buffer = Buffer.alloc(20);

buffer.write("hello world its a good day !")

let copyBuffer = Buffer.alloc(10);

buffer.copy(copyBuffer, 0 , 0 , 10)

let subOne = buffer.subarray(10, 20);

console.log(bufferToString(buffer))
console.log(buffer.toString())
console.log(bufferToString(copyBuffer))
console.log(copyBuffer.toString())
console.log(bufferToString(subOne))
console.log(subOne.toString())
console.log("Modify the original ")

buffer.write("this is not a good deal");
console.log(bufferToString(buffer))
console.log(buffer.toString())
console.log(bufferToString(copyBuffer))
console.log(copyBuffer.toString())
console.log(bufferToString(subOne))
console.log(subOne.toString())