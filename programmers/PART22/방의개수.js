// https://programmers.co.kr/learn/courses/30/lessons/49190?language=javascript

/**
 * 좌표이동 = {
 *   0: [-1][ 0]
 *   1: [-1][+1]
 *   2: [ 0][+1]
 *   3: [+1][+1]
 *   4: [+1][ 0]
 *   5: [+1][-1]
 *   6: [ 0][-1]
 *   7: [-1][-1]
 * }
 *
 * 7 [-1][-1]   0 [-1][ 0]   1 [-1][+1]
 * 6 [ 0][-1]     [ 0][ 0]   2 [ 0][+1]
 * 5 [+1][-1]   4 [+1][ 0]   3 [+1][+1]
 *
 * 오일러 다면체 정리
 * - 𝒗 - 𝒆 + 𝑓 = 2
 *
 * v(vertex): 점의 개수
 * e(edge): 선의 개수
 * f(face): 면의 개수
 *
 * @param {number[]} 이동하는 방향이 담긴 배열
 * @return {number} 사방이 막힌 방의 개수
 */
function solution(arrows) {}

let arrows;

[arrows] = [[6, 6, 6, 4, 4, 4, 2, 2, 2, 0, 0, 0, 1, 6, 5, 5, 3, 6, 0]];
console.log(solution(arrows)); // 3
