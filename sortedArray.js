const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var lines = [];

rl.on('line', (line) => {
    lines.push(line)
});

const compareStrings = (a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;

    return 0;
}

const compare = (a, b) => {
    const splitA = a.split(" ");
    const splitB = b.split(" ")[0];
    console.log("splitA = ", splitA, "splitB=", splitB);

    const lastA = splitA[splitA.length - 1];
    const lastB = splitB[splitB.length - 1];
    console.log("lastA= ", lastA, "lastB = ", lastB);

    return lastA === lastB ?
        compareStrings(splitA[0], splitB[0]) :
        compareStrings(lastA, lastB);
}

/*var  removeSurname =(a,b)=>{
  if(a.lastA===b.lastB){
      return a.lastA;
  }
}


filtered = a.filter(function (a) {
    if (!this.has(a)) {
        this.set(a, true);
        return true;
    }
}, new Map);

*/

function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }
  //console.log("uniuque ",unique (lines));
  
rl.on('close', () => {

    console.log(" \n Sorted Array is :\n",lines.sort(compare));
});