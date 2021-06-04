// https://www.acmicpc.net/problem/2630

const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
reader
  .on("line", (line) => {
    lines.push(line.trim());
  })
  .on("close", () => {
    const N = Number(lines.shift());
    const paper = lines.map((line) => line.split(" ").map(Number));

    /**
     * N: 종이의 한변의 길이
     * paper: 전체 종이
     *
     * 종이에서 1은 파란색, 0은 흰색이다. N/2 * N/2 종이로 계속 잘라서 다양한 크기의 동일한 색상의 종이의 개수를 샌다.
     *
     * 1 1 0 0 0 0 1 1
     * 1 1 0 0 0 0 1 1
     * 0 0 0 0 1 1 0 0
     * 0 0 0 0 1 1 0 0
     * 1 0 0 0 1 1 1 1
     * 0 1 0 0 1 1 1 1
     * 0 0 1 1 1 1 1 1
     * 0 0 1 1 1 1 1 1
     *
     * 분할정복의 대표적인 문제이다.
     *
     * 분할정복은 보통 재귀함수를 사용한다. 원하는 조건을 만족하지 않으면 문제를 분할하여 해결하는 방식이다.
     * - 8*8 크기의 색종이를 확인하여 전체가 파란색 혹은 흰색인지 확인한다. (flag를 이용해서 파란색을 만나면 1을 더한다.)
     * - flag가 N*N와 같다면 파란색 종이이고, 0이라면 흰색 종이이므로 해당 종이의 개수를 1 증가한다.
     * - flag가 N*N도 0도 아니라면 파란색이나 흰색이 혼합된 상태이므로 더욱 분할해서 다시 재귀함수를 호출한다.
     * - 가장 작은 단위의 종이까지 분할되어 카운팅을 종료하고 흰색 종이 그리고 파란색 종이의 개수를 출력하고 종료한다.
     *
     * 재귀함수는 종이의 시작좌표 (row, col) 그리고 종이의 크기를 입력 받는다.
     */

    let blueCount = 0;
    let whiteCount = 0;

    function recursive(row, col, n) {
      let flag = 0;
      for (let r = row; r < n + row; ++r) {
        for (let c = col; c < n + col; ++c) {
          flag += paper[r][c];
        }
      }
      if (flag === 0) whiteCount += 1;
      else if (flag === n * n) blueCount += 1;
      else {
        const half = n / 2;
        recursive(row, col, half);
        recursive(row, col + half, half);
        recursive(row + half, col, half);
        recursive(row + half, col + half, half);
      }
    }

    recursive(0, 0, N);

    console.log(whiteCount);
    console.log(blueCount);
  });
