# https://www.acmicpc.net/problem/1065

"""
한수: 어떤 양의 정수 X의 각 자리가 등차수열을 이루는 수

(등차수열 - 연속된 두 개의 수의 차이가 일정한 수열)

예제)
1000 -> 144

1부터 1000까지 순회하며 각 자릿수를 분리한다.
분리된 수로부터 두 자리씩 가져와서 둘의 차이를 set에 추가한다.
모든 과정을 마치고 set을 확인해서 차이가 한 가지라면 count를 1 증가한다.

n을 모두 순환해야하므로 O(N)의 시간복잡도와 내부 for문으로 인해 O(N^2)의 시간 복잡도를 가진다.
O(N^2)의 시간복잡도는 그리 좋은 효율이 아니지만 N의 최대 크기가 1000이고 애초에 brute force 알고리즘으로 해결하는 문제이므로 적절하다.

brute force 알고리즘

- 주어진 문제로부터 해가 존재할 것으로 예상되는 모든 영역을 탐색한다.
"""
n = int(input())
count = 0
for num in range(1, n + 1):
    cases = set()
    digits = list(map(int, list(str(num).rjust(2, "0"))))
    for prev, curr in zip(digits, digits[1:]):
        cases.add(curr - prev)
    if len(cases) == 1:
        count += 1

print(count)
