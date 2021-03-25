# https://programmers.co.kr/learn/courses/30/lessons/42577

def solution(phone_book):
    """
    정렬로 해결하는 방법 1

    모든 경우를 순회하며 python의 startswith를 사용한다.

    어떤 번호가 다른 번호의 접두어일 경우,
    접두어의 길이가 더 짧으므로 길이순으로 나열한다.

    최악의 경우 O(n^2)이므로 효율성 테스트에서 통과하지 못한다.
    """
    # phone_book.sort(key=len)
    # for n in phone_book:
    #     for m in phone_book:
    #         if n != m and n == m[:len(n)]:
    #             return False
    # return True

    """
    정렬로 해결하는 방법 2

    문자열의 길이 순이 아닌 숫자 크기로 정렬을 하게 되면

    앞의 번호가 뒤의 접두어가 된다.
    """
    # phone_book.sort()
    # for n, m in zip(phone_book, phone_book[1:]):
    #     if n == m[:len(n)]:
    #         return False
    # return True

    """
    hash로 해결하는 방법

    phone_book을 set으로 관리하면 조회에서 O(1)을 갖는다.

    전화번호의 숫자 하나씩 늘려가며 hash_map에 저장된 번호인지 확인한다.
    hash_map = {"119", "97674223", "1195524421"}

    1195524421 => 1, 11, 119(o) => False
    97674223 => 9, 97, 976, ... => True
    """
    hash_map = set(phone_book)
    for phone_number in phone_book:
        for i in range(1, len(phone_number)):  # O(phone_book의 길이 x 번호의 길이)
            prefix = phone_number[:i]
            if prefix != phone_number and prefix in hash_map:
                return False
    return True


phone_book = ["119", "97674223", "1195524421"]
print(solution(phone_book))  # False

phone_book = ["123", "456", "789"]
print(solution(phone_book))  # True

phone_book = ["12", "123", "1235", "567", "88"]
print(solution(phone_book))  # False
