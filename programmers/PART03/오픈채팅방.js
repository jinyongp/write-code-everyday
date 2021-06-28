// https://programmers.co.kr/learn/courses/30/lessons/42888?language=javascript

/**
 * 채팅방에서 닉네임을 변경하는 방법은 다음과 같이 두 가지이다.
 * - 채팅방을 나간 후, 새로운 닉네임으로 다시 들어간다.
 * - 채팅방에서 닉네임을 변경한다.
 *
 * 닉네임을 변경할 때는 기존에 채팅방에 출력되어 있던 메시지의 닉네임도 전부 변경된다.
 *
 * ChatRoom 클래스 선언
 * - members 객체로 관리
 * - history 배열로 관리
 *
 * @param {string[]} "[Enter|Change] [유저 아이디] [닉네임]" 혹은 "Leave [유저 아이디]"의 배열
 * @return {string[]} "[닉네임]님이 들어왔습니다." 혹은 "[닉네임]님이 나갔습니다."의 배열
 */
function solution(records) {
  const room = new ChatRoom();
  records.forEach((record) => {
    const [notice, id, username] = record.split(" ");
    if (notice === "Enter") room.enter(id, username);
    else if (notice === "Leave") room.leave(id);
    else if (notice === "Change") room.update(id, username);
  });
  return room.formatHistory();
}

class ChatRoom {
  constructor() {
    this.members = {};
    this.history = [];
  }

  enter(id, username) {
    this.update(id, username);
    this.history.push([id, true]);
  }

  leave(id) {
    this.history.push([id, false]);
  }

  update(id, username) {
    this.members[id] = username;
  }

  formatHistory() {
    return this.history.map(([id, flag]) =>
      flag ? `${this.members[id]}님이 들어왔습니다.` : `${this.members[id]}님이 나갔습니다.`
    );
  }
}

let record;

[record] = [
  [
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ],
];
console.log(solution(record)); // ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
