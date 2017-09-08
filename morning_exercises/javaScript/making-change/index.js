// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

var makeChange = function(price, payment) {
// given price and payment amount. 
//calculate the change 
let change = payment - price;
if (change <= 0){
  return [0,0,0,0];
} else {
  console.log(change)
const quaters = Math.floor(change/25);
change = change % 25;
const dimes = Math.floor(change/10);
change = change % 10;
const nickels = Math.floor(change/5);
change - change % 5;
const pennies = Math.floor(change/1);
change - change % 1;
// if price is more than payment return [0,0,0,0]
//return an array like [Q,D,N,P]
  //calculate Quaters
  
  // calculate Dimes
  //calculate Nickels 
  //calculate penny
}
  
  
  
  
  
  //if (amount === 0) return 1
    //if (amount < 0 ) return 0;
    //if(numCoin < 0 && amount > 0) return 0;
 

}


/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  makeChange: makeChange
};
