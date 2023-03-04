const fileUpload = require('express-fileupload');

const uploader = fileUpload({
  useTempFiles : true,
  tempFileDir : './src/uploads/'
});

module.exports=uploader;
