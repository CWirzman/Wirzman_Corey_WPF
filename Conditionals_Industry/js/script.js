//Conditionals Assignment: Conditionals_Industry
//Name: Corey Wirzman
//Student Number: 0002343986
//Date: July 25, 2013

//these are temperatures to specify if I am going to spend my break either outside, in my car, or inside.
var breakOutsideTemp = 82;
var breakInsideTemp = 79;
var breakInCarTemp = 88;

//If my break outside temp is higher than the inside temp
if(breakOutsideTemp > breakInsideTemp){
//I will go outside on my break
	console.log("I will spend my break outside.");
}else if(breakOutsideTemp < breakInCarTemp){
//I will go into my car for break
	console.log("I will spend my break in my car");
}else{
//I will go inside for my break
	console.log("I will spend my break inside." );
}