// function debounce(fn, wait) {
//     let time = null
//     clearTimeout(time)
//     time = setTimeout(function () {
//         fn
//     }, wait)
// }

// function debounce(fn, delay) {
//     let timer = null
//     return function () {
//         let args = arguments
//         let now = !timer
//         timer && clearTimeout(timer)
//         time = setTimeout(function () {
//             timer = null
//         }, delay)
//         if (now) {
//             fn.apply(this, args)
//         }
//     }
// }

function throttle(fn, wait) {
    let timer = null
    return function () {
        let context = this
        let args = arguments
        if (!timer) {
            timer = setTimeout(function () {
                timer = null
                fn.apply(context, args)
            }, wait)
        }
    }
}

