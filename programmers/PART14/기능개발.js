// https://programmers.co.kr/learn/courses/30/lessons/42586?language=javascript

/**
 * progresses = [93, 30, 55]
 * speeds = [1, 30, 5]
 *
 * queue를 이용해야 한다.
 *
 * 작업을 처리하는데 걸리는 기간을 반환하는 함수를 complete라고 한다.
 * 가장 오래 걸린 배포 기간을 longest라고 한다.
 * 배포 가능한 작업물의 개수를 deploy라고 한다.
 * 배포된 기능의 개수를 answer에 저장한다.
 *
 * complete(93, 1)은 7이므로 이를 longest에 저장하고 deploy를 1 증가한다.
 * complete(30, 30)은 3인데 앞에 longest보다 작으므로 deploy를 1 증가한다.
 * complete(55, 5)는 9인데 앞에 7보다 크므로 이를 다시 longest에 저장하고 기존 deploy를 answer에 저장하고 1로 리셋한다.
 * 뒤에 작업이 없으므로 현재 deploy를 answer에 추가하고 반환한다.
 */
function solution(progresses, speeds) {
  const complete = (progress, speed) => Math.ceil((100 - progress) / speed);
  let deploy = 0;
  let longest = 0;
  const answer = [];

  const { length } = progresses;
  for (let i = 0; i < length; ++i) {
    const temp = complete(progresses[i], speeds[i]);
    if (temp > longest) {
      longest = temp;
      deploy && answer.push(deploy);
      deploy = 1;
    } else {
      deploy += 1;
    }
  }
  answer.push(deploy);
  return answer;
}

let progresses, speeds;

progresses = [93, 30, 55];
speeds = [1, 30, 5];
console.log(solution(progresses, speeds)); // [2, 1]

progresses = [95, 90, 99, 99, 80, 99];
speeds = [1, 1, 1, 1, 1, 1];
console.log(solution(progresses, speeds)); // [1, 3, 2]
