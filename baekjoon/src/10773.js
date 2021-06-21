// https://www.acmicpc.net/problem/10773

const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * 스택 자료구조를 사용한다.
 *
 * [ 3, 0, 4, 0 ]
 *
 * 0일 경우, 스택의 top을 pop한다.
 * 다른 수일 경우, 스택에 push한다.
 *
 * @param {number[]} numbers 0일 경우 최근 수를 지우고 아닐 경우 해당 수를 쓴다.
 * @return {number} 적어낸 수의 합
 */
function solution(numbers) {
  const stack = [];
  numbers.forEach((number) => (number ? stack.push(number) : stack.pop()));
  return stack.reduce((sum, num) => sum + num, 0);
}

const lines = [];
reader
  .on("line", (line) => {
    lines.push(line.trim());
  })
  .on("close", () => {
    const K = Number(lines.shift());
    const numbers = lines.map(Number);
    console.log(solution(numbers));
    process.exit();
  });
