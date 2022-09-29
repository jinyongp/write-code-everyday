from unittest import main, TestCase
from collections import Counter
from itertools import combinations


def solution(orders, course):
    """
    combinations 함수를 통해 order에서 course만큼의 수를 가진 조합을 모두 산출한다.
    산출된 모든 조합을 리스트에 넣고 카운팅한다.
    """
    answer = []

    for c in course:
        order_combinations = []
        for order in orders:
            order_combinations += combinations(sorted(order), c)
        print(order_combinations)
        # most_ordered = Counter(order_combinations).most_common()
        # answer += [''.join(menu) for menu, num in most_ordered if num >= 2 and num == ]


class Test(TestCase):
    def test_solution_1(self):
        self.assertEqual(
            solution(
                ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"],
                [2, 3, 4]
            ),
            ["AC", "ACDE", "BCFG", "CDE"]
        )

    # def test_solution_2(self):
    #     self.assertEqual(
    #         solution(
    #             ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"],
    #             [2, 3, 5]
    #         ),
    #         ["ACD", "AD", "ADE", "CD", "XYZ"]
    #     )

    # def test_solution_3(self):
    #     self.assertEqual(
    #         solution(
    #             ["XYZ", "XWY", "WXA"],
    #             [2, 3, 4]
    #         ),
    #         ["WX", "XY"]
    #     )


main()
