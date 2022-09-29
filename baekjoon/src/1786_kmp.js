// https://www.acmicpc.net/problem/1786

const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * KMP(Knuth, Morris, Prett) 알고리즘 - O(N + M)
 *
 * pi[i] = 주어진 문자열의 0 ~ i 까지의 부분 문자열 중 (접수사 == 접미사)가 될 수 있는 부분 문자열 중 가장 긴 부분 문자열의 길이
 *
 *
 *
 *
 * @param {string} words 첫째 줄
 * @param {string} target 둘째 줄
 * @return {number}
 */
function solution(words, target) {}

const lines = [];
reader
  .on("line", (line) => {
    lines.push(line.trim());
  })
  .on("close", () => {
    const [T, P] = lines;
    console.log(solution(T, P));
    process.exit();
  });
