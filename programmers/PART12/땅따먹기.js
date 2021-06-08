// https://programmers.co.kr/learn/courses/30/lessons/12913?language=javascript

/**
 * land: 땅 (N * 4)
 *
 * 1행부터 N행까지 한 행에서 4칸 중 한 칸을 밟으면서 내려와야 하는데, 한 행씩 내려올 때 같은 열을 연속해서 밟을 수 없음
 *
 * 목표: 마지막 칸까지 내려왔을 때 얻을 수 있는 점수의 최댓값
 *
 * 행을 전부 순회하면서 이전의 인덱스를 제외한 부분의 최댓값을 누적하여 그 값을 반환한다.
 *
 * land = [
 *   [1, 2, 3, 5],
 *   [5, 6, 7, 8],
 *   [4, 3, 2, 1],
 * ];
 *
 * 단순히 위에서 아래로 내려가는 방식으로 진행하면 이전의 최댓값으로 인해 이후의 최댓값이 선택되지 않을 수 있다.
 *
 * dp[0] = land[0];
 * dp[row][col]: 현재 row, col에 누적된 최댓값
 *
 * dp = [
 *   [1, 2, 3, 5],
 *   [0, 0, 0, 0],
 *   [0, 0, 0, 0],
 * ]
 *
 * dp[1][0] = land[1][0] + Math.max(dp[0][1], dp[0][2], dp[0][3]);
 * dp[1][1] = land[1][1] + Math.max(dp[0][0], dp[0][2], dp[0][3]);
 * dp[1][2] = land[1][2] + Math.max(dp[0][0], dp[0][1], dp[0][3]);
 * dp[1][3] = land[1][3] + Math.max(dp[0][0], dp[0][1], dp[0][2]);
 *
 * -> dp[row][col] = land[row][col] + Math.max(dp[row - 1][col을 제외한 전부])
 *
 * answer = Max.math(dp[2])
 */
function solution(land) {
  const { length } = land;
  const dp = Array.from(Array(length - 1), () => new Array(4).fill(0));
  dp.unshift(land[0]);
  for (let row = 1; row < length; ++row) {
    dp[row][0] = land[row][0] + Math.max(dp[row - 1][1], dp[row - 1][2], dp[row - 1][3]);
    dp[row][1] = land[row][1] + Math.max(dp[row - 1][0], dp[row - 1][2], dp[row - 1][3]);
    dp[row][2] = land[row][2] + Math.max(dp[row - 1][0], dp[row - 1][1], dp[row - 1][3]);
    dp[row][3] = land[row][3] + Math.max(dp[row - 1][0], dp[row - 1][1], dp[row - 1][2]);
  }
  return Math.max(...dp[length - 1]);
}

let land;

land = [
  [1, 2, 3, 5], // 5
  [5, 6, 7, 8], // 8
  [4, 3, 2, 1],
];
console.log(solution(land)); // 16

land = [
  [4, 3, 2, 1], // 4
  [2, 2, 2, 1], // 2
  [6, 6, 6, 4], // 6
  [8, 7, 6, 5], // 8
];
console.log(solution(land)); // 20
