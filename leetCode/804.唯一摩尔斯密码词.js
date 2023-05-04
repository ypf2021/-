/*
 * @lc app=leetcode.cn id=804 lang=javascript
 *
 * [804] 唯一摩尔斯密码词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
const Morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
var uniqueMorseRepresentations = function (words) {
    let set = new Set()
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let code = "";
        for (let item of word) {
            // console.log(Morse[item.charCodeAt() - "a".charCodeAt()])
            code = code.concat(Morse[item.charCodeAt() - "a".charCodeAt()])
        }
        // console.log(code)
        set.add(code)
    }
    return set.size
};
// console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]))
// @lc code=end

