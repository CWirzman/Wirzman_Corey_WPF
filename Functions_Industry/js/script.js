// Week 4 Functions Assignment : Industry
// Name: Corey Wirzman
// Date: August 1, 2013


var shovelsMade = function(fordged, assembled, scraped){
	var totalAmount =  (fordged + assembled) * 5 - scraped;
	return totalAmount;
}
var compShovels = shovelsMade(1000, 882, 198);
console.log(compShovels);