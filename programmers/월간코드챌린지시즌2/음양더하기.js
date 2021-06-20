// https://programmers.co.kr/learn/courses/30/lessons/76501?language=javascript

/**
 * @param {number[]} absolutes 정수의 절댓값을 차례로 담은 배열
 * @param {boolean[]} signs absolutes의 부호를 차례로 담은 배열
 * @return {number} 실제 정수들의 합
 */
function solution(absolutes, signs) {
  return absolutes.reduce((sum, value, index) => (signs[index] ? sum + value : sum - value), 0);
}

let absolutes, signs;

[absolutes, signs] = [
  [4, 7, 12],
  [true, false, true],
];
console.log(solution(absolutes, signs)); // 9
