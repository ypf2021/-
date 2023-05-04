var threeSum = function (nums) {
    let len = nums.length;
    nums.sort((a, b) => a - b);
    let res = [];
    for (let i = 0; i < len; i++) {
        let l = i + 1, r = len - 1;
        //去重
        if (nums[i] > 0) return res;
        if (nums[i] == nums[i - 1]) continue;
        while (l < r) {
            let lnum = nums[l], rnum = nums[r], inum = nums[i], sum = lnum + rnum + inum;
            console.log(inum, lnum, rnum)
            if (sum > 0) { r-- }
            else if (sum < 0) { l++ }
            else {
                res.push([inum, lnum, rnum])
                while (nums[l] == nums[l + 1]) {
                    l++
                };
                while (nums[r] == nums[r - 1]) { r-- };
                l++;
                r--;
            }
        }
    };
    return res
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))