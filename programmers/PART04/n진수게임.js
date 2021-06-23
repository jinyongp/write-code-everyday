// https://programmers.co.kr/learn/courses/30/lessons/17687?language=javascript

/**
 * n = 2, t = 4, m = 2, p = 1
 *
 * 수를 0부터 1씩 증가시키며 문자열에 아이템 이어붙임
 *
 * 0 1 1 0 1 1 1 0 0 ... (m * t)
 * ^   ^   ^   ^
 *
 * 0 1 1 1
 *
 * @param {number} n 진법
 * @param {number} t 구할 숫자의 개수
 * @param {number} m 게임에 참가하는 인원
 * @param {number} p 튜브의 순서
 * @return {string} 튜브가 말해야 하는 숫자 t개를 공백 없이 차례로 나타낸 문자열(16진수로 표현)
 */
function solution(n, t, m, p) {
  let str = "";
  let answer = "";
  for (let i = 0; i < t * m; ++i) {
    str += i.toString(n).toUpperCase();
    if (i % m === p - 1) {
      answer += str[i];
    }
  }
  return answer;
}

let n, t, m, p;

[n, t, m, p] = [2, 4, 2, 1];
console.log(solution(n, t, m, p)); // 0111

[n, t, m, p] = [16, 16, 2, 1];
console.log(solution(n, t, m, p)); // "02468ACE11111111"

[n, t, m, p] = [16, 16, 2, 2];
console.log(solution(n, t, m, p)); // "13579BDF01234567"
