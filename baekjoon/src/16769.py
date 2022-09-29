# https://www.acmicpc.net/problem/16769
"""
The first line of the input file contains two space-separated integers: the capacity c1 of the first bucket, and the amount of milk m1 in the first bucket. Both c1 and m1 are positive and at most 1 billion, with c1 >= m1. The second and third lines are similar, containing capacities and milk amounts for the second and third buckets.

Please print three lines of output, giving the final amount of milk in each bucket, after 100 pour operations.
"""
buckets = [list(map(int, input().split())) for _ in range(3)]

for i in range(100):
    c, n = buckets[i % 3], buckets[(i + 1) % 3]
    (c1, m1), (c2, m2) = c, n

    n[1] = min(c2, m1 + m2)
    c[1] = max(0, (m1 + m2) - c2)

for _, m in buckets:
    print(m)
