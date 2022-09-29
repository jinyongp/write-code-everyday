# https://www.acmicpc.net/problem/17389
N, S = int(input()), input()

# i번 문제의 기본 점수는 i점이다.
# 연속해서 맞힐 경우 보너스 점수를 획득한다. 1씩 오른다.
# 문제를 틀리면 기본 점수를 획득하지 못하고, 보너스 점수는 0으로 초기화된다.

score = bonus = 0
for i, s in enumerate(S, start=1):
    if s == "O":
        score += i + bonus
        bonus += 1
    else:
        bonus = 0

print(score)
