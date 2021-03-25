# https://programmers.co.kr/learn/courses/30/lessons/42584?language=python3

def solution(prices):
    """
    가격이 떨어지지 않은 기간은 몇 초인가

    [1, 2, 3, 2, 3]
    #1 1  2  3  4     : 4
    #2    1  2  3     : 3
    #3       1        : 1
    #4          1     : 1
    #5             0  : 0

    prices의 초기값과 뒤의 값들을 더 작은 수가 나올 때까지 비교해야 한다.
    더 작은 수가 나올 때까지 해당 수를 계속 증가한다.

    [3, 4, 2, 6, 5]
    #1 1  2           : 2
    #2    1           : 1
    #3       1  2     : 2
    #4          1     : 1
    #5             0  : 0
    """
    n = len(prices)
    answer = [0] * n

    # enumerate와 slicing을 섞으면 효율성을 통과하지 못한다.
    for i in range(n - 1):
        for j in range(i + 1, n):
            answer[i] += 1
            if prices[i] > prices[j]:
                break

    return answer


print(solution([1, 2, 3, 2, 3]))
# print(solution([3, 4, 2, 6, 5]))
