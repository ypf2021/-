var intersection = function (nums1, nums2) {

    //先确定哪个数组大，方便set存储后是大的
    if (nums1.length < nums2.length) {
        let _ = nums1;
        nums1 = nums2;
        nums2 = _
    }
    //确保nums1是大的数组

    let set = new Set(nums1)
    let resSet = new Set()
    for (let i = 0; i < nums2.length; i++) {
        set.has(nums2[i]) && resSet.add(nums2[i])
    }

    return Array.from(resSet)
};

console.log(intersection([1, 2, 2, 1], [2, 2]))