from sys import stdin

number = int(input())
coords = []
for _ in range(number):
    coords.append(tuple(stdin.readline().strip().split(" ")))

coords.sort()
for x, y in coords:
    print(x, y)
