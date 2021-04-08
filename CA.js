// 1.	Create an array called ages that contains the 
//following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// a.	Programmatically subtract the value of the 
//first element in the array from the value in the 
//last element of the array (do not use numbers to
// reference the last element, find it 
//programmatically, ages[7] – ages[0] is not allowed).
// Print the result to the console.

let last = ages[ages.length-1];  // creates a variable for whatever element is
// last in the array (array length is 1 more that the number of elements due to
// arrays being 0 indexed)
let first = ages[0];        // creates a variable for the first element
console.log(last - first);  // logs sum of subtracting first element from last

// b.	Add a new age to your array and repeat the step
// above to ensure it is dynamic (works for arrays of different lengths).

// let ages = [3, 9, 23, 64, 2, 8, 28, 93, 33];

//     let last = ages[ages.length-1];
//     let first = ages[0];
//     console.log(last - first);  // it works so it IS dynamic
    

// c.	Use a loop to iterate through the array and calculate 
// the average age. Print the result to the console.

//let ages = [3, 9, 23, 64, 2, 8, 28, 93, 33];
let sum= 0; // sum starts at 0

for(let i = 0; i < ages.length; i++) { 
//let loop start at index 0; as long as the current index is less than the last
// index of the array; iterate to the next element;  
    sum += ages[i]; // as the loop iterates over the array, it adds each value
    // to the last
}   //sum starts at 0, once the element @ index 0 is accessed (3) it adds it to
    // the previous value of sum (0 + 3)
    //the sum is now 3 then it accesses index 1 (9) and adds it to previous sum
    // (3 + 9 = 12) the sum is now 12...etc. until the exit of loop

let totalElements = ages.length; //assigns length of ages array to totalElements variable
console.log(totalElements); //prints 8 (there are 8 elements in the ages array)
let avg = sum/totalElements; //assigns value of sum divided by totalElements to avg variable

console.log(avg); //prints 28.75 (the sum of all the ages divided by the amount of ages)

// 2.	Create an array called names that contains the following
// values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

// a.	Use a loop to iterate through the array and calculate the
// average number of letters per name. Print the result to the console

//STEPS TO FIND AVERAGE LETTERS PER NAME
//1. count names - 6
//2. add all letters - 23
//3. divide total amount of letters by total amount of names 23/6
//4. average name length = 3.83 letters

let lettersInArr = 0

for(let i = 0; i < names.length; i++) {  // (names[i].length)
    lettersInArr += names[i].length; //adds element^   ^lengths in names array
                                    // as it iterates through elements in array
        //because we're still in the for loop:
   console.log(names[i].length); // prints each element length on separate line  
   console.log(lettersInArr);   // prints letters in array up to that point
}                               // lines 69&70 alternate after each iteration

//console.log(names[i].length); //creates error since i is not defined globally
console.log(lettersInArr); //prints the total letters in the array once loop
                            // has been exited

let avgLetters = lettersInArr/names.length;

console.log(avgLetters);

// b.	Use a loop to iterate through the array again and concatenate
// all the names together, separated by spaces, and print the result 
// to the console.

var allNames = ""; //declares allNames and assigns empty string
//var x;             //declares x variable 
for (x in names) { //loops through every element IN names array
 allNames += `${names[x]} `; // as the loop iterates, each literal element 
                    // is added to the last creating a concatenated string
} 
console.log(allNames); // prints allNames variable with concatenated names

// 3.	How do you access the last element of any array?

// anyArray[anyArray.length-1]

// 4.	How do you access the first element of any array?

// anyArray[0]

// 5.	Create a new array called nameLengths. Write a loop to iterate
// over the previously created names array and add the length of each
// name to the nameLengths array.

let nameLengths = []; // creates nameLengths array and assigns empty string

for(let i = 0; i < names.length; i++) { // loops through entire names array
    nameLengths.push(names[i].length);// pushes the length of all elements 
}                                     // from names array to nameLengths array
console.log(nameLengths);  // prints total number of array elements 
                           // followed by length of each element

// 6.	Write a loop to iterate over the nameLengths array and
// calculate the sum of all the elements in the array. Print the
// result to the console.

let sumOfNameLengths = 0; //declare variable for sum and assign it to start at 0
for (let i = 0; i < nameLengths.length; i++) {
 sumOfNameLengths += nameLengths[i]; //adds each element's length as loop iterates
}
console.log(sumOfNameLengths); //prints the total letters in the array

// 7.	Write a function that takes two parameters, word and n, as 
// arguments and returns the word concatenated to itself n number of 
// times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function
// to return ‘HelloHelloHello’).

