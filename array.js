var score = [1, 2, 1, 1, 1, 2, 2,2,2,2,2,1];

/*score.sort((a, b) => {
    if (a > b)
        return -1;
    if (a < b)
        return 1;
    return 0;
});
console.log(score);*/

var result1 = score.filter((data) => {
    return data == 1;
})
console.log("player 1 = ",result1);

var result2= score.filter((data) => {
    return data == 2;
})
console.log("player2 = ", result2);

if (result1.length> result2.length) {
    console.log("Player 1 won the match")
}else if(result1.length == result2.length)
{
    console.log(" the match is tie")
}else {
    console.log("Player 2 won the match")
}


