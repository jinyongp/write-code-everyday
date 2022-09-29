def solution(info, query):
    """
    cpp, java, python 중 택 1
    backend, frontend 중 택 1
    junior, senior 중 택 1
    chicken, pizza 중 택 1
    코딩 테스트 점수

    tree 구조를 활용하여 조건의 마지막까지 확인해야하므로 dfs 알고리즘을 적용한다.

    마지막까지 조건이 충족하면 1을 증가한다.

    cpp java python 1층
    frontend backend 2층
    junior senior 3층
    chicken pizza 4층
    코딩 테스트 점수 5층
    """
    answer = []

    stack = list(map(lambda x: set(x.split(" ")), info))
    for query_list in list(map(lambda x: x.split(" "), query)):
        data = stack.pop()
        print(data)
        count = 0
        for q in query_list:
            if q == "and":
                continue
            if q == "-":  # 전부 통과
                continue
            if q not in data:
                break
        else:
            count += 1

    return []


info = [
    "java backend junior pizza 150",
    "python frontend senior chicken 210",
    "python frontend senior chicken 150",
    "cpp backend senior pizza 260",
    "java backend junior chicken 80",
    "python backend senior chicken 50"
]
query = [
    "java and backend and junior and pizza 100",
    "python and frontend and senior and chicken 200",
    "cpp and - and senior and pizza 250",
    "- and backend and senior and - 150",
    "- and - and - and chicken 100",
    "- and - and - and - 150"
]
print(solution(info, query))
