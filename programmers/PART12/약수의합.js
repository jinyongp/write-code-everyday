// https://programmers.co.kr/learn/courses/30/lessons/12928?language=javascript

/**
 * @param {number} n 정수
 * @return {number} n의 약수의 총합
 */
function solution(n) {
  return Array.from({ length: n }).reduce((sum, _, i) => (n % (i + 1) ? sum : sum + i + 1), 0);
}

let n;

[n] = [12];
console.log(solution(n)); // 28
