// let arr = [2,4,5,7,8,9];
// let arr2 = [3,4,5,6,7,8];


// function doubledata(x){
//   return x*x;
// }

// // we cant use this with arrow function

// Array.prototype.mapReplica = function (logic) {
//   let outputArr = [];
//   for(let i = 0; i<this.length;i++){
//     outputArr.push(logic(this[i]));
//   }
//   return outputArr;
// }
// const ans = arr2.mapReplica(doubledata);
// console.log(ans);

// let arr = ["apple", "banana", "grape", "kiwi", "mango"];

// Array.prototype.filterReplica = function () {
//  // let outputArr = [];
//   for(let i = 0; i<this.length; i++) {
//     if(this[i].length > 4) {
//       console.log(this[i]);
//     }
//   }
//   // return outputArr;
// }

// const ans = arr.filterReplica(arr);
// ans;

let arr = [1, 2, 3, 4];
let initial = 0;

// function result(acc, curr) {
//   return acc + curr;
// }

Array.prototype.replaceReplica = function (sum, initial) {
  let res = initial;
  for (let i = 0; i < this.length; i++) {
    res = sum(res, this[i]);
  }
  return res;
};

const product = arr.replaceReplica((acc, curr) => acc + curr, initial);
console.log(product);
