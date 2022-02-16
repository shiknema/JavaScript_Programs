const prepareBlackTea = () => "Black";
const prepareGreenTea = () => "Green";

const makeTea =(prepareTea,numberOfCups) =>{
 const cups = [];

 for(let i=1; i<=numberOfCups; i++){
     cups.push(prepareTea());
 }
 return cups;
}

const NumberOfBlackTea=makeTea(prepareBlackTea,3);
const NumberOfGreenTea=makeTea(prepareGreenTea,6);

console.log(NumberOfBlackTea);
console.log(NumberOfGreenTea);