let arr = [2, 3, 4];
arr.push([1, 2, 3]);
a = [2, 3, 4];
arr.push(a);
console.log(arr[1]);
arr[1].push(5)
console.log(arr);

// for (i = 0; i < arr.length; i++){
//   for (j = 0; j <= arr[i].length; j++){
//     console.log(arr[i][j])
//   }
// }