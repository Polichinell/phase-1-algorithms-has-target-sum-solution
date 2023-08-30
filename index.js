function hasTargetSum(array, target) {
  // iterate over the array of numbers
  for (let i = 0; i < array.length; i++) {
    // for the current number, identify a complementary number that adds to our target
    // (for example: if our number is 2, and the target is 5, the complementary number is 3)
    const complement = target - array[i];
    // iterate over the remaining numbers in the array
    for (let j = i + 1; j < array.length; j++) {
      // check if any of the remaining numbers is the complement
      // if so, return true
      if (array[j] === complement) return true;
    }
  }
  // if we reach the end of the array, return false
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here

  loop i go through array
  loop j go through array
  i = j ? continue
  i != j {
    i+j = target => true
    else continue
  }

  => false if nothing matches
*/

/*
  Add written explanation of your solution here

    a first for loop for the first number, then a second for the following in the array
  if it's the same, the loop continues
  if num1 and num2 equals to the target, it returns true
  otherwise it keeps looping

  outside the loop, it returns false if it doesn't find a match for target
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
