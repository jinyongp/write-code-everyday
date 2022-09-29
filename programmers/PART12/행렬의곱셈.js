// https://programmers.co.kr/learn/courses/30/lessons/12949?language=javascript

/**
 * A 행렬(m * n), B 행렬(n * p) = C 행렬(m * p)
 *           1 2 p i
 *        1 [b b b]
 *        n [b b b]
 *    1 n j
 * 1 [a a]  [c c c]
 * 2 [a a]  [c c c]
 * 3 [a a]  [c c c]
 * m [a a]  [c c c] <-
 * i
 *
 * c[i][j] = a[i][1] * b[1][j]
 *         + a[i][2] * b[2][j]
 *         + a[i][3] * b[3][j]
 *         + ...
 *         + a[i][n] * b[n][j]
 *
 * c[1][1] = a[1][1] * b[1][1]
 *         + a[1][2] * b[2][1]
 *
 *
 * @param {number[][]} arr1
 * @param {number[][]} arr2
 * @return {number[][]}
 */
function solution(arr1, arr2) {
  for (let i = 0; i < arr1.length; ++i) {
    for (let j = 0; j < arr1[0].length; ++j) {}
  }
}

let arr1, arr2;

[arr1, arr2] = [
  [
    [1, 4],
    [3, 2],
    [4, 1],
    [3, 2],
  ],
  [
    [3, 3, 1],
    [3, 2, 1],
  ],
];
console.log(solution(arr1, arr2)); // [[15, 15], [15, 15], [15, 15]]
