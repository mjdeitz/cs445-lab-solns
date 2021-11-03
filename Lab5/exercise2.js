// Array.prototype.removeDuplicatesAsync = function () {
//     let arr = this; // represents array in line 10
//     new Promise(function (resolve, reject) {
//         let result = [... new Set(arr)]; //can make shorter by putting resolve in place of let result =
//         resolve(result);
//     }).then(console.log);
// }

// console.log(`start`);
// [4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync();
// console.log(`end`);

//new classes Set and Map
//Set can only have one of each - does NOT allow duplicate
//spread allows us to quickly copy an array into another array

//this can be done using async await

Array.prototype.removeDuplicatesAsync = async function () {
    let result = await [...new Set(this)];
    console.log(result);
}

console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync();
console.log(`end`);