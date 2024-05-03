const jwt = require('jsonwebtoken');
const secretKey = 'rahasia';

function createToken(id, name, classes, address, hobby) {
    const data = { id, name, classes, address, hobby };
    return jwt.sign(data, secretKey);
}

const arrSiswa = [{
        id: 1,
        name: 'Adli',
        classes: 'XI',
        address: 'Jakarta',
        hobby: 'ML'
    },
    {
        id: 2,
        name: 'Muim',
        classes: 'XI',
        address: 'Jakarta',
        hobby: 'Renang'
    },
    {
        id: 3,
        name: 'Baim',
        classes: 'XI',
        address: 'Enrekang',
        hobby: 'FF'
    }
]

const arrToken = [];

// membuat perulangan siswa
arrSiswa.forEach(siswa => {
    const token = createToken(
        siswa.id, siswa.name, siswa.classes, siswa.address, siswa.hobby
    )
    arrToken.push(token);
})

// perulangan arrToken
arrToken.forEach((token, index) => {
    console.log(`Siswa dengan id ${index + 1} menggunakan token: ${token} \n`);
})