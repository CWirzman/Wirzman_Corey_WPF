// Week 4 Functions Assignment : Industry
// Name: Corey Wirzman
// Date: August 1, 2013

//A function for how many shovels are fordged, assembled, and scraped daily.
var shovelsMade = function(fordged, assembled, scraped){
//Funstion definition
	var totalAmount =  (fordged + assembled) * 5 - scraped;
	return totalAmount;
}
var compShovels = shovelsMade(1000, 882, 198);
//Showing function total in the console.
console.log("There are " + compShovels + " shovels made in a work week at Ames True Temper.");