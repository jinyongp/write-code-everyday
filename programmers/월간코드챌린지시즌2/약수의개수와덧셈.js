// https://programmers.co.kr/learn/courses/30/lessons/77884?language=javascript

/**
 * 계산 목표: left부터 right까지 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀다.
 *
 * >> 약수의 개수는 자연수를 소인수분해 했을 때, 소인수의 지수에 1을 더한 수들을 곱한 값이다.
 * 자연수 N을 소인수분해 했을 때 a^p * b^q * c^r이라면,
 * 약수의 경우의 수를 세어봤을 때 0부터 p까지, 0부터 q까지, 0부터 r까지이므로
 * 곱의 법칙을 이용해 경우의 수를 구하면, (p + 1) * (q + 1) * (r + 1)이 약수의 개수가 된다.
 *
 * >> 이를 활용하여 자연수가 제곱수라면 약수의 개수는 홀수, 아니라면 짝수라는 성질이 있다.
 * 제곱수인 경우 a^2p * b^2q * c^2r의 꼴로 표현되므로 홀수 * 홀수 * 홀수 = 홀수가 된다.
 * 제곱수가 아닌 경우, 위의 꼴로 나타낼 수 없으므로 제곱 횟수 중 홀수인 것이 존재하여 짝수만 된다.
 *
 * @param {number} left
 * @param {number} right
 * @return {number} 계산 결과
 */
function solution(left, right) {
  return [...Array(right - left + 1).keys()]
    .map((val) => val + left)
    .reduce((result, val) => result + val * (Math.sqrt(val) % 1 ? 1 : -1), 0);
}

let left, right;

[left, right] = [13, 17];
console.log(solution(left, right)); // 43
