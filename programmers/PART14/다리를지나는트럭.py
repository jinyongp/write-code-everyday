# https://programmers.co.kr/learn/courses/30/lessons/42583?language=python3

from collections import deque


class Bridge:
    """
    다리를 구현한다.
    """

    def __init__(self, weight, length):
        """
        bridge는 트럭의 무게를, time을 트럭의 시간을 가진다. 동일한 인덱스 번호를 가진다.
        """
        self._bridge = deque()
        self._time = deque()
        self.current_weight = 0
        self.weight = weight
        self.length = length

    def over_weight(self, truck_weight):
        """
        트럭의 무게를 더했을 때 현재 다리의 무게를 넘어서는지 확인한다.
        """
        return self.current_weight + truck_weight > self.weight

    def enter(self, truck_weight):
        """
        다리는 견딜수 있는 무게를 가지고 있고 그 이상 넘어가면 트럭이 진입할 수 없다.
        다리 위에 있는 트럭은 (트럭무게, 시간)으로 queue에 저장된다.
        진입 성공 여부에 따라 부울값을 반환한다.
        """
        if not self.over_weight(truck_weight):
            self._bridge.append(truck_weight)
            self._time.append(1)
            self.current_weight += truck_weight
            return True
        return False

    def move(self):
        """
        트럭이 이동한 시간을 1씩 증가하고,
        트럭이 이동한 시간이 length를 넘어서면 해당 트럭을 다리에서 제거하고 트럭의 무게를 반환한다.
        넘어선 트럭이 없으면 0을 반환한다.
        """
        self._time = deque(map(lambda x: x + 1, self._time))
        weight, time = self._bridge[0], self._time[0]
        if time > self.length:
            self.current_weight -= weight
            self._bridge.popleft()
            self._time.popleft()
            return weight
        return 0

    def is_empty(self):
        """
        다리가 비었는지 확인한다.
        """
        return bool(not len(self._bridge))


def solution(bridge_length, weight, truck_weights):
    """
    2 10 [7,4,5,6]
    """
    bridge = Bridge(weight, bridge_length)
    trucks = deque(truck_weights)
    bridge.enter(trucks.popleft())
    time = 1
    while not bridge.is_empty():
        time += 1
        bridge.move()
        if len(trucks) and not bridge.over_weight(trucks[0]):
            bridge.enter(trucks.popleft())

    return time


bridge_length, weight, truck_weights = 2, 10, [7, 4, 5, 6]
print(solution(bridge_length, weight, truck_weights))  # 8


bridge_length, weight, truck_weights = 100, 100, [10]
print(solution(bridge_length, weight, truck_weights))  # 101

bridge_length, weight, truck_weights = 100, 100, [
    10, 10, 10, 10, 10, 10, 10, 10, 10, 10
]
print(solution(bridge_length, weight, truck_weights))  # 110
