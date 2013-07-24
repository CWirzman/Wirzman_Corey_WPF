//Conditionals Worksheet
// Corey Wirzman

//Stating what the psi is for the front and back tires
var frontTires = 40;
var backTires = 38;

//if the front and back tires are over "x" amount of psi
if(frontTires && backTires > 36){
//This statement is true	
	console.log("The tires pass spec!")
}else{
//This statement is false	
	console.log("Get your tires checked out!")
}