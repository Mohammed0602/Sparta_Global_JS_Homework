// 1. Write a function called 'multiply' that multiplies two numbers and returns the result

function multiply(a, b) {
  var result = a * b;
  return result;

}

// 2. Write a function called 'addThree' that adds three numbers together and returns the result
function addThree(a, b, c) {
  var result = a + b + c;
  return result;
}




// 3. Write a function called 'smallestNumber' that returns the smaller of 2 numbers
function smallestNumber(a, b) {
  var result = Math.min(a, b);
  return result;



}


// 4. Write a function called 'maxOfThree' that returns the largest of 3 numbers

function maxOfThree(a, b, c) {
  var result = Math.max(a, b, c);
  return result;

}


// 5. Write a function called 'reverseString' that returns the reverse a string

function reverseString(str) {
  return str.split("").reverse().join("");

}
reverseString("bye, welcome");

// 6. Write a function called 'disemvowel' that returns the vowels from the string parameter

var name = "markson";

function disemvowel(markson) {
  return name.replace(/[aeiou]/gi, '');
}

// 7. Write a function called 'removeOdd' that removes all ODD number from an array
function removeOdd(array) {
  var rv = [];
  for (var i = 0; i < array.length; i++) {
    if (!(array[i] % 2)) {
      rv.push(array[i]);
    }
  }
  return rv;
}

// 8. Write a function called 'removeEven' that removes all EVEN number from an array
function removeEven(array) {
  var vr = [];
  for (var i = 0; i < array.length; i++) {
    if ((array[i] % 2)) {
      vr.push(array[i]);
    }
  }
  return vr;
}

// 9. Write a function called 'longestString' that takes an array of strings and returns the string with the longest character length
function longestString(array) {
  var array = [ 'hello' , 'goodbye' ];
  In = array.reduce((r,s) => r > s.length ? r : s.length, 0);
  var res = array.filter(pl => pl.length == In);

  return res;

}
// 10. Write a function called 'allElementsExceptFirstThree' that discards the first 3 elements of an array,
// e.g. [1, 2, 3, 4, 5, 6] becomes [4, 5, 6]
function allElementsExceptFirstThree() {
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 ];
  numbers.splice(0, 1, 2, 3);
return allElementsExceptFirstThree;
}

//#### BONUS ####
