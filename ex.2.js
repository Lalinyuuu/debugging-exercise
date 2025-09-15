// const nums = [1, -2, 3, -4, 5];

// function lastNegativeIndex(nums) {
//   let idx = -1;
//   for (let i = nums.length; i >= 0; i--) {
//     if (nums[i] < 0) {
//       idx = i;
//     }
//   }
//   return idx;
// }

// console.log(lastNegativeIndex(nums));
function lastNegativeIndex(nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < 0) {
      return i;
    }
  }
  return -1;
}

// ตัวอย่างการทำงานที่ถูกต้อง
console.log(lastNegativeIndex([1, -2, 3, -4, 5])); // 3
console.log(lastNegativeIndex([-1, -2, -3])); // 2
