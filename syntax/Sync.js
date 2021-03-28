var fs = require("fs");

// readFileSync 동기 , A B C

console.log("A");
var result = fs.readFileSync("./sample.txt", "utf-8");
console.log(result);
console.log("C");

// readFile 비동기 , A C B

// console.log("A");
// fs.readFile("./sample.txt", "utf-8", function (err, result) {
//     console.log(result);
// });
// console.log("C");

// A C B 비동기
