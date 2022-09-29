n, m = list(map(int, input().split(' ')))
cards = list(map(int, input().split(' ')))
answer = 0
cases = set()
for a in cards:
    for b in cards:
        if a != b:
            for c in cards:
                if a != c and b != c:
                    cases.add(a + b + c)
print(max(filter(lambda x: x <= m, cases)))
