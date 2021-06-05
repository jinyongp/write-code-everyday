// https://programmers.co.kr/learn/courses/30/lessons/42862?language=javascript

/**
 * n: 전체 학생 수
 * lost: 체육복을 도난당한 학생들의 번호
 * reserve: 여벌의 체육복을 가져온 학생들의 번호
 *
 * 목표: 체육복을 빌려 최대한 많은 학생이 체육 수업을 듣는 것
 *
 * 결정의 순간마다 최적의 상황만을 쫓아 최적의 해에 도달하는 기법
 * - 선택 절차: 현재 상태에서의 최적의 해답을 선택한다.
 * - 적절성 검사: 선택된 해가 문제의 조건을 만족하는지 검사한다.
 * - 해답 검사: 원래의 문제가 해결되었는지 검사하고, 해결되지 않았다면 1번으로 돌아가 과정을 반복한다.
 *
 * n = 5;
 * lost = [2, 4];
 * reserve = [3];
 *
 * 일단 reserve에서 lost에 있는 것을 빼야한다. => uLost, uReserve
 * uReserve의 탐색을 빠르게 하기 위해 Set으로 한다.
 * result에 최댓값을 저장하기 위해 n - uLost.length로 설정한다.
 */
function solution(n, lost, reserve) {
  const uLost = lost.filter((item) => !reserve.includes(item));
  const uReserve = new Set(reserve.filter((item) => !lost.includes(item)));
  let result = n - uLost.length;
  uLost.forEach((lostItem) => {
    if (uReserve.has(lostItem - 1)) {
      uReserve.delete(lostItem - 1);
      result += 1;
    } else if (uReserve.has(lostItem + 1)) {
      uReserve.delete(lostItem + 1);
      result += 1;
    }
  });
  return result;
}

let n, lost, reserve;

n = 5;
lost = [2, 4];
reserve = [1, 3, 5];
console.log(solution(n, lost, reserve)); // 5

n = 7;
lost = [2, 4, 5];
reserve = [1, 3, 5, 6, 7];
console.log(solution(n, lost, reserve));

n = 5;
lost = [2, 4];
reserve = [3];
console.log(solution(n, lost, reserve)); // 4
