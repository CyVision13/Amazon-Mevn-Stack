const aws = require("aws-sdk");
constmulter = require("multer");
const multerS3 = require("multer-s3");

aws.config.update({
    AWSAccessKeyId: process.env.AWSAccessKeyId,
    AWSSecretKey: process.env.AWSSecretKey,
});

const s3 = new aws.s3();

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'amazon-clone-v1',
        acl: 'public-read',
        metadata: (req, res, cd) => {
            cb(null, { fieldName: file.fieldName })
        },
        key: (req, file, cb) => {
            cb(null, Date.now().toString())
        }
    })
})


module.exports = upload