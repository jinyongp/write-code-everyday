// https://programmers.co.kr/learn/courses/30/lessons/12915?language=javascript

/**
 * 문자열을 사전 순으로 비교하는 메서드: localeCompare
 *
 * @param {string[]} strings 문자열로 구성된 배열
 * @param {number} n 인덱스
 * @return {string[]} n 인덱스를 기준으로 정렬된 문자열 배열
 */
function solution(strings, n) {
  return [...strings].sort((a, b) => {
    if (a[n] == b[n]) return a.localeCompare(b);
    return a[n].localeCompare(b[n]);
  });
}

let strings, n;

[strings, n] = [["sun", "bed", "car"], 1];
console.log(solution(strings, n)); // ["car", "bed", "sun"]
