// https://programmers.co.kr/learn/courses/30/lessons/42883?language=javascript

/**
 * number: 어떤 숫자
 * k: 어떤 숫자에서 제거할 수의 개수
 *
 * 목표: 어떤 숫자에서 k개의 수를 제거했을 때 가장 큰 숫자의 문자열
 *
 * number = "1924"
 * k = 2
 *
 * 탐욕법 문제이므로 매순간 가장 최선의 선택을 해야한다.
 *
 * stack = []
 *
 * 스택이 비었으므로 가장 앞 숫자를 넣는다.
 * stack = [1]
 *
 * 9가 1보다 크므로 1을 제거하고 9를 넣는다. k = 1
 * stack = [9]
 *
 * 2가 9보다 작으므로 그대로 넣는다.
 * stack = [92]
 *
 * 4가 2보다 크므로 2를 제거하고 4를 넣는다. k = 0
 * stack = [94]
 *
 * k가 0이므로 stack을 문자열로 변환해서 반환한다.
 *
 * number = "4177252841"
 * k = 4
 *
 * stack = []
 * [4] 4
 * [41] 4
 * [47] 3
 *
 * 1을 빼고나서 top이 더 작을 수 있으니 한 번 더 비교한다. 반복문을 사용한다.
 *
 * [477] 3
 * [4772] 3
 * [4775] 2
 * [47752] 2
 * [47758] 1
 * [477584] 1
 * [4775841] 1
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
