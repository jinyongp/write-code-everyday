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
 * 한 명을 태우고 뒤를 전부 검사하여 함께 탈 수 있는 사람 여부를 확인한다. => 50000^2 = 25억 시간 초과
 *
 * answer = 0
 *
 * weight를 오름차순으로 sort한다.
 *
 * [50, 50, 70, 80];
 *
 * 80을 뺀다.
 * 80을 50과 합해서 limit 이내면 50을 뺀다. 아니므로 빼지 않는다.
 *
 * people을 모두 계산할 때까지 반복한다.
 */
// function solution(people, limit) {
//   let answer = 0;
//   people.sort((a, b) => a - b);

//   while (people.length) {
//     if (people.pop() + people[0] <= limit) {
//       people.shift();
//     }
//     answer += 1;
//     if (people[0] > limit / 2) break;
//   }
//   return answer + people.length;
// }

function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => a - b);

  const { length } = people;
  for (let left = 0, right = length - 1; left <= right; right -= 1) {
    if (people[left] + people[right] <= limit) left += 1;
    answer += 1;
  }
  return answer;
}

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
