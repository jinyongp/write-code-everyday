// https://programmers.co.kr/learn/courses/30/lessons/12944?language=javascript

/**
 * @param {number[]} arr
 * @return {number} 배열의 평균
 */
function solution(arr) {
  return arr.reduce((s, v) => s + v) / arr.length;
}

let arr;

[arr] = [[1, 2, 3, 4]];
console.log(solution(arr)); // 2.5
