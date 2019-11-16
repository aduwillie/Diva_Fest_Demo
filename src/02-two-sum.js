/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target. 
 * You may assume that each input would have exactly one solution, and you may not use the *same* element twice.
*/

const twoSumBruteForce = (nums, target) => {
    let output = [];
    for (let i = 0; i < nums.length - 1; i++) {
        let isSolved = false;
        output[0] = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                output[1] = j;
                isSolved = true;
                break;
            }
            
        }
        if (isSolved) break;
    }
    return output;
};

const twoSum = (nums, target) => {
    const lookup = {};
    let output = [];
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (lookup[complement] >= 0) output = [i, lookup[complement]];
        lookup[nums[i]] = i;
    }
    return output.sort();
};

// Testing
console.log(
    "[2,7,11,15]",
    JSON.stringify(twoSum([2, 7, 11, 15], 9)) == JSON.stringify([0, 1])
        ? "pass" : "fail"
);
console.log(
    "[11, 15, 2, 7]",
    JSON.stringify(twoSumBruteForce([11, 15, 2, 7], 9)) == JSON.stringify([2, 3])
        ? "pass" : "fail"
);

// Measure execution time for both functions
const generateSequence = (end) => {
    const nums = [];
    for (let i = 0; i < end; i ++) {
        nums.push(i+1);
    }
    return nums;
};
// const input = [1,2,3,4,5,6,7,8,9,10];
const input = generateSequence(50000)
const target = input[input.length - 1] + input[input.length - 2];

console.time('twoSum');
twoSum(input, target);
console.timeEnd('twoSum');

console.time('twoSumBruteForce');
twoSumBruteForce(input, target);
console.timeEnd('twoSumBruteForce');

