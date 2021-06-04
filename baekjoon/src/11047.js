// https://www.acmicpc.net/problem/11047

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
    const [N, K] = lines.shift().split(" ").map(Number);
    const coins = lines.map((line) => Number(line));
    coins.reverse();

    /**
     * N: 동전의 종류
     * K: 동전의 목표 합
     *
     * 목표: 동전 개수의 최솟값
     *
     * 탐욕법 문제의 대표 유형
     *
     * 결정의 순간마다 최적의 상황만을 쫓아 최적의 해에 도달하는 기법
     * - 선택 절차: 현재 상태에서의 최적의 해답을 선택한다.
     * - 적절성 검사: 선택된 해가 문제의 조건을 만족하는지 검사한다.
     * - 해답 검사: 원래의 문제가 해결되었는지 검사하고, 해결되지 않았다면 1번으로 돌아가 과정을 반복한다.
     *
     * 선택 절차: 가장 최소를 구해야하므로 가장 큰 가치의 동전를 우선 선택한다.
     * 적절성 검사: 1번 과정을 통해 선택된 동전들의 합과 목표 금액을 비교하여 값을 초과하는지 검사한다. 초과하면 가장 마지막에 선택한 동전을 삭제하고, 1번으로 돌아가 한 단계 낮은 동전을 선택한다.
     * - 해답 검사: 선택된 동전들의 합이 거슬러 줄 금액과 일치하는지 검사한다. 액수가 부족하면 1분 과정부터 다시 시작한다.
     *
     * 10 4200
     * 1
     * 5
     * 10
     * 50
     * 100
     * 500
     * 1000
     * 5000
     * 10000
     * 50000
     *
     * 가장 큰 가치를 가진 50000 코인을 선택한다.
     * 목표액인 4200과 비교해서 더 크므로 작은 단계의 동전을 다시 선택한다.
     * 1000 코인까지 내려가면 4200보다 작다. 이제 1000 코인이 몇 개 필요한지 계산한다.
     * 5000 코인까지 가면 4200보다 커지므로 4000 코인을 선택하여 목표 중 200 코인만 남는다.
     * 200 코인부터 1번 단계부터 다시 시작한다.
     *
     * 그래서 총 1000 코인 4개, 100 코인 2개로 총 6개 코인으로 4200 코인을 만들 수 있다.
     */

    let count = 0;
    let target = K;

    while (target > 0) {
      const coin = coins.find((c) => target >= c);
      const num = parseInt(target / coin);
      target -= num * coin;
      count += num;
    }

    console.log(count);
  });
