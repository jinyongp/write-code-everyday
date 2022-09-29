from collections import Counter

answer = ""
numbers = list(input())
counter = Counter(numbers)
sorted_number = sorted(counter.items(), reverse=True)
for k, v in sorted_number:
    answer += k * v
print(answer)
