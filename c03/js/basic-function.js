var msg = "Sign up to receive our newsletter for 10% off!";

function updateMessage() {
	var el = document.getElementById("message");
	el.textContent = msg;
}
// updateMessage();

// function that returns multiple values
function getSizes(length, width, depth) {
	var area = length * width;
	var volume = length * width * depth;
	var sizes = [area, volume];
	return sizes;
}
var areaOne = getSizes(10, 21, 31)[0];
var volumeOne = getSizes(10, 21, 30)[1];

console.log("Area: ", areaOne);
console.log("Volume: ", volumeOne);
