// 標準入力から複数行データを受け取る

process.stdin.resume();
process.stdin.setEncoding('utf8');

var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  console.log("hello " + lines[0]);
  console.log("hello " + lines[1]);
  console.log("hello " + lines[2]);
});