// https://programmers.co.kr/learn/courses/30/lessons/12951?language=javascript

/**
 * JadenCase 문자열이란,
 * 1. 모든 단어의 첫 문자가 대문자
 * 2. 그 외의 알파벳은 소문자
 *
 * 추가 조건
 * 1. 공백이 여러 개일 수 있다.
 * 2. 공백으로 시작하는 경우는 고려하지 않는다.
 *
 * @param {string} str 문자열
 * @return {string} JadenCase 문자열
 */
function solution(str) {
  return str
    .split(" ")
    .map((s) => s && s[0].toUpperCase() + s.substring(1).toLowerCase())
    .join(" ");
}

let s;

[s] = ["3people unFollowed me"];
console.log(solution(s)); // "3people Unfollowed Me"

[s] = ["1 322l     tttt"];
console.log(solution(s)); // "3people Unfollowed Me"
