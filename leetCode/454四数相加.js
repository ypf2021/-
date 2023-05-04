var fourSumCount = function (nums1, nums2, nums3, nums4) {

    let towSumMap = new Map()

    for (let item1 of nums1) {
        for (let item2 of nums2) {
            let sum = item1 + item2
            towSumMap.set(sum, (towSumMap.get(sum) || 0) + 1)
        }
    }


    for (let item3 of nums3) {
        for (let item4 of nums4) {
            let sum = item3 + item4
            count += ((towSumMap.get(0 - sum)) || 0)
        }
    }

    return count
};