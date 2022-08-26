function hasTargetSum(array, target) {
  // Write your algorithm here
    for (let i = 0; i < array.length; i++) {
      const difference = target - array[i];
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] === difference)
        return true;
      }
    }
    return false;

}


/*
  Write the Big O time complexity of your function here

  It uses Quadratic time since the for loop is nested
  Thus;
  = O(n^2)
*/

/*
  Add your pseudocode here

  Iterate over the numbers array
  Variable to stores the difference between the current number and the target
  iterate over the array with other numbers
  Compare equality between value in difference variable and any of the numbers in array
  If equal then return true
  Else, return false


*/

/*
  Add written explanation of your solution here

  Iterate over the numbers array
  Have a variable that stores the difference between the current number and the target
  iterate over the array with other numbers
  check if any on the numbers are equal to the difference got between the current number and the target
  If equal then return true
  Else, return false

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
