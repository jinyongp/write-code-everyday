// https://programmers.co.kr/learn/courses/30/lessons/42889?language=javascript

/**
 * 실패율
 * = 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
 *
 * [2, 1, 2, 6, 2, 4, 3, 3] 총 8명
 *
 * - 1번 스테이지: 1/8
 * - 2번 스테이지: 3/7
 * - 3번 스테이지: 2/4
 * - 4번 스테이지: 1/2
 * - 5번 스테이지: 0/1
 *
 * => [3, 4, 2, 1, 5]
 *           1  2  3  4  5  스테이지
 * arr = [0, 1, 3, 2, 1, 0] 클리어하지 못한 플레이어 수
 *
 * 도달한 플레이어 수 player = 8;
 *
 * - arr[1] / player
 * - player -= arr[1];
 *
 * @param {number} N 스테이지 개수
 * @param {number[]} stages 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열
 * @return {number[]} 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열
 */
function solution(N, stages) {
  let { length: player } = stages;
  const arr = Array(N + 1).fill(0);
  stages.forEach((stage) => stage <= N && arr[stage]++);
  const answer = arr.reduce((result, number, stage) => {
    result.push([number / player, stage]);
    player -= number;
    return result;
  }, []);
  return answer
    .slice(1)
    .sort((a, b) => b[0] - a[0])
    .map(([_, stage]) => stage);
}

let N, stages;

[N, stages] = [5, [2, 1, 2, 6, 2, 4, 3, 3]];
console.log(solution(N, stages)); // [3,4,2,1,5]
