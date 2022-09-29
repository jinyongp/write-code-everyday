n = int(input())

num = 1
stack = []
answer = ""

for _ in range(1, n + 1):
    i = int(input())
    if num <= i:
        stack.extend(range(num, i + 1))
        count = i - num + 1
        answer += "+" * count
        num += count
        print(stack, num, answer)
    if stack.pop() == i:
        answer += "-"
    else:
        print("NO")
        break
else:
    print("\n".join(answer))
