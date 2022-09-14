const crypto = require("crypto");

const algorithm = 'aes-256-cbc';

const key = crypto.randomBytes(32);

const iv = crypto.randomBytes(16);

function encrypt(text) {
    let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);

    let encrypted = cipher.update(text);

    encrypted = Buffer.concat([encrypted, cipher.final()]);

    return {
        encryptedData: encrypted.toString('hex')
    }
}

var output = encrypt('hello');
console.log(output);