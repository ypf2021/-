


function sum(a, b) {
    console.log(a + b);
}

function curry(fn, curArgs){
    return function () {
        let args = [].slice.call(arguments)

        if (curArgs !== undefined) {
            args = args.concat(curArgs)
        }

        if (fn.length > args.length) {
            return curry(fn, args)
        }

        return fn.apply(null,args)
    }
}

const curriedTotal = curry(sum)

console.log(curriedTotal(20)(30)) // 60