def dfs(graph, start, visited=[]):
    visited.append(start)
    for node in graph[start]:
        if node not in visited:
            dfs(graph, node, visited)

    return visited


graph = {
    1: [3, 2],
    2: [3, 1, 4, 5],
    3: [6, 4, 2, 1],
    4: [3, 2],
    5: [2],
    6: [3]
}

print(dfs(graph, 1))  # [1, 3, 6, 4, 2, 5]
