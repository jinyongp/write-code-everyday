from collections import deque
from beeprint import pp
import heapq as hq
import networkx as nx
from matplotlib import pyplot as plt


def farthest_nodes(n, vertex):
    graph = [list() for _ in range(n + 1)]
    for a, b in vertex:
        graph[a].append(b)
        graph[b].append(a)
    # G = nx.Graph()
    # G.add_edges_from(vertex)
    # nx.draw_networkx(G)
    # plt.show()

    start = 4
    visited = set()
    calculated = set()
    distances = []
    hq.heappush(distances, 0)
    calculated.add(4)
    queue = deque()
    queue.append((0, start))

    while queue:
        current_distance, current_node = queue.popleft()

        if current_node not in visited:
            visited.add(current_node)

            for adjacent in graph[current_node]:
                if adjacent not in calculated:
                    calculated.add(adjacent)
                    distance = current_distance - 1
                    hq.heappush(distances, distance)
                    # distances[adjacent] = distance
                    queue.append((distance, adjacent))

    count = 1
    last = hq.heappop(distances)
    while last == hq.heappop(distances):
        count += 1

    return count


pp(farthest_nodes(
    6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]))
# pp(farthest_nodes(
#     8, [
#         [1, 3],
#         [3, 1],
#         [1, 2],
#         [2, 1],
#         [1, 4],
#         [4, 1],
#         [4, 6],
#         [6, 4],
#         [4, 7],
#         [7, 4],
#         [4, 5],
#         [5, 4],
#         [5, 8],
#         [8, 5]
#     ]
# ))
# pp(farthest_nodes())
