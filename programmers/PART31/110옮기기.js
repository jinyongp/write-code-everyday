// https://programmers.co.kr/learn/courses/30/lessons/77886?language=javascript

/**
 * s에 있는 0과 1로 이루어진 문자열 x에서 110을 찾아 임의의 위치에 삽입해서
 * 사전 순으로 가장 앞에 오는 문자열 만들기
 *
 * 1) 1110
 * 110 찾기: 앞에 1이 연속으로 있으면 맨 앞의 1 인덱스 앞에 배치 => 1101
 *
 * 2) 100111100
 * 1번하고 동일한 풀이 => 100110110
 *
 * 3) 0111111010
 * 1번하고 동일한 풀이 => 0110111110
 * 한 번 더 반복, 앞에 0이 있는 110은 무시 => 0110110111
 *
 * 0111111010
 *
 * 스택 구조를 활용한다.
 *
 * 문자열의 역순으로 반복하면서
 *
 * @param {string[]} s 1과 0으로 이루어진 문자열의 배열
 * @return {string[]} 사전순으로 가장 앞에 오는 문자열의 배열
 */
function solution(s) {}

let s;

[s] = [["1110", "100111100", "0111111010"]];
console.log(solution(s)); // ["1101","100110110","0110110111"]
