//Conditionals Assignment: Conditionals_Industry
//Name: Corey Wirzman
//Student Number: 0002343986
//Date: July 25, 2013

//these are temperatures to specify if I am going to spend my break either outside, in my car, or inside.
var breakOutsideTemp = 82;
var breakInsideTemp = 79;
var breakInCarTemp = 88;


if(breakOutsideTemp > breakInsideTemp){
	console.log("I will spend my break outside.");
}else if(breakOutsideTemp < breakInCarTemp){
	console.log("I will spend my break in my car");
}else{
	console.log("I will spend my break inside." );
}