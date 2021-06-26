// https://programmers.co.kr/learn/courses/30/lessons/67256?language=javascript

/**
 * 1 2 3
 * 4 5 6
 * 7 8 9
 * * 0 #
 *
 * 1 4 7 왼손
 * 3 6 9 오른손
 *
 * 2 5 8 0 현재 손가락의 위치에서 더 가까운 손가락. 만약 같다면 왼손잡이면 왼손, 오른손잡이면 오른손
 *
 * left: 왼손 엄지손가락의 위치
 * right: 오른손 엄지손가락의 위치
 * result: 결과
 *
 *            [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]
 *        -------------------------------------
 * left   | *, 1, 1, 4, 5, 8, 8, 1, 4, 4, 4, 5
 * right  | #, #, 3, 3, 3, 3, 2, 2, 2, 5, 9, 9
 * result |    L, R, L, L, L, R, L, L, R, R, L
 *
 * 거리 비교 계산
 *
 * 1. 유클리드 거리
 *
 * (x1, y2) (x2, y2)
 * (x1, y1) (x2, y1)
 *
 * (x1, y1) 위치의 점과 (x2, y2) 점 사이의 거리는 피타고라스 정리에 의해서 아래와 같다.
 *
 * 유클리드 거리 = ((x2 - x1)^2 + (y2 - y1)^2)^(1 / 2)
 *
 * 이 방식은 대각선으로 이동 가능할 때 거리를 구할 수 있다.
 *
 * 2. 맨해튼 거리
 *
 *             (x2, y2)
 *  A |-----------|
 *    |           |
 *    |     |-----|
 *    |-----| B   | C
 *    |           |
 *    |-----------|
 * (x1, y1)
 *
 * (x1, y1)에서 (x2, y2)로 이동하는데 경로는 다양하지만, A, B, C 모두 동일한 맨해튼 거리를 가지고 있다고 할 수 있다.
 *
 * 맨해튼 거리 = |x1 - x2| + |y1 - y2|
 *
 * 유클리드 거리와 달리 대각선이 아닌 상하좌우로만 이동 가능할 때 거리를 구할 수 있다.
 *
 ************************************************************************************************
 *
 * * 부터 3번 키패드까지 좌표를 설정한다.
 *
 * 좌표 = {
 *   "*": [0, 0],
 *   "0": [1, 0],
 *   "#": [2, 0],
 *   "7": [0, 1],
 *   "8": [1, 1],
 *   "9": [2, 1],
 *   "4": [0, 2],
 *   "5": [1, 2],
 *   "6": [2, 2],
 *   "1": [0, 3],
 *   "2": [1, 3],
 *   "3": [2, 3],
 * }
 *
 * @param {number[]} numbers 순서대로 누를 키패드의 번호 배열
 * @param {string} hand 왼손잡이: left, 오른손잡이: right
 * @return {string} 각 키패트를 누른 손가락이 왼손이면 L, 오른손이면 R로 구성된 문자열
 */
function solution(numbers, hand) {
  const coords = {
    "*": [0, 0],
    0: [1, 0],
    "#": [2, 0],
    7: [0, 1],
    8: [1, 1],
    9: [2, 1],
    4: [0, 2],
    5: [1, 2],
    6: [2, 2],
    1: [0, 3],
    2: [1, 3],
    3: [2, 3],
  };

  let left = "*";
  let right = "#";
  const setLeft = (number) => {
    left = number;
    return "L";
  };
  const setRight = (number) => {
    right = number;
    return "R";
  };
  return numbers.reduce((result, number) => {
    if ([1, 4, 7].includes(number)) return result + setLeft(number);
    if ([3, 6, 9].includes(number)) return result + setRight(number);
    const diffLeft = distance(coords[number], coords[left]);
    const diffRight = distance(coords[number], coords[right]);
    if (diffLeft < diffRight) return result + setLeft(number);
    if (diffRight < diffLeft) return result + setRight(number);
    if (hand === "left") return result + setLeft(number);
    return result + setRight(number);
  }, "");
}

/**
 * 맨해튼 거리 |x1 - x2| + |y1 - y2|
 */
function distance([x1, y1], [x2, y2]) {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

let numbers, hand;

[numbers, hand] = [[1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"];
console.log(solution(numbers, hand)); // "LRLLLRLLRRL"

[numbers, hand] = [[7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"];
console.log(solution(numbers, hand)); // "LRLLRRLLLRR"
