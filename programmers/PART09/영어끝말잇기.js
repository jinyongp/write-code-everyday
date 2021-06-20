// https://programmers.co.kr/learn/courses/30/lessons/12981?language=javascript

/**
 * ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]
 *
 * 끝말잇기에서 탈락하는 조건은 다음과 같다.
 * 1. 중복된 단어를 말할 때
 * 2. 끝말이 아닌 단어를 말할 때
 *
 * 1. 중복된 단어
 *   중복을 체크해서 이전과 같은 단어가 등장한다면 그 부분의 인덱스를 저장한다. 위에선 마지막 8번 인덱스가 중복된 단어를 가진다.
 * 2. 끝말이 아닌 단어
 *   끝말이 아닌 단어를 찾고 그 부분의 인덱스를 저장한다.
 *
 * 저장한 두 인덱스 번호 중 -1이 아닌 것을 골라 최솟값을 index에 담는다.
 * Math.floor(8 / 3) = 2이므로 (2 + 1) 차례에서 탈락되고, 8 % 3 = 2이므로 (2 + 1)번째 사람이 탈락된다.
 *
 * @param {number} n 끝말잇기에 참여하는 사람의 수
 * @param {string[]} words 끝말잇기에 사용한 단어가 순서대로 들어있는 배열
 * @return {number[]} [가장 먼저 탈락하는 사람의 번호, 탈락할 때 차례]
 */
function solution(n, words) {
  const wordSet = new Set();
  const dIndex = words.findIndex((word) => {
    if (wordSet.has(word)) return true;
    wordSet.add(word);
  });
  let lastAlpha = words[0][0];
  const wIndex = words.findIndex((word) => {
    if (!word.startsWith(lastAlpha)) return true;
    lastAlpha = word[word.length - 1];
  });
  const makeAnswer = (index) => [(index % n) + 1, Math.floor(index / n) + 1];
  if (dIndex > 0 && wIndex > 0) return makeAnswer(Math.min(dIndex, wIndex));
  else if (dIndex > 0) return makeAnswer(dIndex);
  else if (wIndex > 0) return makeAnswer(wIndex);
  return [0, 0];
}

let n, words;

[n, words] = [3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]];
console.log(solution(n, words)); // [3, 3]

[n, words] = [2, ["hello", "one", "even", "never", "now", "world", "draw"]];
console.log(solution(n, words)); // [1, 3]
