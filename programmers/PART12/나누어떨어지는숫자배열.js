// https://programmers.co.kr/learn/courses/30/lessons/12910?language=javascript

/**
 * @param {number[]} arr 숫자 배열
 * @param {number} divisor 나누는 수
 * @return {number[]} arr에서 divisor로 나누어 떨어지는 수의 목록
 */
function solution(arr, divisor) {
  const answer = arr.reduce((res, val) => (val % divisor ? res : res.concat(val)), []);
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}

let arr, divisor;

[arr, divisor] = [[5, 9, 7, 10], 5];
console.log(solution(arr, divisor)); // [5, 10]
