var minSubArrayLen = function (target, nums) {
    let left = 0;
    let right = 0;
    let length = nums.length;
    let sum = 0;

    let res = length + 1;

    while (right <= length - 1) {

        sum += nums[right++]

        while (sum >= target) {
            res = res < right - left ? res : right - left;  //这里 right - left 不加1
            sum -= nums[left++]
        }


    }

    return res > length ? 0 : res

};


console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))