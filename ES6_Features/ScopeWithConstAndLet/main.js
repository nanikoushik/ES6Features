// the local scope for var works only with functions.It will not work for conditions.

var winner = true;
var value = 10;

if(value == 10){
	var winner = false;
	}
	
console.log(winner);	//false

// in order to maintain local scope we need to use let and const.let has block scope.

let winner = true;
const value = 10;

if(value == 10){
	let winner = false;
	}
	
console.log(winner);	//true

	