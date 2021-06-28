import heapq


def solution(scoville, K):
    '''
    [1,2,3,9,10,12] 7 2

    scoville 리스트를 힙으로 구현한다.

    섞은 음식의 스코빌 지수 = 가장 맵지 않은 음식의 스코빌 지수 + (두 번째로 맵지 않은 음식의 스코빌 지수 * 2)
    '''
    heapq.heapify(scoville)
    answer = 0

    while any(s < K for s in scoville):
        if len(scoville) == 1 and scoville[0] < K:
            return -1
        first = heapq.heappop(scoville)
        second = heapq.heappop(scoville)
        result = first + second * 2
        heapq.heappush(scoville, result)
        answer += 1

    return answer


print(solution([1, 2, 3, 9, 10, 12], 7))  # 2
