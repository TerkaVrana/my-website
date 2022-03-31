//Friday week02 workshop 5th exercise1:

// With jQuery you get a new method $ every jQuery action starts with $(selector) 
// where selector is a valid css selector. 
// Then you can tell jQuery what to do with the selected element. 
// For example if you have an <h1> element with an id="title" attribute, 
// then you can change its text with:
// $('#first').text('My New Title');

// Add id-s to the 3 blue HTML element in the HTML file
// eg. id="fox-1", id="fox-2" …
// Using JavaScript (written in the scripts.js file)

// Change the text of the first blue box from Velox to Macrotis
$('#first').text('Macrotis');

// Change the border color of the second from blue to purple
$('#second').css('border', 'solid purple');

// Change the background color of all 3 blue boxes to yellow
$('p').css('background', 'yellow');