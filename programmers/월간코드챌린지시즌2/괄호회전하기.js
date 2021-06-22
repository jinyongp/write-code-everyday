// https://programmers.co.kr/learn/courses/30/lessons/76502?language=javascript

/**
 * "[](){}"
 *
 * queue 자료구조를 활용하여 좌측으로 1부터 s-1까지 이동하면서
 * 올바른 괄호가 되는 경우를 카운트한다.
 *
 * @param {string} 대괄호, 중괄호, 소괄호로 이루어진 문자열
 * @return {number}
 */
function solution(s) {
  const queue = [...s];
  let answer = 0;
  for (let i = 0; i < s.length; ++i) {
    queue.push(queue.shift());
    answer += valid(queue);
  }
  return answer;
}

/**
 * 올바른 괄호 문자열 판별 함수
 *
 * stack 자료구조를 활용
 * 여는 괄호일 경우, stack에 push
 * 닫는 괄호일 경우, stack의 top을 확인하고 페어라면 stack.pop()
 * 페어가 아니라면 올바르지 않은 괄호이므로 false 반환
 * 모두 순회했을 때 stack 자료구조가 비어있다면 true, 아니라면 false 반환
 */
function valid(parens) {
  const stack = [];
  const top = () => stack[stack.length - 1];
  const pair = { "(": ")", "{": "}", "[": "]" };
  for (const p of parens) {
    if (["(", "{", "["].includes(p)) stack.push(p);
    else if (pair[top()] === p) stack.pop();
    else return false;
  }
  return !stack.length;
}

let s;

[s] = ["[](){}"];
console.log(solution(s)); // 3
[s] = ["}]()[{"];
console.log(solution(s)); // 3
[s] = ["[)(]"];
console.log(solution(s)); // 3
