/*
If statements - Evaluates (or checks) a condition. If the condition is true, any statements in the subsequent code block are executed
*/
/*var today = new Date();

if(today === "Friday"){
  return "Let's Party!";
};*/

/*
If/else statements = Evaluates (or checks) a condition. If the condition is true, the first code block is executed. If the condition is false, the second code block is executed instead.
*/

/*if(today === "Friday"){
  return "Let's Party!";
}else{
  return "Get back to coding!";
};*/


/*
 * #1
 * Function - canVote
 * Create a function named `canVote` which will take a parameter: `age`.
 *
 *  @param Datatype: Number `age`
 *  @return Datatype: Boolean
 *
 * The function will return true if the number passed into the function is equal to or greater than Hawaii's voting age. Console.log your result.
*/

function canVote(age) {
	if (age >=18){
		return true;
	}
}

console.log(canVote(17));

/*
 * #2
 * Function - login
 * Create a function named `login` which will take a parameter: `password`.
 *
 *  @param Datatype: String `password`
 *  @return Datatype: String
 *
 * The function will return the message: "Login Success!", if the string passed into the function is "test1234"
 * Console.log your result.
*/

function login(password){
	if (password === "test1234"){
		return "Login Success!";
	}
}

console.log("Login: " + login("test1235"));

/*
 * #3
 * Function - isGreaterThan
 * Create a function named `isGreaterThan` which will take two parameters: `first` and `second`
 *
 *  @param Datatype: Number `first`
 *  @param Datatype: Number `second`
 *  @return Datatype: Boolean
 *
 * The function will return true if the first number is greater than the second.
 * Console.log your result.
*/

function isGreaterThan (first,second){
	if (first > second){
		return true;
	}
}

console.log(isGreaterThan(3,2));

/*
 * #4
 * Function - mustBeTrue
 * Create a function named `mustBeTrue` which will take a parameter: `boo`.
 *
 *  @param Datatype: Boolean `boo`
 *  @return Datatype: Boolean
 *
 * The function will return true if the value passed into the function is "true".
 * Console.log your result.
*/

function mustBeTrue (boo){
	if (boo === true){
		return true;
	}
}

console.log("Must be true... " + mustBeTrue(3/3 === 1));

/*
 * #5
 * Function - bigBird
 * Create a function named `bigBird` which will take a parameter: `word`.
 *
 *  @param Datatype: String `word`
 *  @return Datatype: String
 *
 * The function will return the message "Word to Big Bird!", if the string passed into the function is a three-letter word. 
 * Console.log your result.
*/

function bigBird (word){
	if (word.length === 3) {
		return "Word to Big Bird!";
	} else {
		return "Didn't work";
	}
}

console.log(bigBird("No"));

/*
 * #6
 * Function - isEqual
 * Create a function named `isEqual` which takes two parameters: `first` and `second`.
 *
 *  @param Datatype: String `first`
 *  @param Datatype: String `second`
 *  @return Datatype: String
 *
 * If the strings are equal, the function will return the message "You look mahvelous!" Otherwise, return the message: "I don't know who you are anymore." 
 * Console.log your result.
*/

function isEqual(first, second){
	if (first === second) {
		return "You look mahvelous!"
	} else {
		return "I don't know who you are anymore."
	}
}

console.log(isEqual("hello", "Hello"));

/*
 * #7
 * Function - notEqual
 * Create a function named `notEqual` which takes two parameters: `first` and `second`.
 *
 *  @param Datatype: String `first`
 *  @param Datatype: String `second`
 *  @return Datatype: String
 *
 * If the strings are not equal, the function will return the message "Opposites do attract." Otherwise, return the message: "Cause it's like you're my mirror." 
 * Console.log your result.
*/

function notEqual (first, second){
	if (first !== second){
		return "Opposites do attract.";
	} else {
		return "Cuz it's like you're my mirror";
	}
}

console.log(notEqual("hI","hi"));

/*
 * #8
 * Function - spareChange
 * Create a function named `spareChange` which takes a parameter: `money`.
 *
 *  @param Datatype: Number `money`
 *  @return Datatype: Boolean
 *
 * The function will return true if the number passed into the function is greater than 100, otherwise it will return false.
 * Console.log your result.
*/ 

function spareChange (money){
	if(money>100){
		return true;
	}else {
		return false;
	}
}

console.log(spareChange(99));

