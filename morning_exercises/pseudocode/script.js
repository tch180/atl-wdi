//*************************
// Problem 1:
// Barrels O' RUM

const barrels = function(small, large, total){
let smallBarrel = 60;
let largeBarrel = (totalCost- (small * smallBarrel)) / large;

  return largeBarrel;
 };
barrels
//*************************
// Problem 2:
// Sailing the Seas

const shipFuelCost = function(fuelPrice, milesPerGallon)  {
  let earthCir = 24901;
  let mpg = miles;
  let totalGas = earthCir / mpg;
  let totalCost = totalGas * fuelPrice

  return totalCost;
};
shipFuelCost(3,12)
//*************************
// Problem 3:
// GROG

var calcFruitJuice = function(a, b, c, d){
  const costco = (b / 100) * a;
  const kirkland = (d / 100) * c;
  const totalJuice = a + c;
let totalPFJ = costco + kirkland;

let finalAnswer = totalPFJ / totalJuice;
return finalAnswer;
};

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
