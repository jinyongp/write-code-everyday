// https://www.acmicpc.net/problem/10974

const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * 순열 구하기
 *
 * @param N 숫자
 * @return 1부터 N까지 이우러진 순열을 사전순으로 반환
 */
function solution(N) {
  return permutations(Array.from({ length: N }).map((_, i) => i + 1));
}

function permutations(iterable, r = iterable.length) {
  if (r === 1) return iterable.map((val) => [val]);
  return iterable.reduce((result, value, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    return result.concat(permutations(rest, r - 1).map((p) => [value, ...p]));
  }, []);
}

const lines = [];
reader
  .on("line", (line) => {
    lines.push(line.trim());
  })
  .on("close", () => {
    const N = Number(lines.shift());
    for (const numbers of solution(N)) {
      console.log(numbers.join(" "));
    }
    process.exit();
  });