/*
 * #9
 * Function - dirty30
 * Create a function named `dirty30` which takes three parameters: `one`, `two` and `three`.
 *
 *  @param Datatype: Number `one`
 *  @param Datatype: Number `two`
 *  @param Datatype: Number `three`
 *  @return Datatype: Boolean
 *
 * The function will return true if the sum of all the number values is greater than 30, otherwise it will return false.
 * Console.log your result.
*/ 

function dirty30 (one, two, three){
	if ((one + two + three) > 30){
		return true;
	}else{
		return false;
	}
}

console.log(dirty30(10,15,6));

/*
 * #10
 * Function - evenStevens
 * Create a function named `evenStevens` which takes a parameter: `num`.
 *
 *  @param Datatype: Number `num`
 *  @return Datatype: Boolean
 *
 * The function will return true if the number passed in is an even integer, otherwise it will return false.
 * Console.log your result.
*/ 

function evenStevens (num){
	if (num%2===0){
		return true;
	}else{
		return false;
	}
}

console.log("Even integer: " + evenStevens(17));

/*
 * #11
 * Function - daClub
 * Create a function named `daClub` which takes two parameters: `cover` and `age`.
 *
 *  @param Datatype: Number `cover`
 *  @param Datatype: Number `age`
 *  @return Datatype: String
 *
 * If BOTH values are 21 or over, the function will return the message: "Welcome to the Legends Lounge." Otherwise, it will return the message: "Chuck E Cheese is across the street."
 * Console.log your result.
*/ 

function daClurb(cover, age){
	if(age >=21 && cover >=21){
		return "Welcome to the Legends Lounge.";
	}else{
		return "Chuck E Cheese is across the street.";
	}
}

console.log (daClurb(20,20));

/*
 * #12
 * Function - graduation
 * Create a function named `graduation` which takes two parameters: `credits` and `thesis`.
 *
 *  @param Datatype: Number `credit`
 *  @param Datatype: Boolean `thesis`
 *  @return Datatype: String
 *
 * If EITHER the number value is greater than or equal to 120 or the boolean value is true, then the function will return the message: "Congratulations on a job well done." Otherwise, return the message: "See you in summer school."
 * Console.log your result.
*/ 

function graduation (credits, thesis){
	if (credits >= 120 || thesis === true){
		return "Congratulations on a job well done.";
	} else {
		return "See you in summer school";
	}
}

console.log(graduation(119, true));


/*
 * #13
 * Function - moneyTrain
 * Create a function named `moneyTrain` which takes a parameter: `speed`.
 *
 *  @param Datatype: Number `speed`
 *  @return Datatype: String
 *
 * The function will return the message: "You are riding Honolulu's Rail.", if the number value is less than 50, otherwise it will return the message: "You are riding an Amtrak.", if the number value is less than 100, and return the message: "Now you ballin' in the Shinkansen!", if the number value is greater than or equal to 100.
 * Console.log your result.
*/ 

function moneyTrain (speed){
	if (speed < 50){
		return "You are riding Honolulu's Rail.";
	} else if (speed >= 100){
		return "Now you ballin' in the Shinkansen!";
	} else {
		return "You are riding an Amtrak.";
	}
}

console.log(moneyTrain(67));

/*
 * #14
 * Function - buyDoughnut
 * Declare a variable named `budget` and assign it with a number value that is greater than 20.
 * Declare a variable named `doughnutPrice` and assign it with a number value that is greater than 0 but less than 6.
 * Declare a variable named `doughnutBought` and assign it with a number value of 0.
 *
 * Create a function named `buyDoughnut` which takes NO parameters.
 * When the function is invoked, the budget will be decreased by the doughnutPrice and doughnutBought will increase by 1.
 * Console.log budget and doughnutBought.
 * Invoke your function again.
 * Console.log budget and doughnutBought again.
*/ 

var budget = 25;	
var doughnutPrice = 3;
var doughnutBought = 0;

function buyDoughnut () {
	budget = budget - doughnutPrice;
	doughnutBought ++;
	return 'Doughnuts bought: ' + doughnutBought + '. Money left: ' + budget;
}

console.log(buyDoughnut());
console.log(buyDoughnut());


/*
For loops - A for loop checks a condition a specific number of times and allows us to execute a code block and evaluate a condition to determine if our loop should run again.

The for loop is made up of 3 parts:

1) Initialization (i.e. var i = 0;)
2) Condition (i.e. i<arr.length;)
3) Update (i.e. i++)
*/

