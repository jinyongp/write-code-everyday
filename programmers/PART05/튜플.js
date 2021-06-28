// https://programmers.co.kr/learn/courses/30/lessons/64065?language=javascript

/**
 * 튜플은 다음과 같은 성질을 가지고 있습니다.
 * - 중복된 원소가 있을 수 있습니다. ex : (2, 3, 1, 2)
 * - 원소에 정해진 순서가 있으며, 원소의 순서가 다르면 서로 다른 튜플입니다. ex : (1, 2, 3) ≠ (1, 3, 2)
 * - 튜플의 원소 개수는 유한합니다.
 *
 * "{{2},{2,1},{2,1,3},{2,1,3,4}}"
 *
 * 2는 총 4개
 * 1은 총 3개
 * 3은 총 2개
 * 4는 총 1개
 *
 * 그러므로 s는 [2, 1, 3, 4] 튜플의 집합을 표현했다.
 *
 * @param {string} s {{a1}, {a1, a2}, {a1, a2, a3}, ... {a1, a2, a3, ..., an}} 형태의 문자열
 * @return {number[]} s가 표현하는 튜플
 */
function solution(s) {
  const numbers = s.match(/\d+/g);
  const count = numbers.reduce((obj, number) => {
    obj[number] = obj[number] + 1 || 1;
    return obj;
  }, {});
  return Object.entries(count)
    .sort(([_, a], [__, b]) => b - a)
    .map(([number]) => +number);
}

let s;

[s] = ["{{2},{2,1},{2,1,3},{2,1,3,4}}"];
console.log(solution(s)); // [2, 1, 3, 4]
