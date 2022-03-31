console.log("JavaScript is OK!");

//Friday week02 workshop

// Calculate your age using the console and store it in a variable called age
let age = 26;
console.log(age);

// How long was the WW2? Store it in a variable called ww2
let ww2 = 1945 - 1939;
console.log("WW2 was", (ww2), "years long");

// How much would you need to pay for 76 Tesla shares? Store it in a variable called tesla
let tesla = 38 * 76;
console.log(
    "for 76 Tesla shares you will pay", (tesla),"$"
    );

// How many seconds do we have in a day? Store it in a variable called secondsOfDay
let secondsOfDay = 24*60*60 ;
console.log("There is", (secondsOfDay), "seconds in a Day");

// What percentage of the world's population is hungarian? Store it in a variable called hungarians
let hungarians = (975/775300)*100;
console.log("Hungarians represent", hungarians.toPrecision(2), "% of the World's population");

// How much bigger is China than the Czech Republic? Store it in a variable bigger
let bigger = 122;
console.log("China is", bigger, "times bigger than the Czech Republic");

// If only 7 people can fit into a discord channel and we have 654 participants, than how many people will be in the smallest channel? Store it in participants
let participants = 654;
let groupSize = 7;
let groupCount = Math.ceil(participants/groupSize);
let remainder = participants % groupSize;
// console.log ("The smallest group will have", remainder, "members");
console.log(`The smallest group will have ${remainder} members`);


// Create an array with some names you choose, store it in a variable called names
let names = ["Adam", "Betty", "Cyril", "David", "Emily"]
console.log(names)

// Check if the 3rd name is longer than 5 characters
let thirdName = names[2];
let requiredLength = 5;
console.log("Is the 3rd Name longer than", requiredLength, "characters?");
console.log(thirdName.length > requiredLength);

// Add one more name to your array
names.push("Arron");

// Replace the first element with your name
let nameItem = 0;
names[nameItem] = "NewAdam";

let x = undefined;

// Check if the array's has more items than 4
console.log("the array's has more items than 4:", names.length > 4);

// Create an object which has a field called colors
// The colors field should be an array containing random colors
let object = {
    colors:["Orange", "Blue", "Pink"],
    hasManyColors: "the object has many colors:"
};
// console.log(object.colors.length > 3);


object.hasManyColors = object.hasManyColors + object.colors.length > 3;
console.log(object)  
console.log(object.hasManyColors);  
// Add one more field to the object, named hasManyColors
// Its value should be true if there are more colors than 3, otherwise it is expected to be false



//4th part

// $("div").text("Hello, world!")
// $("div").css("background", "purple")
// $(".first").toggleClass("hidden")
// $("p").text("Hello, world!")

$("p").html("<strong>Hello, world!</strong>")
$("p").append("<strong>Another</strong>")

// $("p").remove()

// $("button").click(() =>{
//     $(".first").toggleClass("hidden")
// })


//From 1st part to the 3th
// console.log("JavaScript is working!");
// let colors =  ["orange", "blue", "green", "purple"];
// let post = {
//     title: "My post",
//     description: "My First Post, awesome",
//     likeCount: 12,
//     comments: ["cool!", "nice job!"]
// };

// let posts = [{
//     title: "First post",
//     likeCount: 12
// }, {
//     title: "Second post",
//     likeCount: 100
// }];

// console.log(colors);
// console.log(post);

// let age = 18;

// if (age >= 18) {
//     console.log("You're an adult!");
// } else {
//     console.log("You're a kid!");
// }

// for (let i = 0; i < 10; i++) {
//     console.log (i);
// }

// console.log(colors);

// f(x) = x*x
// let myFunction =x => {
//     x => x*x
// } 

// let myFunction =x => {
//     console.log(x)
// } 

// colors.forEach(color => {
//     console.log(color);
// });



console.log("This is the End og the Code!")