Write a switch statement which tests val and sets answer for the following conditions:
1 - alpha
2 - beta
3 - gamma
4 - delta
---------------------------------------------



function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
switch(val){
  case 1:
    answer = "alpha";
    break;
    case 2:
    answer ="beta";
    break;
    case 3:
   answer = "gamma";
    break;

    case 4:
   answer = "delta";
    break;

}
  // Only change code above this line
  return answer;
}

caseInSwitch(1);



************************WITH String Type CASE**************

Write a switch statement to set answer for the following conditions:
a - apple
b - bird
c - cat
default - stuff
--------------------------------------------

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
switch(val){
  case "a":
  answer = "apple";
  break;
  case "b":
 answer = "bird";
  break;
  case "c":
  answer = "cat";
  break;
  default:
  answer = "stuff";
  break;
}


  // Only change code above this line
  return answer;
}

switchOfStuff(1);


****************************************************************

Write a switch statement to set answer for the following ranges:
1-3 - Low
4-6 - Mid
7-9 - High

Note: You will need to have a case statement for each number in the range.

function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line

switch (val){

   case 1:
   case 2:
   case 3:
   answer = "Low";
   break;

   case 4:
   case 5:
   case 6:
   answer = "Mid";
   break;

   case 7:
   case 8:
   case 9:
   answer = "High";
   break;
}


  // Only change code above this line
  return answer;
}

sequentialSizes(1);


************************************************************

Change the chained if/else if statements into a switch statement.

function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);
-------------------------------

function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line
switch (val){
    case "bob":
    answer ="Marley"
    break;
    case 42:
    answer = "The Answer";
    break;
    case 1:
    answer = "There is no #1";
    break;
    case 99:
    answer = "Missed me by this much!";
    break;
    case 7:
     answer = "Ate Nine";
     break;
}

  // Only change code above this line
  return answer;
}

chainToSwitch(7);