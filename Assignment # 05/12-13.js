                                    /* Question 01 */
var ascii = +prompt("Enter a character");

if( 65 <= ascii <=90 ){
    console.log("Uppercase Letter ");
}else if(97 <= ascii <=122){
     console.log("Lowercase Letter");
}else{
    console.logg("Other Character");
} 

                                    /* Question 02 */
let num1 = +prompt("Enter the first integer: ");
let num2 = +prompt("Enter the second integer: ");
                                                                     
if (num1 > num2) {
    console.log(num1 + " is larger than " + num2);
}else if (num2 > num1){
    console.log(num2 + " is larger than " + num1);
}else {
     console.log("Both numbers are equal.");
}
                                
                                    /* Question 03 */ 
var number = +prompt("Enter a number: ");

if (number > 0) {
    console.log(number + " is a positive number.");
}else if (number < 0) {
    console.log(number + " is a negative number.");
}else {
    console.log("The number is zero.");
}
                      
                                    /* Question 04 */
var char = prompt("Enter a character: ");

if (char.length === 1) {
    console.log("Is the character a vowel");
}else {
    console.log("Please enter a single character.");
}                                
                  
                                   /* Question 05 */
var userPassword = +prompt("Enter your password:");
var correctPassword = +prompt("mySecurePassword");
                                   
if (userPassword === "") {
    console.log("Please enter your password.");
}else if (userPassword === correctPassword) {
    console.log("Correct!");
}else {
    console.log("Incorrect password.");
}              
                         
                                 /* Question 06 */
var greeting;
var hour = 13;
                                 
if (hour < 18) {
     greeting = "Good day";
}else {
    greeting = "Good evening";
}    

console.log(greeting);

                                /* Question 07 */
var time = parseInt(prompt("Enter time in 24-hour clock format (e.g., 1900 for 7pm):"));

if (time >= 0 && time < 1200) {
    console.log("Good morning!");
}else if (time >= 1200 && time < 1700) {
    console.log("Good afternoon!");
}else if (time >= 1700 && time < 2100) {
    console.log("Good evening!");
}else if (time >= 2100 && time <= 2359) {
    console.log("Good night!");
}else {
    console.log("Invalid time. Please enter a time between 0000 and 2359.");
}