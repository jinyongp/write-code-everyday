// https://programmers.co.kr/learn/courses/30/lessons/68645?language=javascript

/**
 *
 * 4 | 0 1 2 3
 * --|---------
 * 0 | 1
 * 1 | 2 9
 * 2 | 3 10 8
 * 3 | 4 5 6 7
 *
 * cycle: [r + 1][c] -> [r][c + 1] -> [r - 1][r - 1] -> [r + 1][c] -> ...
 * cycle = [[1, 0], [0, 1], [-1, -1]]
 * index = 0; // cycle 상태
 *
 * 1) [r + 1][c]
 * [0][0]
 * [1][0]
 * [2][0]
 * [3][0]
 * [4][0]은 0이 아님 -> index += 1
 *
 * 2) [r][c + 1]
 * [3][1]
 * [3][2]
 * [3][3]
 * [3][4]는 0이 아님 -> index += 1
 *
 * 3) [r - 1][r - 1]
 * [2][2]
 * [1][1]
 * [0][0]은 0이 아님 -> index += 1
 *
 * 4) [r + 1][c]
 * [1][2] -> index += 1
 *
 * 주변이 전부 0이 아니므로 반복 종료
 *
 * 해당 위치의 값이 0이 아닐 때까지 반복한다.
 *
 * @param {number} n 삼각형의 높이
 * @return {number} 삼각형의 첫 행부터 마지막 행까지 순서대로 합한 배열
 */
function solution(n) {
  const triangle = Array.from(Array(n), (_, i) => new Array(i + 1).fill(0));
  let num = 1;
  let row = 0;
  let col = 0;
  let index = 0;
  const cycle = [
    [1, 0],
    [0, 1],
    [-1, -1],
  ];
  const next = () => {
    const [dx, dy] = cycle[index % 3];
    if (triangle[row + dx] && triangle[row + dx][col + dy] === 0) {
      row += dx;
      col += dy;
      return true;
    }
    return false;
  };

  while (true) {
    triangle[row][col] = num++;
    if (next()) continue;
    index += 1;
    if (next()) continue;
    index += 1;
    if (next()) continue;
    break;
  }

  return triangle.flat();
}

let n;

[n] = [4];
console.log(solution(n)); // [1,2,9,3,10,8,4,5,6,7]
