// https://programmers.co.kr/learn/courses/30/lessons/77887

/**
 * query = [x1, y1, x2, y2] : (x1, x1) => (x2, y2) 영역의 테두리를 시계방향으로 회전
 *
 * - matrix 생성
 * - queries 행렬 좌표에서 인덱스 좌표로 변환 (모든 좌표 -1)
 * - queries를 순회하며 이동
 * - minimum => 주어진 좌표에서 위치가 바뀔 숫자 중 최솟값을 반환
 * - right, down, left, up 선언 => matrix의 행 혹은 열을 함수 이름의 방향으로 이동시키고 마지막에 남는 값을 반환
 *
 * @param {number} rows 행 개수 - 행렬의 세로 길이 (2 이상 100 이하인 자연수)
 * @param {number} columns 열 개수 - 행렬의 가로 길이 (2 이상 100 이하인 자연수)
 * @param {number[][]} queries 회전들의 목록 (행의 개수(회전의 개수)는 1 이상 10,000 이하, 각 행은 4개의 정수 [x1, y1, x2, y2])
 * @return {number[]} 회전에 의해 위치가 바뀐 숫자들 중 가장 작은 숫자들을 순서대로 담은 배열
 */
function solution(rows, columns, queries) {
  const matrix = Array.from(Array(rows), (_, row) => {
    return Array.from({ length: columns }).map((_, col) => row * columns + col + 1);
  });

  return queries
    .map((query) => query.map((val) => val - 1))
    .map((query) => {
      const [row1, col1, row2, col2] = query;
      const min = minimum(query);

      let last = matrix[row1][col1];
      last = right(last, row1, col1 + 1, col2);
      last = down(last, col2, row1 + 1, row2);
      last = left(last, row2, col2 - 1, col1);
      last = up(last, col1, row2 - 1, row1);

      console.log(matrix);
      return min;
    });

  function minimum([row1, col1, row2, col2]) {
    let min = rows * columns;
    for (let row = row1; row <= row2; ++row) {
      for (let col = col1; col <= col2; ++col) {
        if (row === row1 || row === row2 || col === col1 || col === col2) {
          min = Math.min(min, matrix[row][col]);
        }
      }
    }
    return min;
  }

  function right(first, row, colStart, colEnd) {
    const last = matrix[row][colEnd];
    for (let col = colEnd - 1; col >= colStart; --col) {
      matrix[row][col + 1] = matrix[row][col];
    }
    matrix[row][colStart] = first;
    return last;
  }

  function left(first, row, colStart, colEnd) {
    const last = matrix[row][colEnd];
    for (let col = colEnd + 1; col <= colStart; ++col) {
      matrix[row][col - 1] = matrix[row][col];
    }
    matrix[row][colStart] = first;
    return last;
  }

  function up(first, col, rowStart, rowEnd) {
    const last = matrix[rowEnd][col];
    for (let row = rowEnd; row <= rowStart; ++row) {
      matrix[row][col] = matrix[row + 1][col];
    }
    matrix[rowStart][col] = first;
    return last;
  }

  function down(first, col, rowStart, rowEnd) {
    const last = matrix[rowEnd][col];
    for (let row = rowEnd; row > rowStart; --row) {
      matrix[row][col] = matrix[row - 1][col];
    }
    matrix[rowStart][col] = first;
    return last;
  }
}

let rows, columns, queries;

[rows, columns, queries] = [
  6,
  6,
  [
    [2, 2, 5, 4],
    [3, 3, 6, 6],
    [5, 1, 6, 3],
  ],
];
console.log(solution(rows, columns, queries)); // [8, 10, 25]

[rows, columns, queries] = [
  3,
  3,
  [
    [1, 1, 2, 2],
    [1, 2, 2, 3],
    [2, 1, 3, 2],
    [2, 2, 3, 3],
  ],
];
console.log(solution(rows, columns, queries)); // [1, 1, 5, 3]
