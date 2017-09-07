// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  drawNumericDisplay: function(timerValue){
   
  document.getElementById('numeric-display').textContent = timerVaule;
    var numericDisplay = document.getElementById('numeric-display');
    numericDisplay.textContent = timerValue;
    if (timerValue <= 10) {
      numericDisplay.style.color ='red';
      var newSize = (1.5 * Math.pow(1.05, 11 - timerValue)).toFixed(2);
      numericDisplay.style.fontsize = newSize + 'em';
    }
  },
  drawProgressBars: function(timerValue){
    var timeElasped = 100 - timerValue;
    document.getElementsByClassName('progress-bar')[0].style.width = timeElasped + '%';
    var progress = 100 - timerValue;
    var bars = document.getElementsByClassName('progress-bar');
    for (var i = 0; i <bars.length; i++) {
      bars[i].style.width = progress + '%';
    }
  },
  drawLitFuses: function(timerValue){
    var percentUnburnt = timerValue/100
    document.getElementsByClassName('unburnt')[0].style.width = percentunburnt*98 + '%';
    document.getElementsByClassName('burnt')[0].style.width = (1 - percentUnburnt)*98 + '%';
    var percentUnburnt = timerValue/100;
    var numFuses = document.getElementsByClassName('fuse').length;
    for (var i = 0; i < numFuses; i++) {
      document.getElementsByClassName('Unburnt')[i].style.width = percentUnburnt*98 + '%';
      document.getElementsByClassName('burnt')[i].style.width = ( 1 - percentUnburnt)*98 + '%';

    }
  },
  drawCrawlers: function(timerValue){
    var timeElapsed = 100 - timerValue;
    var crawlers = document.getElementsByClassName('crawler')[0].style.marginTop = '0px';
  }
  else {
    document.getElementsByClassName('crawler')[0].style.marginTop = '10px';
  }
   document.getElementsByClassName('crawler')[0].style.marginLeft = (timeElasped*10) + 'px';

};


// as much as I would like to say that the solution is mine, I am not able to, I can kinda understand what is being done and how it was done, But I am not really able to extract how it was done. I would rather submit something then nothing. 