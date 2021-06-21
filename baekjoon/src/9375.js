// https://www.acmicpc.net/problem/9375

const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * hash를 통해 옷의 종류를 카운팅한다.
 *
 * hat headgear
 * sunglasses eyewear
 * turban headgear
 *
 * eyewear: 1, headgear: 2
 *
 * (옷을 입을 경우의 수 + 입지 않을 수(1))를 곱 연산으로 구한다.
 * 아무것도 입지 않을 경우 1을 뺀다.
 * (1 + 1) * (2 + 1) - 1 = 2 * 3 - 1 = 5
 *
 * @param {string[][]} clothes [의상 이름, 의상 종류] 페어 배열
 * @return 알몸이 아닌 의상을 입을 수 있는 경우의 수
 */
function solution(clothes) {
  const hashMap = clothes.reduce((obj, [_, k]) => ({ ...obj, [k]: obj[k] + 1 || 1 }), {});
  return Object.values(hashMap).reduce((r, c) => r * (c + 1), 1) - 1;
}

const lines = [];
reader
  .on("line", (line) => {
    lines.push(line.trim());
  })
  .on("close", () => {
    const T = Number(lines.shift());
    Array.from({ length: T }).forEach(() => {
      const N = Number(lines.shift());
      const clothes = lines.splice(0, N).map((line) => line.split(" "));
      console.log(solution(clothes));
    });
    process.exit();
  });
