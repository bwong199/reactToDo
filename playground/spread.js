// function add (a, b){
// 	return a + b;
// }

// console.log(add(3,1))

// var toAdd = [9, 5];

// console.log(add(...toAdd));


// var groupA = ['Jen', 'Cory'];


// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [...groupB, 3, ...groupA];

// console.log(final)

// var person = ['Andrew', 25];
// var personTwo = ['jen', 29];

// function greet(name, age){
// 	console.log('Hi ' + name + ', you are ' + age);
// }
// greet(...person);
// greet(...personTwo);

// var names = ['Mike', 'Ben'];
// var final = ['Andrew', ...names];

// final.forEach(function(name){
// 	console.log("Hi " + name)
// })

function myFunction(arr,  a,  b,  c) 
{
	var d = (b + c) / 2;  //3.5
 
	if (b > c) 
	{
		return -1;
	}
 
	if (arr[d] < a) 
	{
		return myFunction(arr, a, d+1, c);
	}
	else if (arr[d] > a) 
	{
		return myFunction(arr, a, b, d-1);
	}
	else
	{
		return d;
	}
}

var array = [1,2,3,4,5]
console.log(myFunction(array,  1, 2, 3))


