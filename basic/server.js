const os = require("os");
const path = require("path");
const { add } = require("./math");

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename, "filename");
// console.log("##################");

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// console.log("########################");
console.log(path.parse(__filename)); //Usefull

console.log(add(3, 3));
