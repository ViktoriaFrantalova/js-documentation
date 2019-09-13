// Cvičenie ohľadom skráteneho zápisu funkcie

console.log(isLandscape(800, 600));

function isLandscape(width, height) {
	return width > height; // nepíšem už true or false, lebo je to zakomponovane vo funkcii
}
// // to iste ale rozpis
// function isLandscape(width, height) {
// return (width > height) ? true : false;
// }
