# https://www.acmicpc.net/problem/14620

N = int(input())
G = [list(map(int, input().split())) for _ in range(N)]

"""
(0,0)부터 (N-1,N-1)까지 전수조사해야 한다.
[
    [0, 1, 2]
    [3, 4, 5]
    [6, 7, 8]
]
이렇게 번호를 부여해서 각각의 꽃이 0부터 N^2-1까지 위치에 있을 경우로 검사한다.

대치된 수를 좌표로 바꾸는 법
=> x, y = divmod([0~N^2-1], N)

"""


def coord(num):
    return divmod(num, N)


# 본인을 포함, 시계 방향으로 처리 상->우->하->좌
dx, dy = [0, 0, 1, 0, -1], [0, -1, 0, 1, 0]

answer = float("inf")


def check(*flowers):
    """
    입력으로 들어온 flowers의 위치를 확인하여 꽃들이 전부 죽었다면 float("inf")를 반환한다.
    꽃들이 살아있다면 G를 확인해 꽃들이 위치한 곳의 땅 값의 합을 반환한다.
    """
    value = 0
    coord_set = set()
    for f in flowers:
        x, y = coord(f)
        if x <= 0 or y <= 0 or x >= N - 1 or y >= N - 1:
            return float("inf")  # 꽃이 최외곽에 위치할 경우 생존 불가
        for i in range(5):
            mx, my = x + dx[i], y + dy[i]
            value += G[mx][my]
            if (mx, my) in coord_set:
                return float("inf")
            coord_set.add((mx, my))

    return value


for f1 in range(N*N):
    for f2 in range(N*N):
        for f3 in range(N*N):
            if f1 != f2 and f2 != f3 and f1 != f3:
                answer = min(answer, check(f1, f2, f3))

print(answer)
