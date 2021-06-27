// https://programmers.co.kr/learn/courses/30/lessons/12939?language=javascript

/**
 * @param {string} s 공백으로 구분된 숫자들이 나열된 문자열
 * @return {string} "최솟값 최댓값"
 */
function solution(s) {
  const numbers = s.split(" ");
  return `${Math.min(...numbers)} ${Math.max(...numbers)}`;
}

let s;

[s] = ["1 2 3 4"];
console.log(solution(s)); // "1 4"

[s] = ["-1 -2 -3 -4"];
console.log(solution(s)); // "-4 -1"
