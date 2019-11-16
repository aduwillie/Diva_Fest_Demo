/**
 * Given two strings s and t, write a function to determine if t is an anagram of s.
 */

const isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    const map = {}
    for (let i = 0; i < s.length; i++) {
        const val = s[i];
        if (!map[val]) map[val] = 1;
        else map[val] += 1;
    }
    
    for (let j = 0; j < t.length; j++) {
        const val = t[j];
        if (!map[val]) return false;
        if (map[val] === 0) return false;
        map[val] -= 1;
    }
    
    return true;
};

console.log(
    'anagram, nagaram', 
    isAnagram('anagram', 'nagaram') === true ? "pass" : "fail");
