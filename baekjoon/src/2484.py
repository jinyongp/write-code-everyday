# https://www.acmicpc.net/problem/2484

def solution():
    dice = sorted(list(map(int, input().split())))
    if dice[0] == dice[-1]:
        return 50000 + dice[0] * 5000
    elif dice[0] == dice[2] or dice[1] == dice[-1]:
        return 10000 + dice[1] * 1000
    elif dice[0] == dice[1] and dice[2] == dice[3]:
        return 2000 + dice[0] * 500 + dice[2] * 500
    elif dice[0] == dice[1] or dice[1] == dice[2]:
        return 1000 + dice[1] * 100
    elif dice[2] == dice[3]:
        return 1000 + dice[2] * 100
    else:
        return dice[-1] * 100


print(max(solution() for _ in range(int(input()))))
