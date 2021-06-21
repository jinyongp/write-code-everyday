// https://www.acmicpc.net/problem/1655

const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * 이진탐색을 활용하여 항상 오름차순을 유지한다. 중간값을 출력한다.
 * [ 1, 5, 2, 10, -99, 7, 5 ]
 *
 * [-99, 1, 2, 5, 10] <- 7
 *
 * left = 0; right = arr.length - 1; mid = Math.floor((left + right) / 2);
 * => left = 0;, right = 4; mid = 2;
 *
 * arr[mid]가 7보다 작으므로 left = mid + 1;
 * => left = 3; right = 4; mid = 3
 *
 * arr[mid]가 7보다 작으므로 left = mid + 1;
 * => left = 4; right = 4; mid = 4
 *
 * arr[mid]가 7과 같으므로 arr.splice(mid, 0, 7)로 배열에 값 추가
 *
 * @param {number[]} numbers 수빈이가 외치는 정수
 * @return 수빈이의 동생이 말해야 하는 수
 */
function solution(numbers) {
  const arr = [];
  return numbers
    .map((number) => {
      let left = 0;
      let right = arr.length - 1;
      while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] <= number) left = mid + 1;
        else right = mid - 1;
      }
      arr.length ? arr.splice(left, 0, number) : arr.push(number);
      const mid = Math.floor(arr.length / 2);
      if (arr.length % 2) return arr[mid];
      return arr[mid - 1];
    })
    .join("\n");
}

const lines = [];
reader
  .on("line", (line) => {
    lines.push(line.trim());
  })
  .on("close", () => {
    const N = Number(lines.shift());
    const numbers = lines.map(Number);
    console.log(solution(numbers));
    process.exit();
  });
