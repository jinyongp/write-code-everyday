// https://programmers.co.kr/learn/courses/30/lessons/17683?language=javascript

/**
 * m: 네오가 기억한 멜로디 문자열
 * musicInfo: 곡의 정보: [음악 시작 시각, 종료 시각, 음악 제목, 악보 정보]
 */
function solution(m, musicInfos) {
  const sharp = { "C#": "c", "D#": "d", "E#": "e", "F#": "f", "G#": "g", "A#": "a" };
  const melody = m.replace(/.#/g, (t) => sharp[t]);
  const musics = musicInfos.reduce((results, info, id) => {
    const [startTime, endTime, title, melody] = info.split(",");
    const [startHour, startMin] = startTime.split(":").map(Number);
    const [endHour, endMin] = endTime.split(":").map(Number);
    const playTime = endMin + endHour * 60 - (startMin + startHour * 60);
    let token = melody.replace(/.#/g, (t) => sharp[t]);
    if (token.length > playTime) token = token.substring(0, playTime);
    if (token.length < playTime) token = token.padEnd(playTime, token);
    return results.concat({ id, playTime, title, token });
  }, []);
  const selectedMusics = musics.filter(({ token }) => token.includes(melody));
  const { title } = selectedMusics.sort((a, b) => a.playTime - b.playTime)[0] || {};
  return title || "(None)";
}

let m, musicInfos;

[m, musicInfos] = ["ABCDEFG", ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"]];
console.log(solution(m, musicInfos)); // "HELLO"

[m, musicInfos] = ["CC#BCC#BCC#BCC#B", ["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"]];
console.log(solution(m, musicInfos)); // "FOO"

[m, musicInfos] = ["ABC", ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"]];
console.log(solution(m, musicInfos)); // "WORLD"

[m, musicInfos] = ["A#", ["13:00,13:02,HAPPY,B#A#"]];
console.log(solution(m, musicInfos)); // "HAPPY"

[m, musicInfos] = ["CDEFGAC", ["12:00,12:06,HELLO,CDEFGA"]];
console.log(solution(m, musicInfos)); // "(None)"

[m, musicInfos] = ["CCB", ["03:00,03:10,FOO,CCB#CCB", "04:00,04:08,BAR,ABC"]];
console.log(solution(m, musicInfos)); // "FOO"
