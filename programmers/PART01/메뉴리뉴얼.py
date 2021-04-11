from itertools import combinations


def solution(orders, course):
    answer = []
    '''
    각 주문의 모든 조합을 찾는다. 이 때 메뉴는 2 개 이상이다.
    가장 많은 조합을 순서대로 나열하고 길이가 같은 것을 추가하여 반환한다.
    '''

    count = {}
    for c in course:
        for order in orders:
            order = sorted(order)
            for cases in combinations(order, c):
                cases = ''.join(cases)
                count[cases] = count.get(cases, 0) + 1
    print(count)
    last_len = None
    largest = None
    for menu, m in sorted(count.items(), key=lambda x: x[1], reverse=True):
        '''
        1. 현재 저장된 값이 없으면 가장 최신을 저장하고 마지막 메뉴의 길이와 메뉴 수를 저장
        2. 현재 메뉴의 길이가 마지막 메뉴의 길이와 동일한데 추천 수가 같으면 값 추가
        2. 현재 메뉴의 길이가 마지막 메뉴의 길이가 동일한데 추천 수가 적으면 continue
        3. 현재 메뉴의 길이가 마지막 메뉴의 길이보다 짧아지면 continue
        4. 현재 메뉴의 길이가 마지막 메뉴의 길이보다 길어지면 1번과 동일
        '''
        if m < 2:
            break
        if last_len is None or len(menu) > last_len:
            answer.append(menu)
            last_len = len(menu)
            largest = m
        elif len(menu) == last_len:
            if largest <= m:
                answer.append(menu)
            elif largest > m:
                continue
        # print(menu, m, answer, last_len, largest)

    return answer


# print(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]))
# print(solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5]))
print(solution(["XYZ", "XWY", "WXA"], [2, 3, 4]))
