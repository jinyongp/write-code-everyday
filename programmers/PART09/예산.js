// https://programmers.co.kr/learn/courses/30/lessons/12982?language=javascript

/**
 * @param {number[]} d 부서별로 신청한 금액이 들어있는 배열
 * @param {number} budget 예산
 * @return {number} 물품을 지원할 수 있는 최대 부서 수
 */
function solution(d, budget) {
  const answer = d.sort((a, b) => a - b).findIndex((p) => (budget -= p) < 0);
  return answer < 0 ? d.length : answer;
}

let d, budget;

[d, budget] = [[1, 3, 2, 5, 4], 9];
console.log(solution(d, budget)); //3
