import random


data = random.sample(range(100), 10)


def quick_sort(data):
    """
    - 만약 리스트 갯수가 한개이면 해당 리스트 리턴
    - 그렇지 않으면, 리스트 맨 앞의 데이터를 기준점(pivot)으로 놓기
    - left, right 리스트 변수를 만들고,
    - 맨 앞의 데이터를 뺀 나머지 데이터를 기준점과 비교(pivot)
        - 기준점보다 작으면 left.append(해당 데이터)
        - 기준점보다 크면 right.append(해당 데이터)
    - return quicksort(left) + pivot + quicksort(right) 로 재귀 호출
    """
    if len(data) <= 1:
        return data

    left, right = list(), list()
    pivot = data[0]

    for n in data[1:]:
        if pivot > n:
            left.append(n)
        else:
            right.append(n)

    return quick_sort(left) + [pivot] + quick_sort(right)


print(data)
print(quick_sort(data))
