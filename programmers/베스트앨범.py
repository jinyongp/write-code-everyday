# https://programmers.co.kr/learn/courses/30/lessons/42579?language=python3

def solution(genres, plays):
    """
    genres ["classic", "pop", "classic", "classic", "pop"]
    plays [500, 600, 150, 800, 2500]
    [i]    0    1    2    3    4

    (0, classic, 500)
    (1, pop, 600)
    (2, classic, 150)
    (3, classic, 800)
    (4, pop, 2500)

    obj = {
        "classic": [(500, 0), (150, 2), (800, 3)],
        "pop": [(600, 1), (2500, 4)]
    }

    classic = 500 + 150 + 800 = 1450
    pop = 600 + 2500 = 3100

    장르 별로 두 개씩 출시
    4(2500) 1(600) | 3(800) 0(500)
    pop            | classic
    """
    obj = {genre: list() for genre in set(genres)}
    for i in range(len(genres)):
        obj[genres[i]].append((plays[i], i))

    answer = []
    for value in sorted(obj.values(), key=lambda x: -sum([a for a, _ in x])):
        answer.extend([i for _, i in sorted(value, key=lambda x: -x[0])[:2]])

    return answer


genres = ["classic", "pop", "classic", "classic", "pop"]
plays = [500, 600, 150, 800, 2500]
print(solution(genres, plays))
