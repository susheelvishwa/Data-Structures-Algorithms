// print diagonals of the this 2d array

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (i == j) {
      console.log(arr[i][j]);
    }
    if (i + j == arr.length - 1 && i != j) {
      console.log(arr[i][j]);
    }
  }
}
