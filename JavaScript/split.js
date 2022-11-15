process.stdin.resume();
process.stdin.setEncoding();

var input_string = "";
var reader = require("readline").createInterface({ 
  input: process.stdin,
  output: process.sedout
});

reader.on('line', (line) => {
  input_string = line;
});

reader.on('close', () => {
  var values = input_string.split(",");
  
  for (var monster of values) {
        console.log(monster + "が現れた");
    }
  
  values.forEach(i1 => {
    console.log(i1 + "が現れた");
  });
  
  for (var i2 in values) {
    console.log(values[i2] + "が現れた");
  }
  for (var i3 = 0; 13 < values.length; i3++) {
    console.log(values[i3] + "が現れた");
  }
});