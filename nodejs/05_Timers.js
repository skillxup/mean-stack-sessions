var fs = require("fs");

// setTimeout()
// setTimeout(function() {
//     console.log(`its executing for only 1 time in the given timegap`);
// }, 3000);

// setInterval()
// setInterval(function() {
//     var d = new Date();
//     console.log(d);
// }, 1000);

// var i = 0;
// setInterval(function() {
//     if(i == 5) {
//         exit(0);
//     }
//     console.log(`its executing for each and every sec: ${i}`);
//     i++;
// }, 1000);

// recursive Function
// var recursiveFunc = function() {
//     console.log(`its executing for 1 sec.,`);
//     setInterval(recursiveFunc, 1000);
// }
// recursiveFunc();

// setImmediate()
fs.readFile("sample1.txt", function() {
    
    setTimeout(function() {
        console.log(`the file executed with setTimeout`);
    }, 0);


    setImmediate(function() {
        console.log(`the file executed with setImmediate`);
    });
});