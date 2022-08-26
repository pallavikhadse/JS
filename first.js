console.log("Hello World")

let num = (2 + 2)
console.log(num)

console.log(num + 3)

let username = "Pallavi"
console.log(username)
console.log("\n")


// Example: Area of a circle
let r = 2
const pi = 3.14
let area

r = 5

area = pi * r * r
console.log(area)
console.log("\n")

// Example: infinity
let num1 = 5 / 0
console.log(num1)

let num2 = -5 / 0
console.log(num2)
console.log("\n")

// Example: Going beyond the maximum value (in JS) gives infinity
console.log(Number.MAX_VALUE)

console.log(Number.MAX_VALUE * 10) // Gives infinity
console.log("\n")


// Example: Concating strings
firstName = "Pallavi"
lastName = "Khadse"

console.log(firstName + " " + lastName)
console.log("\n")

// Example: Adding double quotes

userName = "Pallavi Khadse \"SRH\"" // Add backlash to ignore the double quotes inside the string. Backlash is called Escape character
console.log(userName)

userName = "Pallavi \nKhadse \"SRH\"" // Add backlash and n for next line
console.log(userName)

userName = "Pallavi Kh\tadse \"SRH\"" // Add backlash and t for tab
console.log(userName)
console.log("\n")


// Example of Type conversion / Explicit Conversion

let num3 = 123
console.log(num3, typeof num3)

num3 = "123"
console.log(num3, typeof num3)

num3 = String(123)
console.log(num3, typeof num3) // conversion from number to string

num3 = Number("123") // conversion from string to number
console.log(num3, typeof num3)
console.log("\n")


// Example of Type coercion

let x = 9

console.log(x, typeof x)

x = x + ""
console.log(x, typeof x) // This will give String in  Operator "+" will give String.

// x is String now

x = x - 2

console.log(x, typeof x) //  Operator "-" will converts x which is String to Number.
console.log("\n")


// Example: Fetching number/s from the string by using conversion function "parseInt"

let y = parseInt("910 Pallavi 456") // parseInt will only fetch the first numbers in the given String
console.log(y)
console.log("\n")


// Example: Pre increment, Post increment and Pre decrement, Post decrement

let num5 = 5

let x1 = num5++ // x1 = num + 1 = 6 // In post increment, it will first assign the value of num5 to x1 and then increment by 1.
    console.log(x1, num5) // Post increment.

let x2 = ++num5 // x1 = 1 + num = 6  // In pre increment, it will first increment by 1 and then assigning to x2.
console.log(x2, num5) // Pre increment.
console.log("\n")


// Example: Exponential - 3 ways.

let num6 = 2

let result = console.log(num6 * num6 * num6)
result = console.log(Math.pow(2, 3))
result = console.log(num6 ** 3)
console.log("\n")


// Example: Relational operator "= = ="

let x3 = '5' // String
let x4 = 5
let x5 = 5

let data1 = x3 === x4 // for comparing two different data types, use three equal to signs .
console.log(data1)

let data2 = x5 == x4 // When using two equal to signs, it will be converted to Type Coercion and convert the data types of the variables as per the relational operators.
console.log(data2)
console.log("\n")


// Example: console.Logical operator "Not" ("|")

let a = 5,
    b = 3,
    c = 4

let res = a < b || a < c //  false || false gives false

let n = !res // !false = true

console.log(res, n)
console.log("\n")


// Example: if-else conditional statement

let num7 = 6
let result1

if (num7 % 2 === 0) {
    result1 = "Even"
} else {
    result1 = "Odd"
}
console.log(result1)
console.log("\n")


// Example of Ternary operator "?:"

num7 = 7

result1 = num7 % 2 === 0 ? "Even" : "Odd"

console.log(result1)
console.log("\n")


// Example of Switch cases, Alarm on different days:

let day = "Holiday" // User input here

switch (day) {
    case "Monday":
        console.log("7am")
        break

    case "Tuesday":
        console.log("6.30am")
        break

    case "Wednesday":
    case "Thursday":
        console.log("9am")
        break

    case "Friday":
        console.log("8am")
        break

    case "Saturday":
    case "Sunday":
        console.log("10am")
        break

    default: // For any user input (for eg: "Holiday")
        console.log("Take rest")
}

console.log("Bye")
console.log("\n")


// Example: Temple Literal for printing the values of variables

let number1 = 10
let number2 = 15

let resultant = number1 + number2

