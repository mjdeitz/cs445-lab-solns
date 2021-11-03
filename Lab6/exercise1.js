const isPrime = num => new Promise((resolve, reject) => {
    setTimeout(function () {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++)
            if (num % i === 0) reject({ prime: false });
        resolve({ prime: num > 1 });
    }, 500);

});

//isPrime will return a promise

async function isPrimeAsync(num) {
    try {
        let result = await isPrime(num); //result is going to be what's being resolved in part {prime: num > 1}
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

// console.log('start');
// isPrimeAsync(7)
// console.log('end');

//try with an even number
console.log('start');
isPrimeAsync(4)
console.log('end');
//this outputs UnhandledPromiseRejectionWarning
/**
 * when using await - it always catches the value of resolve
 * when the promise is reject await will not get this value
 * instead we have to use try catch block
 */