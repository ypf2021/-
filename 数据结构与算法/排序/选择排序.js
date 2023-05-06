function selectSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) minIndex = j
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        console.log(arr)
    }
}

let arr = [4, 8, 5, 2, 9, 7, 3, 1, 6]

selectSort(arr)