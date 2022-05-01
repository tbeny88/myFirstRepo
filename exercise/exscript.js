// Write a function that takes an integer minutes and converts it to seconds

function secondsCalc(minutes) {
    return minutes*60;
}

console.log(secondsCalc(60));

// Create a function that takes a number as an argument, increments the number by +1 and returns the result

function calcPlusOne(num) {
    return num + 1;
}

console.log(calcPlusOne(10));

// Write a function that takes the base and height of a triangle and return its area.

function triArea(base, height){
    return (base * height) / 2;
}
console.log(triArea(10,20));

// Create a function that takes the age in years and returns the age in days.

function ageInDays(age) {
    return age * 365;
}
console.log(ageInDays(35));

// Create a function that takes an array containing only numbers and return the first element.

function array(num1,num2,num3,num4,num5) {
    return num1;
}
console.log(array(1,2,3,4,5));

// Write a function that converts hours into seconds.

function hoursToSec(hours) {
    return hours * 3600;
}

console.log(hoursToSec(1.5));

// Create a function that takes length and width and finds the perimeter of a rectangle.

function rectPerimeter(side1, side2) {
    return (side1*2) + (side2*2) ;
}

console.log(rectPerimeter(2,5));

// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

function sumTwoNums(num1, num2) {
    if (num1+num2 <= 100) {
        return true;
    } 
    else {
        return false;
    }
}
console.log(sumTwoNums(10,85));

// Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

// Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.

function sum10(num1, num2) {
    if (num1 && num2 == 10) {
        return true;
    } else if (num1 + num2 == 10) {
        return true;
    } else {
        return false;
    }
}

console.log(sum10(1,9));

// Create a function that can turn JPY (Japanese yen) to USD (American dollar).

function jpyToUsd(jpy) {
    const usd= 0.0078;
    return jpy * usd;
}
console.log(jpyToUsd(1000));