var toyotaModels = ["Corolla", "Prius", "4 Runner", "Camry", "Land Cruiser"];

for (var i = 0; i<toyotaModels.length; i++){
   console.log("Toyota " + toyotaModels[i]);
}


/* 
 * #15
 * Create a for loop that will iterate 5 times and console.log the following:
 * "Player: 1"
 * "Player: 2"
 * "Player: 3"
 * "Player: 4"
 * "Player: 5"
*/

var players = ["PLayer: 1", "PLayer: 2","Player: 3","Player: 4","Player: 5"];

for (var i = 0; i<players.length; i++){
	console.log(players[i]);
}


/* 
 * #16
 * Create a for loop that will iterate and console.log each item in the array below:
*/
  var myFavFoods = ["lemon bar", "carrot cake", "nachos", "bacon cheeseburger", "ramen", "sweet potato fries", "chimichanga"];

for (var i = 0; i<myFavFoods.length; i++){
	console.log(myFavFoods[i]);
}

/*
 * #17
 * Function - sumItUp
 * Declare a variable named `numArray` and assign it with an array of 5 random numbers of your choice.
 * Declare a variable named `total` and assign it with a number value of 0.
 * 
 * Create a function named sumItUp which takes a parameter: `arr`.
 * 
 *   @param Datatype: Array `arr`
 *   @return Datatype: Number
 * 
 * The function will loop through and add up all the values in the array that is passed into the function and return the total.
 * Console.log your result.
*/

var numArray = [5, 7, 6, 8, 10];
var total = 0;

function sumItUp (arr) {
	for (var i = 0; i<arr.length; i++){
		total = total + arr[i];
	}
	return total;
}

console.log(sumItUp(numArray));

/*
 * #18
 * Function - allStars
 * Create a function named `allStars` which takes a parameter: `ballers`.
 *
 *  @param Datatype: Array `ballers`
 *  @return Datatype: Array
 *
 * The function will loop through the players array and will put all the even number indexed players in the `east` array and the rest in the `west` array.
 * Console.log both the east and west arrays.
*/ 

function allStars (ballers) {
	var eastEven = [];
	var westOdd = [];
	for (var i=0;i<ballers.length;i++){
		if (i%2===0) {
			westOdd.push(ballers[i]);
		} else {
			eastEven.push(ballers[i]);
		}
	}
	return 'Odd players: ' + westOdd + '. Even players: ' + eastEven;
}

console.log(allStars(players));

/*
 * #19
 * Function - subways
 * Create a function named `subways` which takes a parameter: `special`.
 *
 *  @param Datatype: Array `special`
 *  @return Datatype: Array
 *
 * The function will loop through the array value and replace all the odd numbered indexed items with "Classic Tuna".
 * Console.log your results.
*/ 

var subOfTheDay = ["Teriyaki Chicken-0", "Spicy Italian-1", "Turkey-2", "BMT-3", "Black Forest Ham-4", "Meatball Marinara-5", "Veggie-6"];

function subways (special) {
	for (var i = 0; i< special.length; i++){
		if (i%2 !== 0){
			special.splice(i,1,"Classic Tuna");
		}
	}
	return special;
}

console.log(subways(subOfTheDay));

function subways2(special) {
	for (var i = 0; i<special.length; i++){
		if(i%2 !== 0){
			special[i] = "Classic Tuna";
		}
	}
	return special;
}

console.log(subways2(subOfTheDay));

/*
Final Boss
 * #20
 * Function - removeLetter
 * Create a function named `removeLetter`, which takes a parameter `str`. 
 *
 *   @param Datatype: String `str`
 *   @return Datatype: Array
 *
 *  The function will loop through the string value and put all the letters into an array, except for the letter "A" and "a". We don't want no stinking "A" or "a" in our array. Test your function with the `phrase` below!
*/

var phrase = "An apple a day keeps Alice feeling awesome!";
 
function removeLetter (str){
	var txtArr = str.split("");
	for (var i = 0; i<txtArr.length; i++){
		if (txtArr[i] === "A" || txtArr[i] === "a"){
			txtArr.splice(i,1);
		}
	}
	return txtArr.join();
}

console.log(removeLetter(phrase));

function removeLetter2 (str){
  var newStr = str.replace("apple", "orange creamsicle");
  return newStr;
}

console.log("another way: " + removeLetter2(phrase));









