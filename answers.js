/** 
  * Task description: Write a method that creates a new array with given values 
  * Expected Result: (3, 'a') => ['a', 'a', 'a'] 
  * @param {number} arraySize - size of array 
  * @param {?} value - value to fill 
  * @returns {Array} 
*/

function newArrayGivenValues(arraySize, value) {
  let arr = [];
  for (let index = 0; index < arraySize; index++) {
    arr.push(value);
  }
  return arr;
}
console.log(newArrayGivenValues(3,'a'));

/** 
  * Task description: Write a method that reverts input array 
  * Expected Result: [1, 2, 3] => [3, 2, 1] 
  * @param {Array} array - Array of any elements 
  * @returns {Array} 
*/

function reversArray(arr) {
  return arr.reverse();
}
console.log(reversArray([1,2,3,4]));

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
console.log(keepOnlyNum([0, 1,"", false, 2, undefined, '', 3, null]));


/** 
  * Task description: Write a method that returns an object composed of key-value pairs. 
  * Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 } 
  * @param {Array} array - a deep array of pairs 
  * @returns {Array} 
*/

function task4(arr) {
  let obj= {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i][0]]= arr [i][1];
  }
    return obj;
}
  let test=[
    ["a",1],
    ["a",2],
    ["a",3],
  ];

  console.log(task4(test));

/** 
  * Task description: Write a method that returns an array without duplicated values
  * Expected Result: [1, 2, 3, 1, 2] without 1, 2 => [3] 
  * @param {Array} array - Array of primitive data types 
  * @param {?} args list of values to remove 
  * @returns {Array} 
*/

const task5 = (arr) => {
    return arr.filter((el, index) => {
    return arr.indexOf(el) == index;
    });
};

console.log(task5([1,1,3,4,5,5,8,8]));