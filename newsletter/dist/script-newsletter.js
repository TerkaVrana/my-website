//Friday week02 workshop 7th:

// Exercise 1
// Create a webpage
// Add a button to the body
// Insert jQuery
// Add a script at the end of the body
// Add an event listener to the button:
// $('p').on('click', () => {
//     // do something
// });

// Log 'Yeah, you clicked me' to the console when the user clicks on the button

$('.closing-x button').click(() => {
    // it's the same as before
    console.log("Yeah, you clicked me");
    // $("#question-circle").text("Hi");
})

// $("button").click(() =>{
//     $(".first").toggleClass("hidden")
// })


// Exercise 2
// Add another button to the webpage
// When the user clicks on the second button change the first button's text

$('.closing-x button').click(() => {
    // it's the same as before
    $("#question-circle").text("Hi");
})


// Exercise 3
// Add a third button to the webpage
// When the user clicks on the last button, change the background-color of each button

$('button#change-color').click(() =>{
    $("button").css("background", "purple");
})





//Friday week02 workshop 8th:

// Exercise 1
// Add an input to your previous webpage
// Its default value should be "blue"

// When the user clicks on the last button
// Read the desired color from the input

// Change the buttons' background-color to the given color
// Try it with different colors

// $('button#question-circle').click(() =>{
//     let color = $("#color-input").val();
//     // alert(color);
//     $("button").css("background", color);
// });

// $('#email').submit(("input" !== "blank") =>{
//     $("#question-circle").css("background", "lightblue");
// })

// Exercise 2 (Optional)
// Now your previous application changes the buttons' color whenever the input vale has changed and you clicked on the last button
// Change the behavior by ignoring all the clicks after the first one. So even if the input has changed, keep the previous color if it has already changed once.

let changed = false;
$('button#question-circle').click(() =>{
    // alert(color);
    if (!changed) {
        changed = true;
        let color = $("#color-input").val();
        $("button").css("background", color);
    }
})
