// https://programmers.co.kr/learn/courses/30/lessons/67257?language=javascript

/**
 * 분할 정복 문제
 *
 * 연산문자: +, -, *
 * expression = "100-200*300-500+20"
 * 정규표현식을 통해 operands와 operators를 분리한다.
 * [100, -, 200, *, 300, -, 500, +, 20]
 *
 * 수식의 결과값을 반환하는 재귀함수를 작성한다.
 * 탈출조건: 배열의 길이가 1일 때, 결과의 절댓값을 반환한다.
 *
 * 연산자가 3개인 경우, 우선순위의 경우의 수는 6가지가 나온다.
 * 우선순위는 순서를 보장해야하므로 순열을 사용한다.
 *
 * [
 *   [ '-', '*', '+' ],
 *   [ '-', '+', '*' ],
 *   [ '*', '-', '+' ],
 *   [ '*', '+', '-' ],
 *   [ '+', '-', '*' ],
 *   [ '+', '*', '-' ]
 * ]
 *
 * 수식과 각 우선순위로 재귀함수를 호출한다.
 * 탈출조건은 수식배열의 크기가 1이 됐을 때, 모든 연산이 종료됐으므로 해당 배열의 숫자의 절댓값을 최댓값과 비교한다.
 *
 */
function solution(expression) {
  const exp = expression.match(/\d+|\D/g);
  const operators = [...new Set(expression.match(/\D/g))];
  const operate = (a, operator, b) => {
    [a, b] = [Number(a), Number(b)];
    if (operator === "+") return a + b;
    else if (operator === "-") return a - b;
    else if (operator === "*") return a * b;
  };
  let answer = 0;

  const recursive = (expr, priority) => {
    if (expr.length === 1) return (answer = Math.max(answer, Math.abs(expr[0])));
    const operator = priority.pop();
    let index = expr.indexOf(operator);
    while (index !== -1) {
      const result = operate(expr[index - 1], operator, expr[index + 1]);
      expr = [...expr.slice(0, index - 1), result, ...expr.slice(index + 2)];
      index = expr.indexOf(operator);
    }
    recursive(expr, priority);
  };

  for (const priority of permutations(operators)) {
    recursive(exp, priority);
  }

  return answer;
}

function permutations(iterable, r = iterable.length) {
  if (r === 1) return iterable.map((value) => [value]);
  return iterable.reduce((result, value, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    return result.concat(permutations(rest, r - 1).map((p) => [value, ...p]));
  }, []);
}

let expression;

expression = "100-200*300-500+20";
console.log(solution(expression)); // 60420

expression = "50*6-3*2";
console.log(solution(expression)); // 300
