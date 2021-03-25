# https://programmers.co.kr/learn/courses/30/lessons/42578

from collections import Counter
from math import prod


def solution(clothes):
    """
    hash로 해결하기

    dict = {"종류": 갯수}  # 경우의 수만 알면 되므로 갯수만 알면 된다.

       상의를 입을 경우의 수(n) + 입지 않을 경우의 수(1)
     * 하의를 입을 경우의 수(m) + 입지 않을 경우의 수(1)
     * 겉옷을 입을 경우의 수(o) + 입지 않을 경우의 수(1)
     - 아무 것도 입지 않을 경우의 수(1)

    상의: 2, 하의: 1
    (2 + 1) * (1 + 1) - 1 = 3 * 2 - 1 = 5

    상의: 3
    4 - 1 = 3

    상의: 1, 하의: 1, 겉옷: 1
    2 * 2 * 2 - 1 = 7
    """
    counter = Counter([c[1] for c in clothes])
    return prod(map(lambda x: x + 1, counter.values())) - 1


clothes = [["yellowhat", "headgear"], [
    "bluesunglasses", "eyewear"], ["green_turban", "headgear"]]
print(solution(clothes))  # 5


clothes = [["crowmask", "face"], [
    "bluesunglasses", "face"], ["smoky_makeup", "face"]]
print(solution(clothes))  # 3
