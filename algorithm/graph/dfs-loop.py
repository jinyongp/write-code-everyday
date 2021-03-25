def dfs(graph, start):
    visited = []
    stack = [start]
    while stack:
        node = stack.pop()
        if node not in visited:
            visited.append(node)
            stack.extend(graph[node])

    return visited


graph = {
    1: [3, 2],
    2: [3, 1, 4, 5],
    3: [6, 4, 2, 1],
    4: [3, 2],
    5: [2],
    6: [3]
}

print(dfs(graph, 1))  # [1, 2, 5, 4, 3, 6]
