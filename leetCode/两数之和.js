var twoSum = function (nums, target) {

    dataObject = {};
    for (let i = 0; i < nums.length; i++) {

        if (dataObject[target - nums[i]] !== undefined) {
            return [i, dataObject[target - nums[i]]]
        }

        dataObject[nums[i]] = i;    //key是值，value是索引
    }

    return []
};

console.log(twoSum([2, 7, 11, 15], 9))