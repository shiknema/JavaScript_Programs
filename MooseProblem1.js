const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    var nums = line.split(' ');
    var a = parseInt(nums[0]);
    var b = parseInt(nums[1]);
    //Solve the test case and output the answer

function getMoosePoints(l, r){
    if(l < 0 || l > 20 || r < 0 || r > 20 || (r === 0 && l === 0)){
      return ("Not a moose");
    }
    if(l === r){
      return ("Even " + l*2);
    }
    if ( l > r ){
      return ("Odd " + l*2);
    }
    return ("Odd " + r*2);
  }
  
  console.log(getMoosePoints(a,b));
  
});