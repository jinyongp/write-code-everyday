// https://www.acmicpc.net/problem/9461

const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const lines = [];

/**
 *                            N 1 2 3 4 5 6 7 8 9 ...
 * P(1)부터 P(10)까지 첫 10개 숫자는 1 1 1 2 2 3 4 5 7 9 12 16 21 28 ...
 *                         Diff 0 0 0 1 0 1 1 1 2 2  3  4  5  7 ...
 *
 * P(6)부터 P(1)에서부터를 증가량으로 가진다.
 *
 * P(1) ~ P(5) = [1, 1, 1, 2, 2];
 * P(N) = P(N - 1) + P(N - 5);
 *
 * @param {number} N N번째
 * @return {number} P(N) N번째 값
 */
function solution(N) {
  const P = [0, 1, 1, 1, 2, 2];
  for (let n = 6; n <= N; ++n) P.push(P[n - 1] + P[n - 5]);
  return P[N];
}

reader
  .on("line", (line) => {
    lines.push(line.trim());
  })
  .on("close", () => {
    const T = Number(lines.shift());
    Array.from({ length: T }).forEach(() => {
      const N = Number(lines.shift());
      console.log(solution(N));
    });
    process.exit();
  });
