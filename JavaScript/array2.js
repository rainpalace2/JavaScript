process.stdin.resume();
process.stdin.setEncoding();

var team = ["勇者", "戦士", "魔法使い"];

// for文での繰り返し
// 配列名.lengthで配列の長さがわかるので、繰り返し条件に指定できる
for (var index = 0; index < team.length; index++) {
  console.log(team[index]);
}

// for in
// 配列に存在するすべてのインデックスを取得できる
// 必ずしも0から順番に取得できるわけではない
for (var index in team) {
  console.log(team[index]);
}

// for of
// 配列の要素をすべて取得できる
// ECMA Scriptが使える環境のみ使える
for (var value of team) {
  console.log(value);
}

// forEach
// 配列の要素を一つずつ取り出すことができる
team.forEach(value => {
  console.log(value);
})