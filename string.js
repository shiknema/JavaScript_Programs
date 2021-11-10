var name= "Shikha";
var fullName = `${name} Gupta`
console.log("full Name is : ", fullName);
console.log(fullName.split("p"));
console.log( fullName.length);
console.log(fullName.endsWith("?"));
console.log(fullName.endsWith("a"));
console.log(fullName.toUpperCase);

const arr = ["Sam roy", "Tom smith", "sam thomos"];
//const randomIndex = Math.random() * computerOptions.length;

//console.log(randomIndex);
for (var i = 0; i <= arr.length - 1; i++) {
  console.log(arr[i]);
  //const splitArray = arr[i].split(" ");
  //console.log("FirstName= ", splitArray.at(-1));
  // console.log("LastName= ", splitArray.at(-2));
  console.log("guess", arr[i].split(" ")[0]);
}
