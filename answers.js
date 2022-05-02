/** 
  * Task description: Write a method that creates a new array with given values 
  * Expected Result: (3, 'a') => ['a', 'a', 'a'] 
  * @param {number} arraySize - size of array 
  * @param {?} value - value to fill 
  * @returns {Array} 
*/

let arraySize = 6;
function newArrayGivenValues(arraySize, value) {
  let arr = [];
  for (let index = 0; index < arraySize; index++) {
    arr.push(value);
  }
  return arr;
}
console.log(newArrayGivenValues(6,'a'));

/** 
  * Task description: Write a method that reverts input array 
  * Expected Result: [1, 2, 3] => [3, 2, 1] 
  * @param {Array} array - Array of any elements 
  * @returns {Array} 
*/

function reversArray(arr) {
  return arr.reverse();
}
console.log(reversArray([2,4,6]));

/** 
  * Task description: Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null 
  * Expected Result: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3] 
  * @param {Array} array - An array of any elements 
  * @returns {Array} 
*/


function keepOnlyNum(array) {
  let arr = [];
  
  for (let index = 0; index < array.length; index++) {
	  let item = array[index];
	  if(!(item == 0 || item == false || item == undefined  || item == null))
			arr.push(item);
  }
  return arr;
}
console.log(keepOnlyNum([0, 1, false, 2, undefined, '', 3, null]));


/** 
  * Task description: Write a method that returns an object composed of key-value pairs. 
  * Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 } 
  * @param {Array} array - a deep array of pairs 
  * @returns {Array} 
*/



/** 
  * Task description: Write a method that returns an array without duplicated values
  * Expected Result: [1, 2, 3, 1, 2] without 1, 2 => [3] 
  * @param {Array} array - Array of primitive data types 
  * @param {?} args list of values to remove 
  * @returns {Array} 
*/

function removeDuplicates(array, args) {
  let arr=[];
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      
    }
}