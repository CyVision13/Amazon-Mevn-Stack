const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

aws.config.update({
    AWSAccessKeyId: 'lJv241Gr/sec3Ygk8NcR+oIXR8ckGXoFH+vLnwCs',
    AWSSecretKey: 'AKIAIGRCFD4LMCN2WEOQ',

});

const s3 = new aws.S3();

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'amazon-clone-v1',
        acl: 'public-read',
        metadata: (req, file, cb) => {
            cb(null, { fieldName: file.fieldname })
        },
        key: (req, file, cb) => {
            cb(null, Date.now().toString())
        }
    })
})


module.exports = upload