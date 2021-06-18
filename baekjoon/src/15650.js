// https://www.acmicpc.net/problem/15650

const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * 조합 구하기
 *
 * @param {number} N
 * @param {number} M
 * @return N 개중 M 개를 고를 경우의 수
 */
function solution(N, M) {
  const numbers = Array.from({ length: N })
    .fill(0)
    .map((_, i) => i + 1);
  return combinations(numbers, M);
}

function combinations(iterable, r = iterable.length) {
  if (r === 1) return iterable.map((value) => [value]);
  return iterable.reduce((result, value, index, origin) => {
    const rest = origin.slice(index + 1);
    return result.concat(combinations(rest, r - 1).map((c) => [value, ...c]));
  }, []);
}

const lines = [];
reader
  .on("line", (line) => {
    lines.push(line.trim());
  })
  .on("close", () => {
    const [N, M] = lines.shift().split(" ").map(Number);
    for (const numbers of solution(N, M)) {
      console.log(numbers.join(" "));
    }
    process.exit();
  });
