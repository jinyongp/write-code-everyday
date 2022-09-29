// https://www.acmicpc.net/problem/11399

const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const lines = [];

/**
 * P = [ 3, 1, 4, 3, 2 ];
 * P를 정렬하면, [1, 2, 3, 3, 4]
 * [1, 1+2, 1+2+3, 1+2+3+3, 1+2+3+3+4]
 *
 * 총 합을 계산해 반환한다.
 *
 * @param {number} N 사람의 수
 * @param {number[]} P 인출하는데 걸리는 시간
 * @return 각 사람이 돈을 인출하는데 필요한 시간의 합의 최솟값
 */
function solution(N, P) {
  P.sort((a, b) => a - b);
  for (let i = 1; i < N; ++i) P[i] += P[i - 1];
  return P.reduce((sum, num) => sum + num);
}

reader
  .on("line", (line) => {
    lines.push(line.trim());
  })
  .on("close", () => {
    const N = Number(lines.shift());
    const P = lines.shift().split(" ").map(Number);
    console.log(solution(N, P));
    process.exit();
  });
