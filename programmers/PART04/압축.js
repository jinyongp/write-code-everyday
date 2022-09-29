// https://programmers.co.kr/learn/courses/30/lessons/17684?language=javascript

/**
 * LZW 압축을 구현한다. (무손실 압축 알고리즘)
 *
 * 1. 길이가 1인 모든 단어를 포함하도록 초기화한다.
 * 2. 사전에서 현재 입력과 일치하는 가장 긴 문자열 w를 찾는다.
 * 3. w에 해당하는 사전의 색인 번호를 출력하고, 입력에서 w를 제거한다.
 * 4. 입력에서 처리되지 않은 다음 글자(c)가 남아있다면, w + c에 해당하는 단어를 사전에 등록한다.
 * 5. 단계 2로 돌아간다.
 *
 * msg = KAKAO
 *
 * 1. K는 있으나 C가 없으므로, K에 해당하는 11 출력, K 제거
 * 2. 입력에서 처리되지 않은 다음 글자 A가 있으므로, KA를 사전에 등록 (27)
 * 3. 두번째 글자 A가 사전에 있으므로 1 출력, A 제거
 * 4. AK를 사전에 등록 (28)
 * 5. 세번째 글자 KA가 사전에 있으므로 27 출력, KA 제거
 * 6. KAO를 사전에 등록 (29)
 * 7. 네번째 글자 O에 해당하는 색인번호 15 출력
 *
 * @param {string} msg 전송되는 메시지
 * @return {number[]} 메시지를 압축한 후의 사전 색인 번호 배열
 */
function solution(msg) {
  const dict = new Dict();
  const answer = [];
  while (msg.length) {
    let w = "";
    let lastIndex = 0;
    for (let i = 1; i <= msg.length; ++i) {
      const word = msg.slice(0, i);
      if (dict.has(word)) {
        w = word;
        lastIndex = i;
      }
    }
    answer.push(dict.getIndex(w));
    dict.register(msg.slice(0, lastIndex + 1));
    msg = msg.substring(lastIndex);
  }
  return answer;
}

class Dict {
  constructor() {
    this.size = 26;
    this.list = [...Array(26)].reduce(
      (obj, _, i) => ({ ...obj, [String.fromCharCode(i + 65)]: i + 1 }),
      {}
    );
  }

  has(word) {
    return word in this.list;
  }

  getIndex(word) {
    return this.list[word];
  }

  register(word) {
    this.list[word] = ++this.size;
  }
}

let msg;

[msg] = ["KAKAO"];
console.log(solution(msg)); // [11, 1, 27, 15]
[msg] = ["TOBEORNOTTOBEORTOBEORNOT"];
console.log(solution(msg)); // [20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34]
