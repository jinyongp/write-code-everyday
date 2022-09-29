# https://www.acmicpc.net/problem/16675

ML, MR, TL, TR = ("RSP".find(i) for i in input().split())

"""
R S P
0 1 2

0은 2한테, 1은 0한테, 2는 1한테 진다.
상대가 양손에 n을 냈을 때, (n+2)%3 중 하나를 냈으면 반드시 승리한다.

ML == MR일 때 => TL, TR에 의해서 결정된다
TL == TR일 때 => ML, MR에 의해서 결정된다

ML != MR 그리고 TL != TR일 때는 승부를 확신할 수 없다.
"""

if ML == MR and ((ML+2) % 3) in [TL, TR]:
    print("TK")
elif TL == TR and ((TL+2) % 3) in [ML, MR]:
    print("MS")
else:
    print("?")
