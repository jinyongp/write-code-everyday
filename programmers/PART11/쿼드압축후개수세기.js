// https://programmers.co.kr/learn/courses/30/lessons/68936?language=javascript

/**
 * 분할 정복 문제
 *
 * 재귀함수를 사용하여 반복한다. 좌표의 시작 위치와 검사해야 할 배열의 크기를 입력 받는다.
 * 탈출조건: size가 1이 될 때 해당 값을 반환한다.
 *
 * - flag를 만들어 arr[i][j] 구간에 값을 누적한다.
 * - 최종적으로 flag의 값이 N*N과 같다면, 전부 1이므로 1의 개수를 추가한다.
 * - flag의 값이 0이라면, 전부 0이므로 0의 개수를 추가한다.
 * - 나머지의 경우, 문제를 쪼개야하므로 재귀함수를 다시 호출한다. 이 때, N / 2로 나눈다.
 *
 * 0의 개수와 1의 개수를 배열 형태로 반환한다.
 */
function solution(arr) {
  let result = [0, 0];

  const recursive = (row, col, n) => {
    let flag = 0;
    for (let i = row; i < n + row; ++i) {
      for (let j = col; j < n + col; ++j) {
        flag += arr[i][j];
      }
    }
    if (flag === 0) result[0] += 1;
    else if (flag === n * n) result[1] += 1;
    else {
      const h = ~~(n / 2);
      recursive(row, col, h);
      recursive(row, col + h, h);
      recursive(row + h, col, h);
      recursive(row + h, col + h, h);
    }
  };

  recursive(0, 0, arr.length);

  return result;
}

let arr;

arr = [
  [1, 1, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 1],
  [1, 1, 1, 1],
];
console.log(solution(arr)); // [4, 9]

arr = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 1, 1, 1],
  [0, 1, 0, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 1, 1, 1, 1],
];
console.log(solution(arr)); // [10, 15]
