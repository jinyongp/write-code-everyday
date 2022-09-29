test_case = int(input())


def dfs(graph):


for _ in range(test_case):
    graph = {}
    for _ in range(int(input())):
        f1, f2 = input().split(" ")
        graph[f1] = graph.get(f1, []) + [f2]
        graph[f2] = graph.get(f2, []) + [f1]
        print(graph)
        print(len(graph[f1]) + len(graph[f2]))
