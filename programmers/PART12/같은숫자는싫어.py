def solution(numbers):
    last_number = numbers.pop(0)
    answer = [last_number]
    for number in numbers:
        if last_number != number:
            answer.append(number)
            last_number = number

    return answer


print(solution([1, 1, 3, 3, 0, 1, 1]))
