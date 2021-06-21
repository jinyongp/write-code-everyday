// https://www.acmicpc.net/problem/2805

const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * 7
 * 20 15 10 17
 *
 * 수가 매우 크므로 이분 탐색으로 진행한다.
 *
 * trees를 일단 정렬하고 최소 left, 최대 right를 얻는다.
 * [10, 15, 17, 20] left = 0, right = 20
 *
 * mid = Math.floor((left + right) / 2) 이므로 10이다.
 *
 * 10의 높이로 잘랐을 때, 0, 5, 7, 10 총 22이므로 7보다 크다.
 * 크다면, left = mid + 1 = 11을 할당한다.
 *
 * min = (11 + 20) // 2 = 15이다.
 *
 * 15의 높이로 잘랐을 때, 0, 0, 2, 5, 총 7이므로 7과 같다.
 * mid를 반환한다.
 *
 *
 * @param {number} M
 * @param {number[]} trees 나무의 높이 배열
 * @return 최소 M 미터의 나무를 가져가기 위한 최대 높이
 */
function solution(H, trees) {
  trees.sort((a, b) => a - b);
  let left = 0;
  let right = trees[trees.length - 1];
  let mid = Math.floor((left + right) / 2);
  while (left <= right) {
    let sum = 0;
    for (let i = 0; i < trees.length; ++i) {
      const cut = trees[i] - mid;
      if (cut > 0) sum += cut;
    }
    if (sum === H) break;
    if (sum > H) left = mid + 1;
    else right = mid - 1;
    mid = Math.floor((left + right) / 2);
  }
  return mid;
}

const lines = [];
reader
  .on("line", (line) => {
    lines.push(line.trim());
  })
  .on("close", () => {
    const [N, M] = lines.shift().split(" ").map(Number);
    const trees = lines.shift().split(" ").map(Number);
    console.log(solution(M, trees));
    process.exit();
  });
