const jwt = require('jsonwebtoken');
const secretKey = 'rahasia';
const payload = { userId: 123, usernmae: "AhmadTauhid", kelas: "XI" };

const generateToken = jwt.sign(payload, secretKey);
console.log(generateToken);