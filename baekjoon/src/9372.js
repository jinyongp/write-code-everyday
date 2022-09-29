// https://www.acmicpc.net/problem/9372

const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * - 항상 연결 그래프이다.
 * - 모든 가중치가 동일하다.
 * => 그러면 노드의 수 - 1
 *
 * ??
 *
 * @param N 국가의 수
 * @param M 비행기 수
 * @param planes [a, b] - a와 b를 왕복하는 비행기가 존재
 * @returns 모든 국가를 여행하기 위해 타야하는 비행기 종류의 최소 개수
 */
function solution(N, M, planes) {
  return N - 1;
}

const lines = [];
reader
  .on("line", (line) => {
    lines.push(line.trim());
  })
  .on("close", () => {
    const T = Number(lines.shift());

    Array.from({ length: T }).forEach(() => {
      const [N, M] = lines.shift().split(" ").map(Number);
      const planes = lines.splice(0, M).map((line) => line.split(" ").map(Number));
      // console.log(solution(N, M, planes));
      console.log(N - 1);
    });
    process.exit();
  });
