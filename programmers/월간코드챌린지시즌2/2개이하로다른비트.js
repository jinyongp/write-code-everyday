// https://programmers.co.kr/learn/courses/30/lessons/77885?language=javascript

/**
 * f(x) = x보다 크고 x와 비트가 1~2개 다른 수들 중 제일 작은 수 (x > 0)
 *
 * 1) 주어진 수가 짝수일 경우, LSB에서 0이 1로 바뀌면 가장 최소가 되므로 항상 x + 1이다.
 * 2) 주어진 수가 홀수인 경우, LSB에 가장 가까운 0을 1로 바꾸고 그 다음 비트를 0으로 바꾼다.
 *
 * 27이면 11011, 11111로 바꾸고 11101로 하면 29가 나온다.
 *
 * @param {number[]} numbers 정수가 담긴 배열
 * @return {number[]} numbers의 수에 대한 f값
 */
function solution(numbers) {
  return numbers.map((number) => {
    if (number % 2) {
      const binary = number.toString(2);
      let index = binary.lastIndexOf("01");
      if (index < 0) return parseInt("10" + binary.substr(1), 2);
      return parseInt(binary.substring(0, index) + "10" + binary.substring(index + 2), 2);
    }
    return number + 1;
  });
}

let numbers;

[numbers] = [[2, 7, 1001]];
console.log(solution(numbers)); // [1002]
