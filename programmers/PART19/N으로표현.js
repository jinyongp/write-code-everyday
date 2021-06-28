// https://programmers.co.kr/learn/courses/30/lessons/42895?language=javascript

/**
 * 동적계획법
 * - 분할 정복과 같은 접근 방식으로 주어진 문제를 더 작은 문제로 나눠 각 조각의 답을 구한 뒤, 원래 문제의 답을 구하는 방식
 * - 분할 정복과의 차이는 문제는 나누는 방식의 차이로 동적 계획법의 경우, 하나의 부분문제가 여러 문제를 해결하는데 쓰일 수 있다는 점에서 계산 결과를 재활용하여 속도의 향상을 꾀할 수 있다.
 * - 계산 결과를 저장해두는 공간을 cache라 하고, 한 번 계산한 값을 재활용하는 최적화 기법을 memoization이라 한다.
 * - memoization의 경우, 참조적 투명성. 즉, 입력이 같으면 항상 출력이 같은 함수에서만 적용할 수 있다.
 *
 * 메모이제이션의 시간 복잡도
 * - 존재하는 부분 문제의 수 * 한 부분 문제를 풀 때 필요한 반복문의 수행 횟수
 *
 * N: 표현할 수
 * number: 만들 수
 *
 * 목표: N과 괄호 그리고 사칙연산만 사용해서 표현할 때 N의 사용 횟수 최솟값을 구한다.
 *
 * 최솟값이 8보다 커지면 -1을 반환한다. => N이 최대 8번 등장할 수 있다.
 *
 * N = 5;
 * number = 12;
 *
 * dp = [{}, {5}, {55}, {555}, ... , {55555555}];
 * dp: N의 등장 횟수
 * 이 중에서 12인 N이 등장하는 최소 횟수를 구해야 한다.
 *
 * dp에 결과를 저장하여 다음 계산의 캐시값으로 사용할 수 있다.
 */
function solution(N, number) {
  const dp = [new Set()];
  for (let i = 1; i <= 8; ++i) {
    dp.push(new Set([Number(new Array(i).fill(N).join(""))]));
    for (let j = 1; j <= i; ++j) {
      for (const num1 of dp[j]) {
        for (const num2 of dp[i - j]) {
          dp[i].add(num1 + num2);
          dp[i].add(num1 - num2);
          dp[i].add(num1 * num2);
          num2 && dp[i].add(Math.floor(num1 / num2));
        }
      }
      if (dp[i].has(number)) return i;
    }
  }
  return -1;
}

let N, number;

N = 5;
number = 12;
console.log(solution(N, number)); // 4

// N = 2;
// number = 11;
// console.log(solution(N, number)); // 3
