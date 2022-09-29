from collections import deque

test_case = int(input())

for _ in range(test_case):
    docs, pos = list(map(int, input().split(' ')))
    queue = deque(map(int, input().split(' ')))
    queue = deque([(i, p) for i, p in enumerate(queue)])
    count = 0
    while True:
        maximum = max(queue, key=lambda x: x[1])[1]
        index, priority = queue[0]
        if priority == maximum:
            count += 1
            if index == pos:
                print(count)
                break
            else:
                queue.popleft()
        else:
            queue.append(queue.popleft())
