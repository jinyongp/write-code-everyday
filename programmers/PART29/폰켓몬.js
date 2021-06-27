// https://programmers.co.kr/learn/courses/30/lessons/1845?language=javascript

/**
 * N 마리의 폰켓몬 중, N/2 마리 선택
 *
 * @param {number[]} nums 폰켓몬의 종류 번호가 담긴 1차원 배열
 * @return {number} 최대 폰켓몬 종류 번호의 개수
 */
function solution(nums) {
  const { size } = new Set(nums);
  const choose = nums.length / 2;
  return size < choose ? size : choose;
}

let nums;

[nums] = [[3, 1, 2, 3]];
console.log(solution(nums)); // 2

[nums] = [[3, 3, 3, 2, 2, 4]];
console.log(solution(nums)); // 3

[nums] = [[3, 3, 3, 2, 2, 2]];
console.log(solution(nums)); // 3
