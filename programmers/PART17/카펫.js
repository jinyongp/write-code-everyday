// https://programmers.co.kr/learn/courses/30/lessons/42842?language=javascript

/**
 * brown(8<= brown <= 5000): 갈색 격자의 수
 * yellow(1 <= yellow <= 2000000): 노란색 격자의 수
 *
 * 목표: 카펫의 가로 세로 크기
 *
 * 가로, 세로 = w, h (w >= h)
 * 카펫의 둘레: (2w + 2h) = brown + 4
 * => w + h = (brown + 4) / 2 --- ⓵
 *
 * 카팻의 넓이: w * h = brown + yellow --- ⓶
 *
 * 두 식이 성립하면 해당 w, h를 반환
 */
function solution(brown, yellow) {
  const size = brown + yellow;
  for (let h = 3; h <= size; h += 1) {
    const w = size / h;
    if (w + h === (brown + 4) / 2) return [w, h];
  }
}

let brown, yellow;

brown = 10;
yellow = 2;
console.log(solution(brown, yellow)); // [4, 3]

brown = 8;
yellow = 1;
console.log(solution(brown, yellow)); // [3, 3]

brown = 24;
yellow = 24;
console.log(solution(brown, yellow)); // [8, 6]

brown = 14;
yellow = 4;
console.log(solution(brown, yellow)); // [6, 3]

brown = 50;
yellow = 22;
console.log(solution(brown, yellow)); // [24, 3]
