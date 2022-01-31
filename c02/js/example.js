// Create variable for the welcome message
var greeting = "Howdy ";
var name = "Molly";
var message = ", please check your order:";

// Concatenate the three variables to create the welcome message
var welcome = greeting + name + message;

// Create varibales to hold details about the sign
var sign = "Mortague House";
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

// Get the element that has an id of greetings
var el = document.getElementById("greeting");
// Replaced the content of that element with the personalised welcome message
el.textContent = welcome;

// Get that element that has an id of userSign then update its contents
var elSign = document.getElementById("userSign");
// Replace the content of that element
elSign.textContent = sign;

// Get that element that has an id of tiles then update its content
var elTiles = document.getElementById("tiles");
elTiles.textContent = tiles;

// Get that element that has an id of subTotal then update its content
var elSubTotal = document.getElementById("subTotal");
elSubTotal.textContent = "$" + subTotal;

// Get that element that has an id of shipping then update its content
var elShipping = document.getElementById("shipping");
elShipping.textContent = "$" + shipping;

// Get that element that has an id of grandTotal then update its content
var elGrandTotal = document.getElementById("grandTotal");
elGrandTotal.textContent = "$" + grandTotal;
