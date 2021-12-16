const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let firstLine = true;
let totalTestCasesCount = undefined;
let testCasesProcessedCount = 0;
let shouldProcessTestCaseLimit = true;
const listOfAwaySeconds = []
rl.on('line', (line) => {
  if (firstLine) {
    totalTestCasesCount = +line;
    if (totalTestCasesCount > 1000) {
      rl.close();
      return;
    }
    firstLine = false;
    return;
  }
  const awaySeconds = line.split(' ').map(Number);
  listOfAwaySeconds.push(awaySeconds);
  shouldProcessTestCaseLimit = true;
  testCasesProcessedCount++;
  if (totalTestCasesCount <= testCasesProcessedCount) {
    for (let i = 0; i < totalTestCasesCount; i++) {
      for (let j = 0; j < totalTestCasesCount; j++) {
        if ((listOfAwaySeconds[i][0] >= listOfAwaySeconds[j][0] && listOfAwaySeconds[i][0] <= listOfAwaySeconds[j][1]) ||
            (listOfAwaySeconds[i][1] >=  listOfAwaySeconds[j][0] && listOfAwaySeconds[i][1] <=  listOfAwaySeconds[j][1])) {
          continue;
        } else if ((listOfAwaySeconds[j][0] >= listOfAwaySeconds[i][0] && listOfAwaySeconds[j][0] <= listOfAwaySeconds[i][1])
            || (listOfAwaySeconds[j][1] >= listOfAwaySeconds[i][0] && listOfAwaySeconds[j][1] <= listOfAwaySeconds[i][1])) {
          continue;
        } else {
          console.log("edward is right");
          rl.close();
          return;
        }
      }
    }
    console.log("gunilla has a point");
    rl.close();
  }
});