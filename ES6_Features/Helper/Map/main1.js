const users = [
{user:"aa",age:24,eyes:"black"},
	{user:"bb",age:22,eyes:"brown"},
		{user:"cc",age:26,eyes:"blue"}
];

const userNames = users.map(function(item){
	return item.user;
})

console.log(userNames);