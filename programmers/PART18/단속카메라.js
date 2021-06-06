// https://programmers.co.kr/learn/courses/30/lessons/42884?language=javascript

/**
 * routes: 차량의 경로
 *
 * routes = [ -> routes[i][0]은 i번째 차량이 고속도로에 진입한 지점, routes[i][1]은 i번째 차량이 고속도로를 나간 지점
 *   [-20, 15],
 *   [-14, -5],
 *   [-18, -13],
 *   [-5, -3],
 * ];
 *
 * 목표: 모든 차량이 한번은 단속용 카메라를 만나도록 하려면 최소 몇 대의 카메라가 필요한지 구한다.
 * routes의 진입 지점이 진출 지점보다 더 작다고 가정한다.
 *
 * answer: 카메라의 최소 개수
 * camera: 현재 카메라를 설치할 범위
 * - routes의 진입 지점을 오름차순으로 정렬한다. -> [ [ -20, 15 ], [ -18, -13 ], [ -14, -5 ], [ -5, -3 ] ]
 * - routes를 아래 조건에 따라 순회한다.
 *   - camera가 빈 배열이라면 route를 넣는다.
 *   - 현재 카메라를 배치하는 곳과 다음에 배치할 곳의 교차 구간을 확인하고 교차 구간이 있다면 그 구간으로 업데이트한다.
 *   - 교차 구간이 없다면, camera를 새로운 구역으로 설정하고 answer를 1 더한다.
 * - answer를 반환한다.
 */
function solution(routes) {
  routes.sort(([a, _], [b, __]) => a - b);
  let camera = [];
  let answer = 1;

  for (const route of routes) {
    if (camera.length === 0) camera = route;
    else {
      camera = intersection(camera, route);
      if (camera.length === 0) {
        camera = route;
        answer += 1;
      }
    }
  }

  return answer;
}

function intersection([a, b], [c, d]) {
  const result = [];
  if (b < c) return result;
  result[0] = a > c ? a : c;
  result[1] = b > d ? d : b;
  return result;
}

let routes;

routes = [
  [-20, 15],
  [-14, -5],
  [-18, -13],
  [-5, -3],
];
console.log(solution(routes)); // 2

routes = [
  [-3000, -2000],
  [-1000, 1000],
  [2000, 4000],
  [5000, 10000],
];
console.log(solution(routes)); // 4

routes = [
  [-3000, -500],
  [-1000, 1000],
  [500, 4000],
  [5000, 10000],
];
console.log(solution(routes)); // 3

routes = [
  [-3000, 3000],
  [-1000, 1000],
  [500, 4000],
  [5000, 10000],
];
console.log(solution(routes)); // 2
