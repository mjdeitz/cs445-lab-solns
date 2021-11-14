//Memoized

const fibonacci = (function () {

    const memo = new Map();//if value is already in map it won't calculate again--this is the memoized part

    function f(n) {
        let value;
        if (memo.has(n)) {
            value = memo.get(n);
        } else {

            if (n <= 1) {
                value = n;
            } else {
                value = f(n - 1) + f(n - 2);
            }
            memo.set(n, value);
        }
        return value;
    }

    return f;
})();


function fibonacci2(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci2(n - 1) + fibonacci2(n - 2);
}

console.time('Memoized Version');
console.log(fibonacci(45));// 6 milliseconds average
console.timeEnd('Memoized Version');

console.time('NON Memoized');
console.log(fibonacci2(45));// 11 seconds average
console.timeEnd('NON Memoized');