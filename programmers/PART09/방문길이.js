// https://programmers.co.kr/learn/courses/30/lessons/49994?language=javascript

/**
 * 'U': Up
 * 'D': Down
 * 'R': Right
 * 'L': Left
 *
 * [0, 0]에서 출발하면,
 * 출발 지점 + 도착 지점의 좌표
 * 도착 지점 + 출발 지점의 좌표를
 * 문자열의 형태(0010, 1000)로 Set에 저장 (방향은 무관하므로)
 *
 * 마지막에 (set의 사이즈 / 2)를 반환
 *
 * @param {string} dirs 'U', 'D', 'R', 'L' 문자가 포함된 문자열
 * @return {number} 캐릭터가 처음 걸어본 길의 길이
 */
function solution(dirs) {
  const delta = {
    U: [1, 0],
    D: [-1, 0],
    R: [0, 1],
    L: [0, -1],
  };
  const position = [0, 0];
  const path = new Set();
  for (const dir of dirs) {
    const [x, y] = position;
    const [dx, dy] = delta[dir];
    if (Math.abs(x + dx) > 5 || Math.abs(y + dy) > 5) continue;
    position[0] = x + dx;
    position[1] = y + dy;
    path.add("" + x + y + position[0] + position[1]);
    path.add("" + position[0] + position[1] + x + y);
  }
  return path.size / 2;
}

let dirs;

[dirs] = ["LULLLLLLU"];
console.log(solution(dirs)); // 7
