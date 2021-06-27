// https://programmers.co.kr/learn/courses/30/lessons/12930?language=javascript

/**
 * @param {string} s 문자열
 * @return {string} 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열
 */
function solution(s) {
  return s
    .split(" ")
    .map((word) =>
      [...word].reduce((r, w, i) => (i % 2 ? r + w.toLowerCase() : r + w.toUpperCase()), "")
    )
    .join(" ");
}

let s;

[s] = ["try hello world"];
console.log(solution(s)); // "TrY HeLlO WoRlD"
