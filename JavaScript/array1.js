process.stdin.resume();
process.stdin.setEncoding();

var team = ["勇者", "戦士", "魔法使い"];
console.log(team);

console.log(team[0]);
console.log(team[1]);
console.log(team[2]);

//　勇者が出力される
var index = 0;
console.log(team[index]);

// 要素を追加
team[3] = "遊び人";

// 配列の末尾に要素を追加
team[team.length] = "商人";
team.push("狩人");

// 要素を上書き
team[1] = "格闘家";


