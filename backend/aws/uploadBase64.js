const dotenv = require("dotenv").config();

const base64Upload = async function (base64, title) {
  const AWS = require("aws-sdk");
  //hardcoded access key and secret key for throwaway account, change in production
  AWS.config.update({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  });
  const S3_BUCKET = "dcs-media"; //change this to name of s3 bucket
  //hardcoded access key and secret key for throwaway account, change in production

  AWS.config.setPromisesDependency(require("bluebird"));
  const s3 = new AWS.S3();

  // Ensure that you POST a base64 data to your server.
  // Let's assume the variable "base64" is one.
  const base64Data = new Buffer.from(
    base64.replace(/^data:image\/\w+;base64,/, ""),
    "base64"
  );

  // Getting the file type, ie: jpeg, png or gif
  const type = base64.split(";")[0].split("/")[1];

  const params = {
    Bucket: S3_BUCKET,
    Key: `${title}.${type}`, // type is not required
    Body: base64Data,
    ACL: "public-read",
    ContentEncoding: "base64", // required
    ContentType: `image/${type}`, // required. Notice the back ticks
  };

  // The upload() is used instead of putObject() as we'd need the location url and assign that to our user profile/database
  // see: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#upload-property
  let location = "";
  let key = "";
  try {
    const { Location, Key } = await s3.upload(params).promise();
    location = Location;
    key = Key;
  } catch (error) {
    console.log(error);
  }

  // Save the Location (url) to your database and Key if needs be.
  // As good developers, we should return the url and let other function do the saving to database etc
  console.log("Stored in s3 with url, key:");
  console.log(location, key);

  return location;
};

module.exports = base64Upload;
