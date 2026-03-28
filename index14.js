const arr = [3, 7, 2, 9, 5];

let max = arr[0];

for (const num of arr) {
  if (num > max) {
    max = num;
  }
}

console.log(max); 