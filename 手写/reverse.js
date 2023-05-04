// how are you  ->  woh era uoy

// uoy era woh

function change(s) {
    s = s.split("");
    let left = 0;
    let right = s.length - 1;
    while (left <= right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
    return s.join("");
}

function reverser(s) {
    let arr = s.split(" ");
    let res = arr.map((element) => {
        return change(element);
    });
    return res;
}

console.log(reverser("how are you"));
