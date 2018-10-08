//To push the elements from array to another array the normal way of coding looks like this

var oldArray = [1,2,3];
var newArray = [];

for(var i=0;i<oldArray.length;i++){
	newArray.push(oldArray[i]*10)
}

console.log(newArray);


//ES6 Way
//When we use map we have to return something
//the map function always creates a new array

var oldArray = [1,2,3];
var newArray = oldArray.map(function(item){
	return item*10;
});

console.log(newArray);
