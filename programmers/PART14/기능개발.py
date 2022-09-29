import math


def solution(progresses, speeds):
    '''
    [93, 30, 55] [1, 30, 5]

                    | Ceiling
    100 - 93 = 7    | 7 / 1 = 7           : 7일 후 완료
    100 - 30 = 70   | 70 / 30 = 2.33..    : 3일 후 완료 (7일 후 동시 배포)
    100 - 55 = 45   | 45 / 5 = 9          : 9일 후 완료

    7일 후: 2개 기능 배포
    9일 후: 1개 기능 배포


    [95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]

                    | Ceiling
    100 - 95 = 5    | 5 / 1 = 5            : 5일 후 완료
    100 - 90 = 10   | 10 / 1 = 10          : 10일 후 완료
    100 - 99 = 1    | 1 / 1 = 1            : 1일 후 완료 (10일 후 동시 배포)
    100 - 99 = 1    | 1 / 1 = 1            : 1일 후 완료 (10일 후 동시 배포)
    100 - 80 = 20   | 20 / 1 = 20          : 20일 후 완료
    100 - 90 = 10   | 10 / 1 = 10          : 10일 후 완료 (20일 후 동시 배포)

    5일 후: 1개 기능 배포
    10일 후: 3개 기능 배포
    20일 후: 2개 기능 배포

    answer = [1]

    available [5, 10, 1, 1, 20, 10]
    last_day = 5

    last_day < 10 : answer = [1, 1]
    last_day = 10

    last_day > 1 : answer = [1, 2]
    last_day > 1 : answer = [1, 3]

    last_day < 20 : answer = [1, 3, 1]
    last_day = 20

    last_day > 10 : answer = [1, 3, 2]
    '''
    available = []
    answer = [1]
    last_index = 0

    for p, s in zip(progresses, speeds):
        available.append(math.ceil((100 - p) / s))

    last_day = available[0]
    for a in available[1:]:
        if last_day < a:
            answer.append(1)
            last_index += 1
            last_day = a
        else:
            answer[last_index] += 1

    return answer


# print(solution([93, 30, 55], [1, 30, 5]))
print(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]))
