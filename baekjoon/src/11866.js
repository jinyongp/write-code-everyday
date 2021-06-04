// https://www.acmicpc.net/problem/11866

const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
reader
  .on("line", (line) => {
    lines.push(line.trim());
  })
  .on("close", () => {
    const [N, K] = lines.shift().split(" ").map(Number);

    /**
     * N: 사람의 수
     * K: 양의 정수 (K<=N)
     *
     * N = 7, K = 3일 때,
     *
     * 1, 2, 3, 4, 5, 6, 7 | 1->2->3
     *       ^             | 3번 제거
     *
     * 1, 2, 4, 5, 6, 7 | 4->5->6
     *             ^    | 6번 제거
     *
     * 1, 2, 4, 5, 7 | 7->1->2
     *    ^          | 2번 제거
     *
     * 1, 4, 5, 7 | 4->5->7
     *          ^ | 7번 제거
     *
     * 1, 4, 5 | 1->4->5
     *       ^ | 5번 제거
     *
     * 1, 4 | 1->4->1
     * ^    | 1번 제거
     *
     * 4 | 4->4->4
     * ^ | 4번 제거
     *
     * 전부 제거 완료
     *
     * 1번부터 N의 사람이 원을 이뤄야하므로 index를 설정하여 N번에 도달하고 다음으로 넘어갈 때 1번(0번 인덱스)으로 되돌아가도록 한다.
     * 매번 K를 세며 사람이 전부 제거될 때까지 반복한다.
     *
     * answer = [] // 정답이 저장될 공간
     * people = [1,2,3,4,5,6,7] // 사람이 나열될 공간
     * index = 0 // K번째일 때 삭제
     *
     * people = [1, 2, 3, 4, 5, 6, 7] index += K - 1 = 2
     * people[2] = 3 제거
     *
     * people = [1, 2, 4, 5, 6, 7] index += K - 1 = 4
     * people[4] = 6 제거
     *
     * people = [1, 2, 4, 5, 7] index += K - 1 = 6 =>  index = 6 % people.length = 1
     * people[1] = 2 제거
     *
     * people = [1, 4, 5, 7] index += K - 1 = 3
     * people[3] = 7 제거
     *
     * ...
     */

    const answer = [];
    let people = Array.from({ length: N }).map((_, i) => i + 1);
    let index = 0;

    while (people.length > 0) {
      index += K - 1;
      index %= people.length;
      answer.push(people[index]);
      delete people[index];
      people = people.filter((person) => person);
    }
    console.log("<" + answer.join(", ") + ">");
  });
