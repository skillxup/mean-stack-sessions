const StringDecoder = require("string_decoder").StringDecoder;
const decoder = new StringDecoder();

const buf1 = new Buffer.from("this is a sample test");
console.log(decoder.write(buf1));

const buf2 = new Buffer.from("45", "hex");
console.log(decoder.write(buf2));

const buf3 = new Buffer.from([0x62]);
console.log(decoder.write(buf3));