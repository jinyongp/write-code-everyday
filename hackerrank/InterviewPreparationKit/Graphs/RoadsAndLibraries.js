// https://www.hackerrank.com/challenges/torque-and-development/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=graphs

/**
 * 문제 해결 방법
 * - 모든 도시에 도서관을 배치한다.
 * - 연결할 수 있는 도시를 순회하면서 도로 비용이 더 저렴하면 도서관 대신 도로를 설치한다.
 */
function solution(n, roadCost, libCost, cities) {
  const graph = cities.reduce((obj, [from, to]) => {
    if (from in obj) obj[from].push(to);
    else obj[from] = [to];
    if (to in obj) obj[to].push(from);
    else obj[to] = [from];
    return obj;
  }, {});

  const visited = Array(n + 1).fill(false);
  let answer = n * libCost;

  const dfs = (city) => {
    if (visited[city] || !(city in graph)) return;
    visited[city] = true;
    for (const nextCity of graph[city]) {
      if (visited[nextCity]) continue;
      if (roadCost <= libCost) {
        answer -= libCost;
        answer += roadCost;
        dfs(nextCity);
      }
    }
  };
  for (let i = 1; i <= n; ++i) dfs(i);

  return answer;
}

console.log(solution());
