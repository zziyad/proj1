'use strict'
/*
function add(a, b){
	console.log(this.c + this.d + a + b);
};

let cd = {c: 3, d: 7};

add.call(cd, 2, 3);
add.apply(cd, [3, 12]);
//test randon number
console.log(Math.random()*2 | 0);
*/
/*
let clientData = {
	id : 4344556,
	fullName: "Not set",
	setUserName: function(firstName, lastName){
		this.fullName = firstName + " " + lastName;
	},
}

function getUserName (firstName, lastName, callback, callbackObj){
	callback.apply(callbackObj, [firstName, lastName]);
}


getUserName("Antony", "Martial",clientData.setUserName, clientData);

console.log(clientData.fullName);

*/
 

/*
//PASSWORD GENERATOR
//randon number 
function getRandomInt(x){
	return Math.floor(Math.random()*Math.floor(x));
}


let characters = '!@#$%&*qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM';


function pasGen(x){
let count = 1;
let z = [];
while(count <= x){
      count++;
      let randCharp = characters[getRandomInt(69)];
      z.push(randCharp);
}
return  z.join('');

}

console.log(pasGen(12));
 */
/*
// naxojdenie 2 bolshix virojeniy iz 3 -x chisel
function rand(x,y,z){
let sqr = sum  => sum * sum;
let sumOfSqr = (sum1, sum2) => sqr(sum1) + sqr(sum2);

	if (x < y && x < z){
		return sumOfSqr(y,z);
	}else if(x > y && y < z){
		return sumOfSqr(x,z);
	}else{
		return sumOfSqr(y,x);
	}
}

console.log(rand(6,4,5));
*/
/*
//Kvadratniy koren
function sqrtIter(guess, z, x){
	const abc = x => x > 0 ? x : x = 0 ? 0 : -x;
	const avarage = (x,y) => (x+y)/ 2;

	let a = improve(guess, x);
	let b = goodEnough(guess, z)

	function improve (guess, x){
		let a = x / guess;
		return avarage(guess, a);
	}

	function goodEnough(guess, z = 0.5 ){
		let a = (guess - z) / z;
		return abc(a) < 0.0000000001;
	}
	
	
	return (b) ? guess : sqrtIter(a, guess, x);
}

const sqrt = (x) => sqrtIter(1.0, 0.5, x); 

console.log(sqrt(49))
console.log(Math.sqrt(49))

*/
//koren kuba
//
/*
	const abc = x => x > 0 ? x : x = 0 ? 0 : -x;

function improveCbrt (guess, x){
	let a = (((x / Math.pow(guess, 2)) + (2 * guess)) / 3 )
	return a
}

	function goodEnoughCbrt(guess, z = 0.5 ){
		let a = (guess - z) / z;
		return abc(a) < 0.0000000001;
	}

function sqrtIterC(guess, z, x){
	let a = improveCbrt(guess, x);
	let b = goodEnoughCbrt(guess, z)
	console.log(a);
	console.log(b);
	return (b) ? guess : sqrtIterC(a, guess, x);
}
const cbrt = x => sqrtIterC(1.0, 0.5, x);

console.log(cbrt(64))
//console.log(Math.cbrt(27))

*/
/*
const factorialItterate =(sum, counter, n)=>{
	if(counter > n) return  sum
	else {
	console.log("counter " + counter )
	sum = counter * sum
	counter ++
	console.log( "summer  " + sum)
		return factorialItterate(sum, counter, n)
	}
}
	 
console.log(factorialItterate(1, 1, 6))




let fact = n =>{
	if (n == 1) return 1 
	
	console.log(n)	
	return n * fact(n - 1)	
}
console.log(fact(6))
*/
/*
//Fibonachi

const a = (x, y) =>{
	if (y == 0)return 0
 	else if(x == 0) return 2 * y
	else if ( y== 1) return 2
	else {
	return a(x - 1, a (x, y - 1))
		console.log(x + " " + y)
	}
}
console.log(a(1, 10))


const f = n => a(1, n)
console.log(f(10))
*/
/*
const fib = n => fibIte(1, 0, n)

const fibIte = (x, y, n) => {
	return n === 0 ? y 
		: fibIte(x+y, x, --n)
}
console.log(fib(6))

*/
/*
const f = n => {
	return (n >= 3) ? f(n-1) +2 * f(n-2) + 3 * f(n-3)
	: n
	
}
console.log(f(6))


const fn = n => fItter(2,1,0,n)

const fItter = (x, y, z, n )=>{
	return (n == 0) ? z
	: fItter(x+(2 * y)+(3 * z), x, y, --n )
}
console.log(fn(6))
*/
/*
const expt = (b, n) => {
	return n == 0 ? 1 : b * expt (b, n - 1)
}
console.log(expt(500, 12))

const ex = (b, n) => exp(b, n, 1)
const exp = (b ,count, product)=>{
	return  (count == 0) ?  product 
	: exp(b, --count, b*product)
} 
console.log(ex(300,12))

*/

/*
function factorialItter(start, counter, n){
	 return (counter > n )? start
	: factorialItter( start * counter, counter + 1, n)
	}

const factorial = n => factorialItter(1, 1, n)

console.log(factorial(5))
*/
/*
const sqrtItter = (guess, x) =>{
	const abs = x => x >= 0 ? x : -x 
	const square = x => x * x
	const avarage = (x, y) => (x+y)/2
	const improve = (guess, x) => {
		return avarage(guess, x/guess)
	}

	const guessEnough = (guess, x) => {
		return abs(square(guess) - x) <  0.000001
	}

	if (guessEnough(guess, x)) return guess
	else return sqrtItter(improve(guess, x), x)

}

const sqrt = n => sqrtItter(1.0, n)

console.log(sqrt(49))

*/
//ratsionalnoe chislo
const rat = (x, y) => [x, y]
const denom  = x => (rat(x) & rat[0] !== 0 ) ? x[1]:console.log('tails(y) expects a pair as argument y, but encountered' + x)
const numer = x => (rat(x) & rat[0] !== 0 ) ? x[0]:console.error('head(x) expects a pair as argument y, but encountered ' + x)

const print_rat = x =>{
	return console.log(numer(x) + '/'+ denom(x))
a}
//NOD naibolshiy obshiy delitel
const gcd = (a, b) => {
	return b === 0 ? a : gcd(b, a%b)
}
const x = rat(2, 4)
print_rat(x)



























