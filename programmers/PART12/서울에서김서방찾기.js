// https://programmers.co.kr/learn/courses/30/lessons/12919?language=javascript

/**
 * @param {string[]} seoul Kim이 포함된 문자열 배열
 * @return {string} 김서방은 ${Kim의 인덱스 위치}에 있다.
 */
function solution(seoul) {
  return `김서방은 ${seoul.indexOf("Kim")}에 있다`;
}

let seoul;

[seoul] = [["Jane", "Kim"]];
console.log(solution(seoul)); // "김서방은 1에 있다"
