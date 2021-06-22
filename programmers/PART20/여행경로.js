// https://programmers.co.kr/learn/courses/30/lessons/43164?language=javascript

/**
 * ICN 공항에서 출발하여 방문하는 공항 경로
 * 도착지를 기준으로 오름차순 정렬한다.
 *
 * dfs를 통해 문제를 해결한다.
 *
 * 인자: start, tickets, path
 *
 * dfs이므로 가장 먼저 끝까지 도달했을 때 알파벳 순으로 가장 앞설 수 있도록 도착지 순으로 오름차순 정렬한다.
 *
 * 1. ICN을 start로 하여 dfs를 호출한다.
 * 2. start에서 출발하는 모든 구간을 탐색하여 해당 아이템은 tickets으로부터 삭제하고 dfs를 재귀호출한다.
 * 3. 모든 tickets를 사용했다면 현재까지 왔던 경로를 반환한다.
 * 4. start에서 출발하는 지점이 없다면 무시한다.
 *
 * @param {string[][]} tickets 항공권
 * @return {string[]} 주어진 항공권을 모두 이용하여 짜여진 여행 경로
 */
function solution(tickets) {
  tickets.sort((a, b) => a[1].localeCompare(b[1]));
  return dfs("ICN", tickets, []);
}

function dfs(start, tickets, path) {
  const newPath = path.concat(start);
  if (!tickets.length) return newPath;
  for (let i = 0; i < tickets.length; ++i) {
    const [from, to] = tickets[i];
    if (from === start) {
      const newTickets = [...tickets];
      newTickets.splice(i, 1);
      const result = dfs(to, newTickets, newPath);
      if (result) return result;
    }
  }
}

let tickets;

// [tickets] = [
//   [
//     ["ICN", "JFK"],
//     ["HND", "IAD"],
//     ["JFK", "HND"],
//   ],
// ];
// console.log(solution(tickets)); // ["ICN", "JFK", "HND", "IAD"]

[tickets] = [
  [
    ["ICN", "BOO"],
    ["ICN", "COO"],
    ["COO", "DOO"],
    ["DOO", "COO"],
    ["BOO", "DOO"],
    ["DOO", "BOO"],
    ["BOO", "ICN"],
    ["COO", "BOO"],
  ],
];
console.log(solution(tickets)); // ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]
