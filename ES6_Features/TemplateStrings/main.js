//es5

function employee(){
	var name = "abc";
	var age = 25;
	var position = "developer";
	
	console.log("his name is" + name +",and he is " + age + "old.He works as" + position)
}

employee();

//es6 in this instead we break string we can use ${} so that it will recognise it as var and gives the value of it

function employee(){
	let name = "abc";
	let	age = 25;
	let position = "developer";
	
	console.log(`his name is ${name},and he is ${age} old.He works as ${position}`)
}

employee();