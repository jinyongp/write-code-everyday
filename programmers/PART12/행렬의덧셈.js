// https://programmers.co.kr/learn/courses/30/lessons/12950?language=javascript

/**
 * @param {number[][]} arr1 행렬 1
 * @param {number[][]} arr2 행렬 2
 * @return {number[][]} 행렬 1과 행렬 2를 더한 결과
 */
function solution(arr1, arr2) {
  return arr1.map((row, i) => row.map((val, j) => val + arr2[i][j]));
}

let arr1, arr2;

// [arr1, arr2] = [
//   [
//     [1, 2],
//     [2, 3],
//   ],
//   [
//     [3, 4],
//     [5, 6],
//   ],
// ];
// console.log(solution(arr1, arr2)); // [[4,6],[7,9]]
[arr1, arr2] = [
  [[1], [2]],
  [[3], [4]],
];
console.log(solution(arr1, arr2)); // [[4],[6]]
