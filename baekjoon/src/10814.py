test_case = int(input())
members = [input().split(" ") for _ in range(test_case)]
members.sort(key=lambda x: int(x[0]))
for age, name in members:
    print(age, name)
