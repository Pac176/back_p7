require('dotenv').config();

const crypto = require('crypto');
const algorithm = 'aes-192-cbc';
const key = crypto.scryptSync(process.env.CRYPTO_PASSWORD, 'salt', 24);
const iv = Buffer.alloc(16, 0);

exports.encrypt = (text) => {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
};
exports.decrypt = (text) => {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(text, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
};
