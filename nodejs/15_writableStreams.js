var fs = require('fs');

var data = `
    This is a 
        Sample Data 
    To Write
`;

var writerStream = fs.createWriteStream('outputData.txt');
writerStream.write(data, 'utf-8');

writerStream.on('finish', function() {
    console.log('write completed');
});

writerStream.on('error', function(err) {
    console.log(err.stack);
});

console.log('writing the data completed');