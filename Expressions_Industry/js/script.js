// Name: Corey Wirzman
// Date: 7/18/2013
// Assignment: Expressions_Industry

//A string to ask how many shovels are assembled all night
var allNight = "How many shovels are assembled all night by a team(2) of operators?"
//An explanation for the calculation being created
explanation = "If there are 8 hours a day with 132 made an hour minus 7 scraped whats the total?";
//hours in a work day
hours = 8;
//shovels made hourly
shovelsHourly = 132
//shovels damaged
shovelsDamagedHourly = 7;
//calculation of a work day
var showTotal = "(132 -7) * 8 =";
//A calculation to show how to get an amount of shovels created daily
var total = (132 - 7) * 8;

console.log(allNight);
console.log(explanation);
console.log(showTotal + " " + total);