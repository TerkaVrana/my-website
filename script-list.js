//Friday week02 workshop 6th exercise1:
$('body').append(
    '<h1>Hello World!</h1>'
);

// Exercise 1
// Get your solution of the fourth exercise from the html day
// Create and include a scripts.js file just like before

// Create an array with random names and yours
let names = ["Adam", "Terka", "Majda", "Anna"]

// Using forEach to add each name to the <ul> list

names.forEach((name) => {
    if (name === "Terka") {
        $('ul').append(`<li><b>${name}</b></li>`);
    } else{
        $('ul').append(`<li>${name}</li>`);
    }
    
});
// `<li>${name}</li>` nebo "<li>"+j+"</li>"


// (Optional) Your name should be bold



// Exercise 2
// Work with the same files as in the previous exercise
// Create this object:
let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
};
// Add a new block at the end of the page, 
$("main").append(
    `<div><h1>${additionalBlock.title}</h1><p>${additionalBlock.text}</p></div>`
);
// the title should be in a heading, 
// the text should be in a paragraph block
