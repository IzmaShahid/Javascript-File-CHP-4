// // 3 variable in one state
// var userName = 'IzmaShahid';
// var age = 14;
// var grade = 9;
// var message = `I am ${userName} and I am ${age} years old. I study in class ${grade}`;
// console.log(message);
// document.write(message);

// // declare legal variable 
// let myvariable;
// let _totalAmount;
// let user123;
// let is_valid;
// let pricePerUnit;

// //  illegal variable
// let 2ndPlace;
// let total-amount;
// let user name;
// let class;
// let @username;
var heading = "<h3>Rules for naming JS variables</h3>";
document.write(heading);
var validcharacter=(`letter,digits,underscore,dollarsign.<br/>`);
var message2 =`Variable names can only contain ${validcharacter}`;
document.write(message2);
var variablebegin=(`letter, $ or _.<br/>`);
var message3 =`Variable must begin with a ${variablebegin}`;
document.write(message3);

var text = "sensitive";
var message4 = `Variable names  are case ${text}.<br/>`; 
 document.write(message4);

 var word = "Keyword";
var message5 = ` Variable names should not be JS ${word}.`; 
 document.write(message5);