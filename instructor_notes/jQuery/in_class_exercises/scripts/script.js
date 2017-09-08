// 1. Use jQuery to fetch all `h1` tags and save them to a variable called $h1
const $h1 = $("h1");
console.log($h1);
// 2. Grab the HTML element that is both an H1 and has an ID of "second"
$("h1#second")
// 3. Select the div with an ID of 'myDiv' and change the text to say "jQuery makes JS easy!"
$("#myDiv").text("JQuery Makes JS EASY !!!")
// 4. Append this image to end of the body. http://www.fillmurray.com/200/200
$('body').append('<img src=http://www.fillmurray.com/200/200>');
// 5. Change the background color of the page to green.
$(document.body).css('background','yellow')

// 6. Remove the div with and ID of 'myDiv'
$("#myDiv").remove();