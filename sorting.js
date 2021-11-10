var score=[1,2,1,1,1,2,2,2,1];
var team1, team2;

for(let i=0; i<=score.length;i++){
    if(score[i]==1){
       team1++;
    }else{
        team2++;
    }
}
console.log("team1", team1);
console.log("team2",team2);
if(team1>team2){
console.log("team3 won");
}else if (team2==team2){
    console.log("match draw");
}else{
    console.log("team4 won");
}