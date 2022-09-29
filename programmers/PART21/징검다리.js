// https://programmers.co.kr/learn/courses/30/lessons/43236?language=javascript

/**
 *
 *
 * @param {number} distance 출발지점부터 도착지점 사이의 거리
 * @param {number[]} rocks 바위들이 있는 위치를 담은 배열
 * @param {number} n 제거할 바위 수
 * @return {number} 바위를 n개 제거한 뒤 각 지점 사이의 거리의 최솟값 중에 가장 큰 값
 */
function solution(distance, rocks, n) {
  rocks.sort((a, b) => a - b);
}

let distance, rocks, n;

[distance, rocks, n] = [25, [2, 14, 11, 21, 17], 2];
console.log(solution(distance, rocks, n)); // 4
