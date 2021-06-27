// https://programmers.co.kr/learn/courses/30/lessons/12947?language=javascript

/**
 * 하샤드 수
 * - x의 자릿수의 합으로 x가 나누어져야 한다.
 *
 * @param {number} x 양의 정수
 * @return {boolean} x가 하샤드 수인지
 */
function solution(x) {
  return !(x % [...x.toString()].map(Number).reduce((s, v) => s + v));
}

let x;

[x] = [10];
console.log(solution(x)); // true
