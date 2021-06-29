// https://programmers.co.kr/learn/courses/30/lessons/60057?language=javascript

/**
 * ababcdcdababcdcd
 * 1개 단위: ababcdcdababcdcd
 * 2개 단위: 2ab2cd2ab2cd
 * 3개 단위: ababcdcdababcdcd
 *
 * 최대로 압축할 수 있는 단위는 문자열의 절반 길이이다.
 *
 * 절반 길이부터 1개 단위까지 순회하면서 압축된 문자열을 생성하고 모두 저장한다.
 *
 * 압축이 전혀 되지 않으면 s의 길이를 반환한다.
 *
 * @param {string} s 압축할 문자열
 * @return {number} 1개 이상 단위로 문자열을 잘라 압축하여 표현한 문자열 중 가장 짧은 것의 길이
 */
function solution(s) {
  const answer = [];
  for (let i = Math.floor(s.length / 2); i > 0; --i) {
    answer.push(compress(split(s, i)));
  }
  return Math.min(s.length, ...answer.map(({ length }) => length));
}

/**
 * split(aabbaccc, 3)
 * [ 'aab', 'bac', 'cc' ]
 *
 * @param {string} str
 * @param {number} unit
 * @return {string[]}
 */
function split(str, unit) {
  const result = [];
  while (str.length >= unit) {
    result.push(str.slice(0, unit));
    str = str.slice(unit);
  }
  str && result.push(str);
  return result;
}

/**
 * ['a', 'a', 'b', 'b', 'a', 'c', 'c', 'c']
 * => 2a2bac2c
 *
 * @param {string[]} list
 * @return {string} 압축한 문자열
 */
function compress(list) {
  return list
    .reduce((tuples, item) => {
      const [word, count] = tuples.pop() || [];
      if (!word) {
        tuples.push([item, 1]);
      } else if (word === item) {
        tuples.push([word, count + 1]);
      } else {
        tuples.push([word, count]);
        tuples.push([item, 1]);
      }
      return tuples;
    }, [])
    .reduce((result, [word, count]) => result + (count > 1 ? count + word : word), "");
}

let s;

[s] = ["abcabcabcabcdededededede"];
console.log(solution(s)); // 14