//Old-way : console.log("The addition of" + " " + number1 + " " + "and" + " " + number2 + " " + "is equal to" + " " + resultant)
console.log(`The addition of ${number1} and ${number2} is equal to ${resultant}`) // Use "`" instead of double quotes and use "${}" for the value of variables.
console.log("\n")


// Example: Temple Literal for starting new line

console.log(`My name is 
Pallavi Khadse`) // This will print as it is.
console.log("\n")

// Example: While loop

let i = 1
    //console.log("Hi", i);

while (i <= 5) { // In while loop, first it will check the condition and then execute the statement.
    console.log("Hi", i)
    i++
}

console.log("\n")

let j = 5
while (j > 0) { // for printing numbers in descending orders
    console.log("Hi", j)
    j--
}

console.log("\n")


// Example of do-while loop

let a1 = 7
do { // do-while loop first execute the statement and the check the condition
    console.log("Hi", a1)
    a1++
} while (a1 <= 10)

console.log("\n")


// Example of for-loop and nested for-loop

for (let i1 = 1; i1 <= 5; i1++) {
    console.log("Hello", i1)

    for (let j1 = 1; j1 <= 5; j1++) // nested for-loop
        console.log("Hi", j1)
}

console.log("\n")


// Example of for-loop where a number is divisible for some number

for (i2 = 1; i2 <= 100; i2++) {
    if (i2 % 3 === 0) // Print numbers those are divisible by 3 between 1 to 100
        console.log(i2)
}

console.log("\n")


// Example of for-loop where you want to print each digit in a given number individually

let numb = 435813

while (numb > 0) {
    console.log(numb % 10)
    numb = parseInt(numb / 10)
        //console.log(numb)
}

console.log("\n")


// Example of Object

let input = 'name'

let alien = {
    name: 'Pallavi',
    tech: 'JS',
    'work exp': 2, // When writing key as two words, it is alway inside the quotes.
    laptop: {
        brand: 'Lenovo',
        cpu: 'i7',
        ram: 8
    }

}

console.log(alien)

console.log(alien['work exp']) // For printing the value of the key with two words, [] is used.

console.log(alien[input]) // if the key is pre-defined as a variable (for eg. 'input'), then to print its value, [] is used.

console.log(alien.laptop)

console.log("\n")

console.log(alien.laptop.brand.length)

console.log("\n")

//console.log(alien ? .laptop.brand.length) // recheck this syntax

delete alien.tech // for deleting any key or a property

console.log(alien)

console.log("\n")

// For printing a property or key again and again using 'For In Loop'

for (let key in alien) {
    console.log(key)
}

console.log("\n")

for (let key in alien.laptop) {
    console.log(key) // for printing the values of key "laptop"
}

console.log("\n")

for (let key in alien) {
    console.log(key, alien[key])
}

console.log("\n")


// Example of Function

function greet(u1, u2) {
    //console.log("Hello World")
    return `Hi ${u1}, ${u2}`
        //return "Hello"   // it will only take one return value and only print one return
}

//greet()

let user1 = "Pallavi"
let user2 = "Saanvi"


// Example of returning a value from a Function to a variable. 

let str = greet(user1, user2)
console.log(str)

console.log("\n")



// Function is treated as "Object" in JavaScript

let add = function(numbs1, numbs2) { // this is called Function Expression. Anonymous function or Object assigned to a variable.
    return numbs1 + numbs2
}

let summation = add

let resultant1 = summation(5, 7)

console.log(resultant1)

console.log(summation)

console.log("\n")


// Example of Function and its parameters

function addition(n1, n2, n3 = 1) {
    console.log(n1, n2, n3);
    return n1 + n2 + n3
}

let resultant2 = addition(2, 2) // When n3 value is not given in the parameter, default value of n3 is taken from the Function parameter

let resultant3 = addition(2, 2, 5) // Here, since value of n3 is given, it will ignore the default value of n3 from the given Function parameter which is n3=1.

console.log(resultant2);
console.log(resultant3);

console.log("\n")


// Example of Arrow function (converting anonymous function to Arrow Function for reducting the no. of expressions or lines)

let add1 = (numbs1, numbs2) => numbs1 + numbs2 // if there is only return, in Arrow Function we don't need to mention it or even use curly brackets.
    //{
    //return numbs1 + numbs2
    //}

//let summation = add

let resultant4 = add(5, 7)

console.log(resultant4)

console.log("\n")

