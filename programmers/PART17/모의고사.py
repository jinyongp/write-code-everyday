def solution(answers):
    p = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ]

    counts = [0, 0, 0]
    for i, answer in enumerate(answers):
        if p[0][i % len(p[0])] == answer:
            counts[0] += 1
        if p[1][i % len(p[1])] == answer:
            counts[1] += 1
        if p[2][i % len(p[2])] == answer:
            counts[2] += 1

    answer = []
    for i, count in enumerate(counts):
        if count == max(counts):
            answer.append(i + 1)

    return answer


print(solution([1, 3, 2, 4, 2, 1, 2, 3, 4, 5]))
