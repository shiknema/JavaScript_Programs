
var arr=[1,2,2,2,1,1,1,1],
sortedArr = [],
  count = 1;
 var teamA,teamB;

sortedArr = arr.sort();
console.log("sorted array " , sortedArr );

for (var i = 0; i < sortedArr.length; i = i + count) {
  count = 1;
  

  for (var j = i + 1; j < sortedArr.length; j++) {
    if (sortedArr[i] === sortedArr[j])
      count++;
  }
  console.log(sortedArr[i] + " j= " + count );
}

