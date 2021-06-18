// https://programmers.co.kr/learn/courses/30/lessons/12953?language=javascript

/**
 * 최대공배수 = (a * b) / gcb(a, b)
 *
 * @param {number[]} 100 이하의 자연수가 담긴 배열
 * @return {number} 배열에 담긴 모든 수의 최소공배수
 */
function solution(arr) {
  return arr.reduce((result, num) => lcm(result, num), lcm(arr[0], arr[1]));
}

function gcb(a, b) {
  const r = a % b;
  if (!r) return b;
  return gcb(b, r);
}

function lcm(a, b) {
  return (a * b) / gcb(a, b);
}

let arr;

[arr] = [[2, 6, 8, 14]];
console.log(solution(arr)); // 168

[arr] = [[1, 2, 3]];
console.log(solution(arr)); // 6

[arr] = [[1]];
console.log(solution(arr)); //1
