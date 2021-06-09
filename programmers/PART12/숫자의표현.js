// https://programmers.co.kr/learn/courses/30/lessons/12924?language=javascript

/**
 * num: 자연수
 *
 * 목표: 연속된 자연수로 num을 표현하는 방법의 수
 *
 * answer = 0;
 * num이 크지 않으므로 완전탐색을 수행한다.
 * i부터 num까지 순회하면서 합을 구하고 합이 num과 같아지면 answer에 1을 추가한다.
 * 그 합이 num을 초과하면 반복을 멈추고 i를 1 증가한다.
 */
function solution(num) {
  let answer = 0;
  for (let i = 0, s = 0; i <= num; i += 1, s = 0) {
    for (let j = i; i <= num; ++j, s += j) {
      if (s === num) answer += 1;
      if (s >= num) break;
    }
  }
  return answer;
}

let num;

[num] = [15];
console.log(solution(num)); // 4
