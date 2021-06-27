// https://programmers.co.kr/learn/courses/30/lessons/12933?language=javascript

/**
 * @param {number} n
 * @return {number} n의 자릿수를 내림차순으로 정렬한 수
 */
function solution(n) {
  return Number([...n.toString()].sort((a, b) => b.localeCompare(a)).join(""));
}

let n;

[n] = [118372];
console.log(solution(n)); // 873211
