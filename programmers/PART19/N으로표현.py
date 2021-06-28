def solution(N, number):
    """
    D[i] = N을 i번만큼 반복하는 모든 조합

    D[1] = {N}
    D[2] = {NN, N+N, N-N, N*N, N//N}
        => NN, D[1]에서 한 번 추가한 내용
    D[3] = {NNN, NN+N, NN-N, NN*N, NN//N, N//NN, (N+N)+N, ...}
        => NNN, D[2]에서 한 번 추가한 내용, D[1]에서 한 번 추가한 내용
    ...

    """

    if N == number:
        return 1

    D = [{int(str(N) * i)} for i in range(1, 9)]
    # [{N}, {NN}, {NNN}, {NNNN}, {NNNNN}, {NNNNNN}, {NNNNNNN}, {NNNNNNNN}]
    for i in range(1, 8):
        for j in range(i):  # i만큼 반복하여 이전 결과를 모두 가져온다.
            for num1 in D[j]:
                for num2 in D[i - j - 1]:
                    D[i].add(num1 + num2)
                    D[i].add(num1 - num2)
                    D[i].add(num1 * num2)
                    if num2 != 0:
                        D[i].add(num1 // num2)
            if number in D[i]:
                return i + 1

    return -1
