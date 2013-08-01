// Week 4 Functions Assignment : Personal
// Name: Corey Wirzman
// Date: August 1, 2013


//A function statment.
function amountOfWood(){
//An expression with arithmetic operators inside the function.
	var twoByFours = 26;
	var twoByTens = 21;
	var totalPieces = twoByFours + twoByTens;
//A Ternary to show the equation the in the console log.
	(totalPieces < 42) ? console.log("You do not have enough pieces for framing the livingroom") : console.log("You have " + totalPieces + " pieces of 2x4s and 2x6s.");
}
//Calling the function statement.
amountOfWood();