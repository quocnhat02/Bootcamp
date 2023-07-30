// Challenge 4: Array of Products of All Elements

// Sample Input #
// arr = [1,2,3,4]
// Sample Output #
// arr = [24,12,8,6]

function findProduct(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let mul = 1;
    let j = i + 1;
    while (j < arr.length) {
      mul *= arr[j];
      j++;
    }

    result.push(mul);
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    let mul = 1;
    let j = i - 1;
    while (j >= 0) {
      mul *= arr[j];
      j--;
    }

    result[i] *= mul;
  }

  return result;
}

let arr = [1, 2, 3, 4];

console.log(findProduct(arr));