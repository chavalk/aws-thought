const { v4: uuidv4 } = require('uuid');

const params = fileName => {
    const myFile = fileName.originalname.split('.');
    const fileType = myFile[myFile.length - 1];

    const imageParams = {
        Bucket: 'user-images-2c9b7e90-fcc6-4ebd-a0fc-8b1cd9f4e6f5',
        Key: `${uuidv4()}.${fileType}`,
        Body: fileName.buffer,
        ACL: 'public-read'
    };

    return imageParams;
};

module.exports = params;