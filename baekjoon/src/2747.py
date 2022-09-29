num = int(input())
x, y = 0, 1

for _ in range(num):
    x, y = y, x + y

print(x)
