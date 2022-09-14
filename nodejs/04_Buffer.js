var buf = new Buffer.alloc(10);
var buf = new Buffer([23, 54, 87, -98, 45, -46]);
var buf = new Buffer("nodejs is built on chromev8 engine", "utf-8");

var buf = new Buffer.alloc(256);
var len = buf.write("the buffer is used to save the raw data");
console.log("the no of octets written: " + len);

var buf = new Buffer.alloc(15);
console.log("the no of octets: " + buf.length);

var buf = new Buffer.alloc(26);
for(var i = 0; i < buf.length; i++) {
    buf[i] = i + 97;
}
console.log(buf.toString('ascii'));
console.log(buf.toString('ascii', 2, 10));
console.log(buf.toString('utf-8', 5, 9));
console.log(buf.toString(undefined, 3, 8));