// Example of "Constructor" / Blue Print:

function Alien(name, tech) {
    this.name = name;
    this.tech = tech;

    this.work = function() {
        console.log("Solving bugs from 12 hours.");
    }
}

let alien1 = new Alien('Pallavi', 'Javascript')
let alien2 = new Alien('Saanvi', 'Phyton');

console.log(alien1);
console.log("\n")

console.log(alien2);
console.log("\n")

alien1.tech = 'Blockchain'; // Changing the property of an instant.
console.log(alien1);

console.log("\n")

alien1.work()
console.log("\n")


// Example of Array:

//let values = new Array(); Multiple ways of defining Array

let values = [5, 8, 10, 'Pearl'];
console.log(values);
console.log("\n")

values.push(2); // For adding a values in the Array
console.log(values);
console.log("\n")

console.log(values.length);
console.log("\n")

console.log(values[3]) // For fetching the values from the Array, use index no.
console.log("\n")

console.log(values[5]) // there is no 5th element, it will print undefined. So always check the lenght of the Array to check the no. of values.
console.log("\n")


// Example of Different types of data in Array

let names = ['Pallavi', 'Saanvi', 'Pearl']
console.log(names);
console.log("\n")

names[3] = 'Jigna' // Adding a new value

console.log(names);
console.log("\n")

// Example of Mixed data types in Array

let data = ['Pallavi', 10, { tech: 'Python' }, function() { console.log("Hey World"); }];
console.log(data);
console.log("\n")

data[3](); // When calling a funtion in given a Array, first specify its index and call the funtion using "()".
console.log("\n")



// Example of different Methods in Array:

let data3 = [10, 9, 3, 15]

data3.push(6); // for adding an element in the Array at its end.
console.log(data3);
console.log("\n")

data3.pop(); // This method "pop" will remove the last element from the given Array.

console.log(data3);
console.log("\n")

data3.pop();
console.log(data3);
console.log("\n")

data3.shift(); // This method "shift()" will remove the first element from the given Array.
console.log(data3);
console.log("\n")

data3.unshift(4); // This method "unshift()" will added a new element in the start of the Arrray.
console.log(data3);
console.log("\n")


// Example of Array for removing a element or elements from a given Array.

let data4 = [1, 2, 3, 4, 5]
console.log(data4.splice(3)); // This method "splice" will remove all the elements on the right from the given index no. 
console.log("\n")

console.log(data4);
console.log("\n")

data4.push(4, 5)
console.log(data4);
console.log("\n")

console.log(data4.splice(0, 2)); // For removing two elements from index no. "0".
console.log(data4);
console.log("\n")


// Example of "For-of" loop in Array

let numss = []

numss[0] = 5
numss[99] = 9

console.log(numss);
console.log("\n")

console.log(numss.length); // for checking the length of the given Array
console.log("\n")

for (let n of numss) { // for printing all the elements one by one of the Array
    console.log(n);
}
console.log("\n")

for (let key in numss) {
    console.log(numss[key]); // To prin the values of the keys or elements in the given Array.
}
console.log("\n")

for (let key in numss) { // To print the keys. Here Keys are the index numbers of the given element in the Array
    console.log(key);
}
console.log("\n")


// Example of Destructing an Array

let numms = [5, 9, 1, 4]
console.log(numms);
console.log("\n")

let [e1, f1, g1] = numms
console.log(g1); // It will not print the fourth element "4" in the given Array as the variable "d" is not declared.
console.log("\n")

let [e, f, , h] = numms // Assigning elements to the alphabets. Also, as "g" is missing and it is shown by "," the fourth element is assigned to "h".
console.log(h);
console.log("\n")

// Example of Swapping two values using Destructing the Array

let p = 9;
let q = 8;

[p, q] = [q, p]

console.log(p, q);
console.log("\n")

// Example of "..."

let words = "My name is Pallavi Khadse";
console.log(words);
console.log("\n")

// The above declared variable "words" is just a String. 
// But to change that String to Array, that is, assign each word in the Strings to the element of an Array, do the below exercise.

words = words.split(' ');
//words = "My name is Pallavi Khadse".split(' ');
let [a3, b3, c3, d3, e3] = words; // Here the variable "words" is converted from String to a Array
console.log(d3);
console.log("\n")

let [a4, b4, , ...d4] = words; // Now to print "Pallavi Khadse" together, that is two elements of the given Array together.
console.log(d4);
console.log("\n")