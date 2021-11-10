const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var lines = [];

rl.on('line', (line) => {
   // if ((line.length) <= 20) {
        lines.push(line);
  //  }
    
});

const compareStrings = (a, b) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }

    return 0;
}

const compare = (a, b) => {
    const splitNameA = a.split(" ");
    const splitNameB = b.split(" ");
    //console.log("splitNameA = ", splitNameA , "splitNameB=", splitNameB);

    const lastNameA = splitNameA[splitNameA.length - 1];
    const lastNameB = splitNameB[splitNameB.length - 1];
    //console.log("lastNameA= ", lastNameA , "lastNameB = ", lastNameB);

    return lastNameA === lastNameB ?
        compareStrings(splitNameA[0], splitNameB[0]) :
        compareStrings(lastNameA, lastNameB);
}

const removeLastName = (lines) => {
    let tempLastName = "";
    let tempFirstName = "";
    let finalNames = []
    for (const name of lines) {
        const lastName = name.split(" ")[name.length - 1];
        const firstName = name.split(" ")[0];
        
        if (tempFirstName === firstName) {
            finalNames.push(name); 
        } else if (tempLastName === lastName) {
            finalNames.push(name.split(" ")[0]);
        } else {
           
           tempLastName = lastName;
           tempFirstName = firstName;
            finalNames.push(name);        
        }

    }
    return finalNames;
}

rl.on('close', () => {
    const finalNameList = removeLastName(lines.sort(compare));
   // console.log("\n");
   // if (finalNameList.length <= 200) {
        finalNameList.forEach((myArray) => {
            console.log(myArray);
            
       })
    //} 
  
});

