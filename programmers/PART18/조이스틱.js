// https://programmers.co.kr/learn/courses/30/lessons/42860?language=javascript

/**
 * ▲ - 다음 알파벳
 * ▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
 * ◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
 * ▶ - 커서를 오른쪽으로 이동
 *
 * 탐욕법 문제이므로 당장 이동해야할 곳을 찾고 그 최솟값을 비교하여 진행한다.
 *
 * JAZ
 *
 * 배열을 만들어서 각 자리에 상하로 이동해야하는 최소 횟수를 저장한다.
 * [9, 0, 1] <- min("J" - "A", "Z" - "J" + 1)
 *
 * 배열의 sum값을 count의 초기값으로 한다. count는 구해야하는 최소 이동 횟수이다.
 *
 * 인덱스를 0부터 시작하여 0이 아닌 수를 count에 더하고 배열의 값을 0으로 한 뒤 index를 +1한다.
 *
 * index가 1일 때 0이므로 우측으로 이동해서 0이 아닌 수를 만나는 것이 빠를 지 아니면 좌촉으로 이동해서 0이 아닌 수를 만나는 것이 빠른지 계산한다.
 *
 * min(우측으로 이동해서 0이 아닌 수를 만나는 횟수, 좌측으로 이동해서 0이 아닌 수를 만나는 횟수)
 *
 * 최소 횟수를 count에 더하고 좌측으로 가는 횟수가 많으면 index에서는 빼고 (음수를 다시 양수로), 우측으로 가는 횟수가 많으면 index에서는 더한다.
 *
 * 현재 인덱스가 1이니까 우측으로 이동하는 횟수는 1이고, 좌측으로 이동하는 횟수는 2이므로 1을 선택하여 count에 1을 더하고 index에도 1을 더한다.
 *
 * 이동한 위치부터 반복을 다시 시작한다.
 */
function solution(name) {
  let count = 0;
  let index = 0;
  const minCount = [...name].map((n) => {
    const fromA = n.charCodeAt() - "A".charCodeAt();
    const fromZ = "Z".charCodeAt() - n.charCodeAt() + 1;
    return Math.min(fromA, fromZ);
  });
  const wrap = (index) => {
    if (index < 0) {
      // index가 -1이고 name.length가 5일 때, 4를 반환
      return name.length + index;
    } else if (index >= name.length) {
      // index가 5이고 length가 5일 때, 0을 반환
      return index - name.length;
    }
    return index;
  };
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