function multiply (word, number) { //declares function with parameters word & number
    let addedWord = ''; //declares a variable to add the concatenated word variable to
        while (number > 0) { //while the number is greater than 0
            addedWord += word; //concatenates the word to itself 
            number--; //as it iterates, the number decreases until it is no 
        }              // longer greater than 0 in which it exits the loop
    return addedWord;
}
        console.log(multiply('Hello', 5)); //prints "HelloHelloHelloHelloHello"
    
// 8.	Write a function that takes two parameters, firstName and 
// lastName, and returns a full name (the full name should be the
// first and the last name separated by a space).

function makeFullName (firstName, lastName) {
return firstName + " " + lastName; //concatenates firstName & lastName
}                                  //  with a space in between
console.log(makeFullName("Tom", "Sawyer")); // prints "Tom Sawyer"

// 9.	Write a function that takes an array of numbers and returns
// true if the sum of all the numbers in the array is greater than 100.

function sumIsGreaterThan100 (arrayOfNumbers) {
    let arrayTotal = 0;   //declares a variable to hold value of added array total
    for(let i = 0; i < arrayOfNumbers.length; i++) { //loops thru array
        arrayTotal += arrayOfNumbers[i];  // adds each element in array to arrayTotal
    }
    let isGreaterThan100 = false // presets condition to false
    if(arrayTotal > 100) {   //but if arrayTotal is greater than 100
        isGreaterThan100 = true; // changes coditional to true 
    }
    return isGreaterThan100; // returns true or false
}
console.log(sumIsGreaterThan100([100, 1])); //prints true
console.log(sumIsGreaterThan100([1, 2])); //prints false

// 10.	Write a function that takes an array of numbers and returns
// the average of all the elements in the array.

function avgOfArray (arrayOfNumbers) {
    let sum = 0; //declares variable and assigns it value of 0
    for(let i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i]; //adds current element of array to sum
    }
    let avg = sum/arrayOfNumbers.length; //declares avg variable and assigns it
                    //the value of sum divided by number of elements in the array
    return avg;     //returns avg value
}
console.log(avgOfArray([0, 20])); //prints 10
console.log(avgOfArray([0, 10, 20])); //prints 10

// 11.	Write a function that takes two arrays of numbers and returns
// true if the average of the elements in the first array is greater
// than the average of the elements in the second array.

function avgAIsGreaterThanAvgB (arrayA, arrayB) {
    let avgA = avgOfArray(arrayA); //creates variable by calling averageOfArray
                                  //function with arrayA for the parameter
    let avgB = avgOfArray(arrayB); //creates variable by calling averageOfArray
                                 //function with arrayB for the parameter
    return avgA > avgB; //avgA has to be greater than avgB for this to be true
                        //if it isn't, it's false
}

console.log(avgAIsGreaterThanAvgB([1,33,12,5],[5,64,2])); //prints false since 
                //the average of arrayA is NOT greater than that of arrayB
console.log(avgAIsGreaterThanAvgB([3,5,15],[2,4,16])); //prints true since
                //average of arrayA IS greater than that of arrayB

// 12.	Write a function called willBuyDrink that takes a boolean
// isHotOutside, and a number moneyInPocket, and returns true if it
// is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink (isHotOutside, moneyInPocket) {
    if(isHotOutside && moneyInPocket > 10.50) { //condition checking if 
                        //isHotOutside is true AND(&&) moneyInPocket is more than $10.50
        return true;    //returns true if both are true
    } else {            //if either one or both is false
        return false;   //it returns false
    }    
}
console.log(willBuyDrink(true, 20)); //prints true since isHotOutside is true
                                    // and moneyInPocket is $20
console.log(willBuyDrink(true, 1.00)); //prints false although isHotOutside is true 
                                        // because moneyInPocket is only $1

// 13.	Create a function of your own that solves a problem. In 
// comments, write what the function does and why you created it.

//to find the tax on the price, convert the tax percentage 
// to decimal form, multiply this by the price, then add it to the price for the total price

function calculateTax (price, percent) { //creates calculateTax function with 2 parameters
    let decimal = percent/100;//declares decimal variable & assigns the value of percent divided by 100 
    let taxAmount = price*decimal; //holds value of price multiplied by the decimal
    let totalCost = price + taxAmount; //holds value of price added to taxAmount
    return totalCost.toFixed(2); //rounds totalCost to (2) decimal places
}

console.log(calculateTax(9.55, 10)); //prints 10.51 (calculateTax function with 9.55 passed into the price parameter
                                    // and 10 passed into the percent parameter)
console.log(calculateTax(25, 5));   //prints 26.25 (calculateTax function with 25 passed into the price parameter
                                    // and 5 passed into the percent parameter)