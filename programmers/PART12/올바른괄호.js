// https://programmers.co.kr/learn/courses/30/lessons/12909?language=javascript

// url

/**
 * s = (())()
 *
 * s를 stack에 차례차례 push한다. 이 때, stack의 맨 상단을 확인하여 매칭되는 괄호를 만난다면 해당 괄호를 pop한다.
 *    ch
 * 1: "(" -> ["("] <- push "("
 * 2: "(" -> ["(", "("] <- push "("
 * 3: ")" -> ["("] -> pop "("
 * 4: ")" -> [] -> pop "("
 * 5: "(" -> ["("] <- push
 * 6: ")" -> [] -> pop
 *
 * 마지막에 stack이 비어있다면 올바른 괄호라고 할 수 있다.
 *
 * s = )()()(
 *    ch
 * 1: ")" -> [")"] <- push ")"
 * 2: "(" -> [")", "("] <- push "("
 * 3: ")" -> [")"] -> pop "("
 * 4: "(" -> [")", "("] <- push "("
 * 5: ")" -> [")"] -> pop "("
 * 6: "(" -> [")", "("] <- push "("
 *
 * stack이 비어있지 않으므로 올바른 괄호가 아니다.
 */
function solution(s) {
  const stack = [];
  const parens = { ")": "(" };
  const top = () => stack[stack.length - 1];
  const match = (c) => !!top() && parens[c] === top();
  for (const ch of s) {
    if (!match(ch)) {
      stack.push(ch);
    } else {
      stack.pop();
    }
  }
  return !stack.length;
}

let s;
// s = "()()";
// console.log(solution(s));
s = "(())()";
console.log(solution(s));
// s = ")()()(";
// console.log(solution(s));
// s = "(()(";
// console.log(solution(s));
