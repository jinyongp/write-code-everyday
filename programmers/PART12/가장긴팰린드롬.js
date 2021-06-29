// https://programmers.co.kr/learn/courses/30/lessons/12904

/**
 * "abcdcba"
 *
 * 모든 부분문자열을 추출하여 팰린드롬인지 검사한다.
 *
 * @param {string} s 문자열
 * @return {number} s의 부분문자열 중 가장 긴 팰린드롬의 길이
 */
function solution(s) {
  let max = 1;

  for (let left = 0; left < s.length - 1; ++left) {
    for (let right = left + 2; right <= s.length; ++right) {
      const subStr = s.substring(left, right);
      if (max >= subStr.length) continue;
      if (checkPalindrome(subStr)) max = Math.max(max, subStr.length);
    }
  }

  return max;
}

function checkPalindrome(s) {
  for (let i = 0; i < Math.floor(s.length / 2); ++i) {
    if (s[i] !== s[s.length - i - 1]) return false;
  }
  return true;
}

let s;

// [s] = ["abcdcba"];
// console.log(solution(s)); // 7

// [s] = ["abacde"];
// console.log(solution(s)); // 3

[s] = ["abcde"];
console.log(solution(s)); // 3
