const names =  ["bob", "Amit", "Charu", "Dinesh"];

for(var i=0; i<= names.length; i++){
if (names[i] == "Amit") names.splice(i, 1); 
}

console.log(names);


//const id = names.indexOf('Amit');
//const removedName = names.splice(id,  1);
//console.log(removedName);