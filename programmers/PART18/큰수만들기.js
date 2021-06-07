// https://programmers.co.kr/learn/courses/30/lessons/42883?language=javascript

/**
 * number: 어떤 숫자
 * k: 어떤 숫자에서 제거할 수의 개수
 *
 * 목표: 어떤 숫자에서 k개의 수를 제거했을 때 가장 큰 숫자의 문자열
 *
 * 탐욕법 문제이므로 매순간 가장 최선의 선택을 해야한다.
 *
 * number를 순회하면서 아래와 같은 조건을 수행한다.
 * - 스택이 비었으면 현재 숫자를 넣는다.
 * - k가 1 이상이라면, 스택의 top과 현재 숫자를 비교한다.
 *   - 스택의 top 숫자가 더 크면, 현재 숫자를 stack에 넣는다.
 *   - 현재 숫자가 더 크면, 스택의 top이 더 큰 수가 될 때까지 스택에서 pop을 하고 뺀 만큼 k를 -1한다.
 * - 현재 숫자를 stack에 넣고 위 과정을 반복한다.
 * - 스택에 담긴 값을 문자열로 변환하여 반환한다. 만약 k가 남는다면 가장 뒤에 있는 부분을 k만큼 잘라 반환한다.(이미 정렬된 54321 같은 경우, k가 1 이상이라도 반복문에서 제거될 요소가 없으므로 가장 뒤에 있는 값을 빼야한다.)
 *
 * number = "1924", k = 2
 * 스택 자료구조를 이용한다. stack = []
 * 스택이 비었으므로 가장 앞 숫자를 넣는다. stack = [1]
 * 9가 1보다 크므로 1을 제거하고 9를 넣는다. stack = [9], k = 1
 * 2가 9보다 작으므로 그대로 넣는다. stack = [9, 2]
 * 4가 2보다 크므로 2를 제거하고 4를 넣는다. k = 0
 * 반복종료: stack = [9, 4]
 *
 * k가 0이므로 stack을 문자열로 변환해서 반환한다.
 */
function solution(number, k) {
  const stack = [];

  for (const num of number) {
    if (stack.length === 0) stack.push(num);
    else {
      while (k > 0 && stack[stack.length - 1] < num) {
        stack.pop();
        k -= 1;
      }
      stack.push(num);
    }
  }

  const answer = stack.join("");
  if (k > 0) return answer.substr(0, answer.length - k);
  return answer;
}

let number, k;

number = "1924";
k = 2;
console.log(solution(number, k)); // "94"

number = "1231234";
k = 3;
console.log(solution(number, k)); // "3234"

number = "4177252841";
k = 4;
console.log(solution(number, k)); // "775841"

number = "11";
k = 1;
console.log(solution(number, k)); // "1"

number = "54312";
k = 3;
console.log(solution(number, k)); // "54"
