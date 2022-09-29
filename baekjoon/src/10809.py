# https://www.acmicpc.net/problem/10809
from string import ascii_lowercase

S = input()

# S에서 등장한 알파벳이 처음 등장하는 위치를
# a~z 순으로 나열한다.
# 등장하지 않는 알파벳은 -1을 출력한다.

# S를 입력받는다
# ascii_lowercase를 순회한다.

for c in ascii_lowercase:
    print(S.find(c), end=" ")
