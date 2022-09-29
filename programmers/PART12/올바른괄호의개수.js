// https://programmers.co.kr/learn/courses/30/lessons/12929?language=javascript

/**
 *
 * 카탈랑 수는 수많은 조합 문제의 답으로 등장한다.
 * - 정 n다각형에 대각선을 그어 삼각형으로 분할하는 방법의 수
 * - 딕 경로(Dyck paths): (0,0)에서 (n,n)까지 격자점을 따라 오른쪽(즉 (1,0)만큼) 혹은 위로(즉 (0,1)만큼) 한 칸씩 이동하는 경로 중, 대각선 x=yx=y 좌상단으로 넘어가지 않는 경로의 개수
 * - 각각 n개의 왼쪽 괄호와 오른쪽 괄호를 나열하는 데 괄호가 서로 맞아떨어지는 문자열의 개수. 예로 n=2n=2이면 (()), ()()의 두 가지 경우가 있다
 * - 크기 2⨉n짜리 표의 각 칸에 1부터 2n까지의 숫자를 집어넣는데, 아래로 가거나 오른쪽으로 갈수록 수가 커지는 방법의 수
 *
 * n번째 카탈랑 수 점화식
 *
 * Cn+1 = sigma(i = 0; n; CiCn-i (n >= 0), C0 = 1)
 *
 * 직접적 정의
 * Cn = (2n)! / n!(n + 1)!
 *
 * @param {number} n n개의 괄호쌍
 * @return {number} n개의 괄호 쌍으로 만들 수 있는 모든 가능한 괄호 문자열의 개수
 */
function solution(n) {}

let n;

[n] = [2];
console.log(solution(n)); // 2

[n] = [5];
console.log(solution(n)); // 5

[n] = [14];
console.log(solution(n)); // 14

[n] = [42];
console.log(solution(n)); // 42

[n] = [132];
console.log(solution(n)); // 132

[n] = [429];
console.log(solution(n)); // 429

[n] = [1430];
console.log(solution(n)); // 1430

[n] = [4862];
console.log(solution(n)); // 4862

[n] = [16796];
console.log(solution(n)); // 16796

[n] = [58786];
console.log(solution(n)); // 58786

[n] = [208012];
console.log(solution(n)); // 208012

[n] = [742900];
console.log(solution(n)); // 742900

[n] = [2674440];
console.log(solution(n)); // 2674440
