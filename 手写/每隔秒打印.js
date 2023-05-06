// for (let i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, i * 1000);
// }

function Pro(val) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(val)
        }, 1000)
    })
}

async function log(arrs) {
    for (const item of arrs) {
        var response = await Pro(item);
        console.log(response);
    }
    // for (let i = 0; i < arrs.length; i++) {
    //     var response = await Pro(arrs[i]);
    //     console.log(response);
    // }
}


log([10, 20, 30])
