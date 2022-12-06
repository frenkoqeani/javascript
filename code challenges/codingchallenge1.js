const calcAverage = (score1, score2, score3) => (score1, score2, score3)/3;
 
let scoredolphins = calcAverage(2,10,4)
let scorekoalas = calcAverage(3,4,3)


const checkWinner = function (avgdolphins, avgkoalas){
    if(avgdolphins >= avgkoalas*2)
    {
        console.log(`dolphins win ${avgdolphins} vs ${avgkoalas}`)
    }
    else if(avgkoalas >= avgdolphins*2)
    {
        console.log(`koalas win ${avgkoalas} vs ${avgdolphins}`)
    }
    else
    {
        console.log("No team wins...")
    }
 }

checkWinner(scoredolphins, scorekoalas)


 /* 
 const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));
// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}
checkWinner(scoreDolphins, scoreKoalas);

 */