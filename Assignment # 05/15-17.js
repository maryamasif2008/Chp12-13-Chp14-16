                                   /* Question 01 */
var arr = [];  
console.log(arr) 

                                   /* Question 02 */
var arr = [1,2,3];
console.log(arr)

                                   /* Question 03 */
var stringArray = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(stringArray);

                                   /* Question 04 */                                 
var numbersArray = [10, 20, 30, 40, 50];
console.log(numbersArray);

                                   /* Question 05 */
var booleanArray = [true, false, true, false, true];
console.log(booleanArray);
 
                                   /* Question 06 */
var mixedArray = [42, "Hello", true, 3.14, "World", false, 100];
console.log(mixedArray);

                                   /* Question 07 */
var qualifications = ["<h1>Qualifications</h1> \n 1)SSC <br> 2)HSC <br> 3)BCS <br> 4)BS <br> 5)BCOM <br> 6)MS <br>  7)M. Phil. <br> 8)PhD"];
document.write(qualifications);
                           
                                   /* Question 08 */
 var studentName = ["Mirha is"];
 var number = [320];
 var totalNumber = [500];                       

 document.write("<br>" + "<br>" + "Score of" + " " + studentName + "  " + number + " " + ".Percentage: 64%" )

 var studentName = ["Hania is"];
 var number = [300];
 var totalNumber = [500];                       

 document.write("<br>" + "Score of" + " " + studentName + "  " + number + " " + ".Percentage: 50%" )

 var studentName = ["Ishaal is"];
 var number = [350];
 var totalNumber = [500];                       

 document.write("<br>" + "Score of" + " " + studentName + "  " + number + " " + ".Percentage: 70%" )

                                   /* Question 09 */
var colorArray = ['Red', 'Blue', 'Green', 'Yellow'];
    document.write("<br>" + "<br>" + colorArray);

// a. Ask the user to add a color at the beginning
var colorToAddBeginning = prompt('Enter a color to add at the beginning of the array:');
colorArray.unshift(colorToAddBeginning);
displayArray(colorToAddBeginning);

// b. Ask the user to add a color at the end
var colorToAddEnd = prompt('Enter a color to add at the end of the array:');
colorArray.push(colorToAddEnd);
displayArray(colorToAddEnd);

// c. Add two more colors to the beginning
colorArray.unshift('Orange', 'Purple');
displayArray(colorArray);

// d. Delete the first color in the array
colorArray.shift();
displayArray(colorArray);

// e. Delete the last color in the array
colorArray.pop();
displayArray(colorArray);

// f. Ask the user where to add a color and what color
var indexToAdd = prompt('At which index do you want to add a color?');
var colorToInsert = prompt('Enter the color to add at index ' + indexToAdd + ':');
colorArray.splice(indexToAdd, 0, colorToInsert);
displayArray(indexToAdd + indexToInsert);

// g. Ask the user where to delete colors and how many
var indexToDelete = parseInt(prompt('At which index do you want to delete color(s)?'));
var numOfColorsToDelete = parseInt(prompt('How many colors do you want to delete?'));
colorArray.splice(indexToDelete , numOfColorsToDelete);
displayArray(indexToDelete + numOfColorsToDelete);                                   

                                   /* Question 10 */
var score1 = [320,230,480,120];
document.write("<br>" + "<br>" + "Scores Of Students:" + " " + score1)

var score2 = [120,230,320,480];
document.write("<br>" + "<br>" + "Ordered Scores of Student:" + " " + score2)

                                  /* Question 11 */
var city = ["Cities list:"];
var citiesName = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"];
document.write("<br>" + "<br>" + city + " <br> " + citiesName)
                                  
var select = ["Select cities list:"];
var selectCities = ["Islamabad" , "Quetta"];
document.write("<br>" + "<br>" + select + " <br> " + selectCities)

                                  /* Question 12 */
var arr = ["This", " is", " my", " cat"];
var result = ["This is my cat"];
console.log(result);                                  
  
                                  /* Question 13 */
 var queue = ["Devices:  <br> <br>" ];
 console.log(queue) 

queue.push("Mouse");
queue.push("Monitor");
queue.push("Keyboard");

console.log(queue.shift(Mouse));  
console.log(queue.shift(Monitor));  
console.log(queue.shift(Keyboard));  

                                 /* Question 14 */
var stack = ["Devices: <br> <br>"]; 

stack.push("Mouse");
stack.push("Monitor");
stack.push("Printer");

console.log(stack.pop(Printer)); 
console.log(stack.pop(Monitor)); 
console.log(stack.pop(Mouse)); 

                                /* Question 15 */
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write('<select>');

 for (var i = 0; i < manufacturers.length; i++) {
     document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
 }
 document.write('</select>');                               
