
const crypto = require('crypto')

// hashing using crypto 


const dataToHash = 'Nitesh@1'

const hashAlgo = 'sha256' // 'sha256' ,  'md5' , 'sha1'


// create a hash object

const hash = crypto.createHash(hashAlgo);

// update the object with data to be hashed

hash.update(dataToHash);

// get a hashed digest value in hex

const hasheddata = hash.digest('hex')

console.log(hasheddata)





//  encryption and decryption using crypto

const plainText = 'Hello World'


// Generate a random encryption key and initialization vector (IV)


const key = crypto.randomBytes(32)

const iv = crypto.randomBytes(16)


// Create a cipher object using an encryption algorithm (e.g., AES-256-CBC)


const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);


// Encrypt the data

let encryptedData = cipher.update(plainText, 'utf8', 'hex');

encryptedData += cipher.final('hex');

console.log(`Original Data: ${plainText}`);
console.log(`Encrypted Data: ${encryptedData}`);


// Create a decipher object with the same algorithm, key, and IV

const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);

// Decrypt the data

let decryptedData = decipher.update(encryptedData, 'hex', 'utf8');

decryptedData += decipher.final('utf8');

console.log(`Decrypted Data: ${decryptedData}`);