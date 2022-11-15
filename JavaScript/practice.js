// 標準入力から１行データを受け取る

// 標準入力からデータを取得する時に必要な記述
process.stdin.resume();
process.stdin.setEncoding('utf8');

// 標準入力から渡されたデータを代入する
var input_string = "";
// requireという機能を使ってreadlineを使えるようにしている
// readlineを使うと標準入力からデータを簡単に受け取ることができる
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  // input_string変数にline変数の値を代入している
  // line変数には標準入力から渡された１行のデータが代入されている
  input_string = line
});
// 受け取ったデータを使って処理を行う
reader.on('close', () => {
  console.log("hello " + input_string);
});
// parseIntで文字列から数値に変換する
reader.on('close', () => {
  var input_int = parseInt(input_string);
  var result = input_int + 100;
  console.log(result);
});