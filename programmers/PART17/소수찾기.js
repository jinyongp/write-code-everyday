// https://programmers.co.kr/learn/courses/30/lessons/42839?language=javascript

/**
 * numbers: 한 자리 숫자들
 *
 * 목표: 여러 한 자리 숫자 조각으로 만들 수 있는 소수의 개수
 *
 * - 숫자 문자열에서 각 자릿수로 하여 순열을 얻어낼 수 있어야 한다.
 * - 가장 큰 숫자를 찾아서 0부터 가장 큰 수까지 에라토스테네스의 체를 통해 소수를 전부 구한다.
 * - 걸러진 소수 중 순열에 포함된 수의 개수를 반환한다.
 *
 * 에라토스테네스의 체
 * - 0 ~ max + 1까지 전부 소수로 취급하여 true
 * - 2 부터 시작해서 소수의 배수를 모두 걸러낸다.
 *
 */
function solution(numbers) {
  const numberSet = new Set();
  for (let i = 1; i <= numbers.length; ++i) {
    permutations([...numbers], i).forEach((item) => numberSet.add(Number(item.join(""))));
  }

  let count = 0;
  const max = Math.max(...numberSet);

  // 배열 인덱스 번호와 소수가 일치하도록 max + 1의 크기로 할당한다.
  // 전부 소수로 취급하여 true로 초기화 한다.
  const primes = Array(max + 1).fill(true);
  primes[0] = primes[1] = false;
  for (let i = 2; i <= max; ++i) {
    if (!primes[i]) continue; // 소수가 아님이 판별되면 패스

    // 여기 i는 모두 소수이므로 i의 배수를 대해 모두 false로 한다.
    for (let j = i * 2; j <= max; j += i) {
      primes[j] = false;
    }
  }

  for (let i = 2; i < primes.length; i++) {
    if (primes[i] && numberSet.has(i)) count += 1;
  }

  return count;
}

function permutations(iterable, r = iterable.length) {
  if (r === 1) return iterable.map((value) => [value]);
  return iterable.reduce((result, value, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    return [...result, ...permutations(rest, r - 1).map((p) => [value, ...p])];
  }, []);
}

let numbers;

numbers = "17";
console.log(solution(numbers)); // 3

numbers = "011";
console.log(solution(numbers)); // 2
