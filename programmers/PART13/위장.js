// https://programmers.co.kr/learn/courses/30/lessons/42578?language=javascript

/**
 *  hash로 해결하기
 *
 * 경우의 수만 알면 되므로 갯수만 알면 된다.
 *
 *     상의를 입을 경우의 수(n) + 입지 않을 경우의 수(1)
 *   * 하의를 입을 경우의 수(m) + 입지 않을 경우의 수(1)
 *   * 겉옷을 입을 경우의 수(o) + 입지 않을 경우의 수(1)
 *   - 아무 것도 입지 않을 경우의 수(1)
 *
 *  상의: 2, 하의: 1
 *  (2 + 1) * (1 + 1) - 1 = 3 * 2 - 1 = 5
 *
 *  상의: 3
 *  4 - 1 = 3
 *
 *  상의: 1, 하의: 1, 겉옷: 1
 *  2 * 2 * 2 - 1 = 7
 *
 * @param {string[][]} 옷의 종류 [옷의 이름, 옷의 종류]
 * @return {number} 서로 다른 옷의 조합의 수
 */
function solution(clothes) {
  const count = clothes.reduce((obj, [name, kind]) => ({ ...obj, [kind]: obj[kind] + 1 || 1 }), {});
  return Object.keys(count).reduce((result, key) => result * (count[key] + 1), 1) - 1;
}

let clothes;

[clothes] = [
  [
    ["yellowhat", "headgear"],
    ["bluesunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ],
];
console.log(solution(clothes)); // 5
