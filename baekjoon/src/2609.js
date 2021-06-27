// https://www.acmicpc.net/problem/2609

const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * 최대공약수와 최소공배수를 출력한다.
 *
 * @param {number} A 자연수
 * @param {number} B 자연수
 * @return {string} 최대공약수, 최소공배수
 */
function solution(A, B) {
  return [gcd(A, B), lcm(A, B)].join("\n");
}

/**
 * 최대공약수 (GCD, Greatest Common Divider)
 * - 두 자연수의 공통된 약수 중 가장 큰 수
 *
 * 가장 효율적인 방법은 유클리드 알고리즘을 활용한다. O(logN)
 *
 * A와 B의 GCD를 구한다면,
 * - A가 B로 나누어떨어지는지 확인한다. 만약 나누어 떨어진다면 최대 공약수는 B이다.
 * - 나누어떨어지지 않는다면 A % B로 나머지를 구한다. B와 A % B의 GCD를 구한다.
 *
 * GCD(A, B) === GCD(B, A % B) === ...
 */
function gcd(A, B) {
  const R = A % B;
  if (!R) return B;
  return gcd(B, R);
}

/**
 * 최소공배수 (LCM, Least Common Multiple)
 * - 두 자연수의 공통된 배수 중 가장 작은 수
 *
 * 최대공약수를 이용한다.
 *
 * A와 B의 LCM을 구한다면,
 * - A * B / GCD(A, B)
 *
 */
function lcm(A, B) {
  return (A * B) / gcd(A, B);
}

const lines = [];
reader
  .on("line", (line) => {
    lines.push(line.trim());
  })
  .on("close", () => {
    const [A, B] = lines.shift().split(" ").map(Number);
    console.log(solution(A, B));
    process.exit();
  });
