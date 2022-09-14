const crypto = require('crypto');

const algorithm = 'aes-192-cbc';

const password = '3acdaa86b3d73e8d18b7019d3f520000531a23db3b6dda7a94ad28db61a9008c';

const key = crypto.scryptSync(password, 'GFG', 24);

const iv = Buffer.alloc(16, 0);

const decipher = crypto.createDecipheriv(algorithm, key, iv);

let decrypted = '';

decipher.on('readable', () => {
    let chunk;
    while(null !== (chunk = decipher.read())) {
        decrypted += chunk.toString('utf8');
    }
});

decipher.on('end', () => {
    console.log(decrypted);
});

// const encrypted = 
//     'bhDetW/uWbnY/werQvcq=';

// decipher.write(encrypted, 'base64');
// decipher.end();

// console.log('done');