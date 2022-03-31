//Friday week02 workshop 5th exercise2:

// Get your solution of the second exercise from the html day
// Create and include a scripts.js file just like before
// Add different classnames to the 4 elements in the HTML file

// Let's create some variables with the following names and values:
// color: purple
// number: 10
// word: cool

let color = "purple";
let number = 100;
let word = "cool";

// Change the background color of the first box to purple, 
// if the color is purple
if (color === "purple") {
    $(".first").css("background",color);
}
// Change the text of the second
// $(".second").text("Text");

// if the number is bigger than 100 to 
// whoah, that's a big number.
if (number > 100) {
    $(".second").text("whoah, that's a big number");
} else {
    $(".second").text(number);
}
// otherwise just a regular number, please.

// Change the text to Power of DOM of the third if the word is cool, otherwise change the fourth one
if (word === "cool") {
    $(".third").text("Power of DOM");
} else {
    let fourth = $(".fourth").text();
    $(".third").text(fourth);
}