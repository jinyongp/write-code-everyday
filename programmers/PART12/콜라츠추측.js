// https://programmers.co.kr/learn/courses/30/lessons/12943?language=javascript

/**
 * 콜라츠 추측
 * 1-1. 입력된 수가 짝수라면 2로 나눕니다.
 * 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
 * 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
 *
 * @param {number} num
 * @return {number} num이 1이 되기 위해 위의 과정을 반복한 횟수
 */
function solution(num) {
  const recursive = (n, c) => {
    if (n === 1) return c;
    if (c > 500) return -1;
    if (n % 2) return recursive(n * 3 + 1, c + 1);
    return recursive(n / 2, c + 1);
  };
  return recursive(num, 0);
}

let num;

[num] = [626331];
console.log(solution(num)); // 8
