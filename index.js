function hasTargetSum(array, target) {
  // Write your algorithm here
  const seen = new Set();

  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    if (seen.has(complement)) {
      return true;
    }
    seen.add(array[i]);
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
1. Iterate through each number in the array.
2. Check if the sum of the current number and any other number in the array equals the target.
3. If a pair is found, where the sum equals the target, return true.
4. If no such pair is found after iterating through the entire array, return false.
*/

/*
1. Add written explanation of your solution here
2. Create an empty set called seen to keep track of the numbers we have encountered so far.
3. Iterate through each number in the array.
4. For each number, calculate the complement by subtracting it from the target value. The complement is the number we would need to find in the array to reach the target sum.
5. Check if the complement exists in the seen set. If it does, it means we have found a pair of numbers that sum up to the target value, so we return true.
6. If the complement is not in the seen set, add the current number to the seen set and continue to the next iteration.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));
  // The array contains the pair [3, 7] which sums up to 10

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));
  // The array contains the pair [19, 6] which sums up to 25

  console.log("");
  
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
