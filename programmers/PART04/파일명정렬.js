// https://programmers.co.kr/learn/courses/30/lessons/17686?language=javascript

/**
 * {HEAD}{NUMBER}{TAIL}
 *
 * HEAD: 숫자가 아닌 문자로 이루어져 있으며, 최소 한 글자 이상
 * NUMBER: 한 글자에서 최대 다섯 글자 사이의 연속된 문자로 이루어져 있으며, 앞에 0이 올 수 있음
 * TAIL: 나머지 부분. 빈 문자열일 수 있다.
 *
 * 1. HEAD를 기준으로 사전 순으로 정렬(대소문자 구분 X)
 * 2. HEAD가 동일할 경우, NUMBER의 숫자 순으로 오름차순 정렬(숫자 앞에 0은 무시)
 * 3. HEAD와 NUMBER가 동일할 경우, 원래 순서 유지
 *
 * @param {string[]} files {HEAD}{NUMBER}{TAIL}로 구성된 파일명이 담긴 배열
 * @return {string[]} 정렬 기준에 맞춰 정렬된 파일명이 담긴 배열
 */
function solution(files) {
  const regex = new RegExp("(^\\D+)|(\\d{1,5})|(.*)$", "g");
  return [...files].sort((a, b) => {
    let [H1, N1] = a.match(regex);
    let [H2, N2] = b.match(regex);
    [H1, H2] = [H1.toLowerCase(), H2.toLowerCase()];
    [N1, N2] = [Number(N1), Number(N2)];
    if (H1 !== H2) return H1.localeCompare(H2);
    else if (Number(N1) !== Number(N2)) return Number(N1) - Number(N2);
    return 0;
  });
}

let files;

[files] = [["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]];
console.log(solution(files)); // ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"]

[files] = [["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]];
console.log(solution(files)); // ["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"]
