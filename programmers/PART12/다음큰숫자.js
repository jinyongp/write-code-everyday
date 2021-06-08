// https://programmers.co.kr/learn/courses/30/lessons/12911?language=javascript

/**
 * n: 자연수
 *
 * 목표: n보다 다음 큰 숫자 찾기
 *
 * 다음 큰 숫자
 * - 조건 1. n의 다음 큰 숫자는 n보다 큰 자연수이다.
 * - 조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 개수가 같다.
 * - 조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 가장 작은 수이다.
 */
function solution(n) {
  const countOneFromBinary = (num) => (num.toString(2).match(/1/g) || []).length;
  const bin = countOneFromBinary(n);
  let answer = n + 1;
  while (countOneFromBinary(answer) !== bin) answer += 1;
  return answer;
}

let n;

n = 78;
console.log(solution(n)); //83
