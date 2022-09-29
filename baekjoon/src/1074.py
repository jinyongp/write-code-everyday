# https://www.acmicpc.net/problem/1074

"""
   1  2   3   4
1  0  1   4   5
2  2  3   6   7
3  8  9  12  13
4 10 11  14  15

"""

N, r, c = map(int, input().split(" "))
count = 0


def search(n, x=0, y=0):
    global count
    length = 2 ** N
    if x > length or y > length:
        return -1
    if n == 2:
        if x == r and y == c:
            print(count)
            return count
        count += 1
        if x == r and y + 1 == c:
            print(count)
            return count
        count += 1
        if x + 1 == r and y == c:
            print(count)
            return count
        count += 1
        if x + 1 == r and y + 1 == c:
            return count
        count += 1
    else:
        m = n // 2
        search(m, x, y)
        search(m, x, y + m)
        search(m, x + m, y)
        search(m, x + m, y + m)


search(2**N)
