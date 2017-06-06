const aws = require('aws-sdk');
const fs = require('fs');
const s3 = require('s3');

const awsS3 = new aws.S3();

// Upload the files up into the bucket:
const options = {
    s3Client: awsS3
};
const client = s3.createClient(options);

const folders = ['img', 'js'];
folders.map(function (folder) {
    const params = {
        localDir: __dirname+"/../build/"+folder,
        s3Params: {
            Bucket: "static.alexgisby.me",
            Prefix: folder,
            CacheControl: 'max-age-60,public'
        },
    };
    const uploader = client.uploadDir(params);
    uploader.on('error', function(err) {
        console.error("unable to sync:", err.stack);
    });
    uploader.on('end', function() {
        console.log("done uploading '"+folder+"'");
    });
});
