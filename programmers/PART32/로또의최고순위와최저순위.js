// https://programmers.co.kr/learn/courses/30/lessons/77484?language=javascript

/**
 * lottos     = [44, 1, 0, 0, 31, 25],
 * winNumbers = [31, 10, 45, 1, 6, 19]
 *
 * 기본 상태에서 1과 31 일치 => 2개를 알아볼 수 없으므로 4개 일치 시 3등, 2개 일치 시 5등이 된다.
 *
 * 배열의 다른 위치에 있더라도 중복되는 수를 검사한다.
 *
 * @param {number[]} lottos 구매한 로또 번호를 담은 배열
 * @param {number[]} winNumbers 당첨 번호를 담은 배열
 * @return {number[]} [당첨 가능한 최고 순위, 최저 순위]
 */
function solution(lottos, winNumbers) {
  const rank = [6, 6, 5, 4, 3, 2, 1];
  const [zero, same] = lottos.reduce(
    ([zero, same], num) => [zero + !num, same + (winNumbers.indexOf(num) >= 0)],
    [0, 0]
  );
  return [rank[same + zero], rank[same]];
}

let lottos, winNumbers;

[lottos, winNumbers] = [
  [44, 1, 0, 0, 31, 25],
  [31, 10, 45, 1, 6, 19],
];
console.log(solution(lottos, winNumbers)); // [3, 5]

[lottos, winNumbers] = [
  [7, 8, 9, 10, 11, 12],
  [1, 2, 3, 4, 5, 6],
];
console.log(solution(lottos, winNumbers)); // [3, 5]

[lottos, winNumbers] = [
  [0, 0, 0, 0, 0, 0],
  [38, 19, 20, 40, 15, 25],
];
console.log(solution(lottos, winNumbers)); // [3, 5]
