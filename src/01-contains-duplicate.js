/**
 * Given an array of integers, find if the array contains any duplicates. 
 * Your function should return true if any value appears at least twice in the array,
 * and it should return false if every element is distinct.
 */

const containsDuplicate = (nums) =>  {
    if (!Array.isArray(nums)) throw new Error("Invalid argument to function passed.")
    if (!nums.length) return false;

    const set = new Set(nums);
    return nums.length !== set.size;
};

// Tests
try {
    containsDuplicate('123');
} catch (error) {
    console.log("'123'", error.message === 'Invalid argument to function passed.' ? 'pass' : 'fail');
}
console.log("[]", containsDuplicate([1,2,3]) === false ? "pass" : "fail");
console.log("[1,2,3]", containsDuplicate([1,2,3]) === false ? "pass" : "fail");
console.log("[1,2,3,2,4]", containsDuplicate([1,2,3,2,4]) === true ? "pass" : "fail");

