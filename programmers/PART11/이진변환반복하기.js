// // https://programmers.co.kr/learn/courses/30/lessons/70129?language=javascript

/**
 * 0과 1로 이루어진 어떤 문자열 x에 대한 이진 변환을 다음과 같이 정의합니다.
 * 1. x의 모든 0을 제거합니다.
 * 2. x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꿉니다.
 *
 * @param {string} s 0과 1로 이루어진 문자열
 * @return {number[]} [이진 변환의 횟수, 변환 과정에서 제거된 모든 0의 개수]
 */
function solution(s) {
  const answer = [0, 0];
  while (s !== "1") {
    const zeros = s.replace(/1/g, "");
    const ones = s.replace(/0/g, "");
    answer[1] += zeros.length;
    answer[0] += 1;
    s = ones.length.toString(2);
  }
  return answer;
}

let s;

[s] = ["110010101001"];
console.log(solution(s)); // [3, 8]
