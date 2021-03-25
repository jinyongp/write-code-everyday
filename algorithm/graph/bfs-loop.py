def bfs(graph, start):
    visited = []
    queue = [start]
    while queue:
        node = queue.pop(0)
        if node not in visited:
            visited.append(node)
            queue.extend(graph[node])

    return visited


graph = {
    1: [3, 2],
    2: [3, 1, 4, 5],
    3: [6, 4, 2, 1],
    4: [3, 2],
    5: [2],
    6: [3]
}

print(bfs(graph, 1))  # [1, 3, 2, 6, 4, 5]
