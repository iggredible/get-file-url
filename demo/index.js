const getFileUrl = require("../");

console.log(getFileUrl("image.jpg")); // file:///some/path/to/image.jpg
console.log(getFileUrl("/some/path/to/image.jpg")); // file:///Users/path/to/image/get-file-url/demo/image.jpg
