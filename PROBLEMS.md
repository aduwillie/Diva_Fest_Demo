# Example Interview Problems

## Problem 1

Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.


### Example 1

const input = [1,2,3,1];
const expectedOutput = true;
const result = containsDuplicates(input)
expect(result).toEqual(expectedOutput);

### Example 2

const input = [1,2,3,4];
const expectedOutput = false;
const result = containsDuplicates(input)
expect(result).toEqual(expectedOutput);

## Problem 2

Given an array of integers, return *indices* of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the *same* element twice.

### Example 1

const input = [2,7,11,15];
const target = 9;
const expectedOutput = [0, 1];
const result = twoSum(input, target);
expect(result).toEqual(expectedOutput)

## Problem 3

Given two strings s and t, write a function to determine if t is an anagram of s.

## Example 1

const s = "anagram";
const t = "nagaram";
const expectedOutput = true;
const result = isAnagram(s, t);
expect(result).toEqual(expectedOutput)
