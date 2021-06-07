// https://programmers.co.kr/learn/courses/30/lessons/42860?language=javascript

/**
 * ▲ - 다음 알파벳
 * ▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
 * ◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
 * ▶ - 커서를 오른쪽으로 이동
 *
 * 탐욕법 문제이므로 당장 이동해야 할 곳을 찾고 그 최솟값을 비교하여 진행한다.
 *
 * name = "JAZ"
 *
 * 배열을 만들어서 각 자리에 상하로 이동해야하는 최소 횟수를 저장한다. (▲, ▼ 최소 횟수)
 * ex) minCount = [9, 0, 1] <- min("J" - "A", "Z" - "J" + 1)
 *
 * ▲, ▼ 방향에서의 최소 조작 횟수가 구해졌으므로 ◀, ▶ 방향의 최소 조작 횟수를 계산해야 한다.
 * - 왼쪽 방향으로 움직일 leftIndex, 오른쪽 방향으로 움직일 rightIndex를 선언한다.
 * - 각 인덱스는 해당 방향으로 움직이면서 0이 아닌 구간을 만날 때까지 이동한다.
 * - 이동한 구간이 더 짧은 인덱스를 선택하여 count에 추가한 후, 그 방향으로 현재 커서 위치를 옮긴다.
 * - 옮긴 위치에서 minCount를 통해 현재 커서 위치의 ▲, ▼ 방향에서의 최소 조작 횟수를 더하고 그 부분은 0으로 초기화한다.
 * - minCount의 총합이 0이 되면 모든 최소 조작이 계산된 것이므로 반복을 종료하고 count를 반환한다.
 */
function solution(name) {
  let count = 0; // 최소 커서 조작 횟수
  let index = 0; // 현재 커서 위치
  /**
   * 각 문자에서 ▲, ▼ 방향으로 움직여야 하는 횟수
   */
  const minCount = [...name].map((n) => {
    const fromA = n.charCodeAt() - "A".charCodeAt();
    const fromZ = "Z".charCodeAt() - n.charCodeAt() + 1;
    return Math.min(fromA, fromZ);
  });
  /**
   * 문자열의 좌측 끝에서 커서를 ◀ 방향으로 이동하면 문자열의 끝에 위치
   * 문자열의 우측 끝에서 커서를 ▶ 방향으로 이동하면 문자열의 시작에 위치
   */
  const wrap = (index) => {
    if (index < 0) return name.length + index;
    if (index >= name.length) return index - name.length;
    return index;
  };
  /**
   * 덧셈 함수
   */
  const sum = (numbers) => numbers.reduce((res, num) => res + num, 0);

  while (true) {
    let leftIndex = 0;
    let rightIndex = 0;

    while (minCount[wrap(index - leftIndex)] === 0) leftIndex += 1;
    while (minCount[wrap(index + rightIndex)] === 0) rightIndex += 1;

    if (rightIndex <= leftIndex) {
      count += rightIndex;
      index = wrap(index + rightIndex);
    } else if (leftIndex < rightIndex) {
      count += leftIndex;
      index = wrap(index - leftIndex);
    }

    count += minCount[index];
    minCount[index] = 0;

    if (sum(minCount) === 0) break;
  }

  return count;
}

let name;

name = "JAZ";
console.log(solution(name));

name = "JEROEN";
console.log(solution(name));

name = "AZAAAZ";
console.log(solution(name));
