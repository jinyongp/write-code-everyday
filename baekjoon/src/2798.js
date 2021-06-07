// https://www.acmicpc.net/problem/2798

const readline = require("readline");
const { start } = require("repl");
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
    const [N, M] = lines.shift().split(" ").map(Number);
    const cardNumbers = lines.shift().split(" ").map(Number);

    /**
     * N: 카드의 개수
     * M: 목표 합
     *
     * 목표: M에 최대한 가까운 카드를 3장을 고른다.
     *
     * N의 경우 최대 100으로 완전탐색을 수행하면 100^3 = 100만 번으로 충분히 연산 가능한 횟수이다.
     */
    const { length } = cardNumbers;
    const storage = new Set();
    for (let i = 0; i < length; ++i) {
      for (let j = 0; j < length; ++j) {
        if (i !== j) {
          for (let k = 0; k < length; ++k) {
            if (j !== k && i !== k) {
              storage.add(cardNumbers[i] + cardNumbers[j] + cardNumbers[k]);
            }
          }
        }
      }
    }

    console.log(Math.max(...[...storage].filter((num) => num <= M)));
  });
