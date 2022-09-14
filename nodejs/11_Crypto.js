const crypto = require("crypto");

// const secret = 'a';
// const hmac = crypto.createHmac('sha256', secret)
//     .digest('hex');
// console.log(`crypto: ${hmac}`);

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

function encrypt(text) {
    let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);

    let encrypted = cipher.update(text);

    encrypted = Buffer.concat([encrypted, cipher.final()]);

    return {encryptedData: encrypted.toString('hex')}
}

var output = encrypt('world');
console.log(output);