// https://programmers.co.kr/learn/courses/30/lessons/42885?language=javascript

/**
 * people = [70, 50, 80, 50];
 * limit = 100;
 *
 * 구명보트는 최대 2명
 *
 * people: 무인도에 갇힌 사람의 몸무게
 * limit: 구명보트의 무게 제한
 *
 * 목표: 구명보트를 최대한 적게 사용
 *
 * weight를 낮은 몸무게의 사람들과 무거운 사람들을 같이 태우기 위해 오름차순으로 정렬한다.
 *
 * 구명보트이 개수: answer = 0
 * leftIndex와 rightIndex를 선언하여 무거운 사람들과 가벼운 사람들이 같이 탑승할 수 있는지 검사한다.
 * - leftIndex과 rightIndex보다 커질 때까지 반복한다.
 * - leftIndex에는 가장 몸무게가 낮은 사람, rightIndex에는 가장 몸무게가 큰 사람이 있으므로, 둘이 합해서 limit을 넘지 않으면 leftIndex를 1 증가한다.(가벼운 사람이 동승할 수 있다는 의미)
 * - 가벼운 사람의 동승과 관계없이 무거운 사람은 구명 보트 하나를 차지하므로 rightIndex를 1 감소한다.
 * - 한 번의 반복으로 보트가 추가되므로 answer + 1
 * - 만약, 가벼운 사람(leftIndex)이 limit의 절반값보다 커지게 된다면, 더 이상 무거운 사람과 동승할 수 없으므로 반복문을 종료하여 인당 보트 1개로 계산하도록 한다.
 * - answer와 남은 사람을 합하여 반환한다.
 */
function solution(people, limit) {
  people.sort((a, b) => a - b);
  let answer = 0;
  let leftIndex = 0;
  let rightIndex = people.length - 1;

  // while (people.length) {
  //   if (people.pop() + people[0] <= limit) {
  //     people.shift();
  //   }
  //   answer += 1;
  //   if (people[0] > limit / 2) break;
  // }

  // return answer + people.length;

  // pop이나 shift와 같은 메서드 호출 방법보다 index 조작이 더 빠르다.
  while (leftIndex <= rightIndex) {
    const totalWeight = people[rightIndex] + people[leftIndex];
    if (totalWeight <= limit) leftIndex += 1;
    rightIndex -= 1;
    answer += 1;

    if (people[leftIndex] > limit / 2) break;
  }

  const remain = people.slice(leftIndex, rightIndex + 1);
  return answer + remain.length;
}

// function solution(people, limit) {
//   let answer = 0;
//   people.sort((a, b) => a - b);

//   const { length } = people;
//   for (let left = 0, right = length - 1; left <= right; right -= 1) {
//     if (people[left] + people[right] <= limit) left += 1;
//     answer += 1;
//   }
//   return answer;
// }

let people, limit;

people = [70, 50, 80, 50];
limit = 100;
console.log(solution(people, limit)); // 3

people = [70, 80, 50];
limit = 100;
console.log(solution(people, limit)); // 3

people = [200, 200, 200, 200, 200, 200, 40];
limit = 240;
console.log(solution(people, limit)); // 6

people = [200, 200, 200, 200, 200, 200, 40, 40];
limit = 240;
console.log(solution(people, limit)); // 6

people = [200, 200, 40, 40, 40, 40, 40];
limit = 240;
console.log(solution(people, limit)); // 4

people = [200, 40, 40, 40, 40, 40];
limit = 240;
console.log(solution(people, limit)); // 3

people = [150, 150, 150, 150, 10, 10, 10, 10, 10];
limit = 160;
console.log(solution(people, limit)); // 5

people = [40, 50, 60, 90];
limit = 100;
console.log(solution(people, limit)); // 3

people = [40, 40, 50, 50, 160, 160, 160];
limit = 200;
console.log(solution(people, limit)); // 4
