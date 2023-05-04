var lengthOfLongestSubstring = function (s) {

    let set = new Set()
    let left = 0;
    let right = 0;
    let maxLength = 0;

    for (left; left < s.length; left++) {

        while (!set.has(s[right]) && right < s.length) {
            set.add(s[right]);
            right++
        }
        maxLength = Math.max(maxLength, set.size)
        console.log(maxLength)
        set.delete(s[left])
    }

    return maxLength
};

console.log(lengthOfLongestSubstring("bbbbb"))