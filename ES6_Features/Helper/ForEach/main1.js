var purchases = 
[{
	product : phone , quantity : 2 , price : 200
},
{
	product : AC , quantity : 3 , price : 600
},
{
	product : TV , quantity : 1 , price : 100
}]


//es5

var total = 0;

for(var i=0;i<purchases.length;i++){
	total += purchases[i].quantity * purchases[i].price; 
};

console.log(total);
 =========================================================================================================

const purchases = 
[{
	product : phone , quantity : 2 , price : 200
},
{
	product : AC , quantity : 3 , price : 600
},
{
	product : TV , quantity : 1 , price : 100
}]


//es6

let total = 0;

purchases.forEach(functuin(purchase){
	total += purchase.quantity * purchase.price;
});

console.log(total);


