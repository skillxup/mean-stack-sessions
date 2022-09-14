var fs = require("fs");

// try {
//     const a = 1;
//     const c = (a + b);

//     console.log(`c: ${c}`);
// } catch(err) {
//     console.log(`err: ${err}`);
// }

function nodeStyleCallBack(err, data) {
    try {
        console.log(`data: ${data}`);
    } catch(err) {
        console.log(`err: ${err}`);
    }
}

fs.readFile("sample1.txt", nodeStyleCallBack);
// console.log('------------------------------');
// fs.readFile("sample2.txt", nodeStyleCallBack);
