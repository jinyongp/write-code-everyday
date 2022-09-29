class PriorityQueue:

    def __init__(self):
        self._heap = list()
        self._heap.append(None)

    def _swap(self, a, b):
        self._heap[a], self._heap[b] = self._heap[b], self._heap[a]

    def is_empty(self):
        return len(self._heap) <= 1

    def put(self, data):
        self._heap.append(data)
        child_index = len(self._heap) - 1
        parent_index = child_index // 2

        while parent_index:
            if self._heap[child_index][0] < self._heap[parent_index][0]:
                self._swap(child_index, parent_index)
            child_index = parent_index
            parent_index //= 2
        return True

    def get(self):
        if self.is_empty():
            return None

        _, data = self._heap[1]
        self._heap[1] = self._heap[-1]
        del self._heap[-1]

        length = len(self._heap) - 1

        parent_index = 1
        left_child_index = parent_index * 2
        right_child_index = parent_index * 2 + 1

        def swap_down(parent_index, child_index):
            self._swap(parent_index, child_index)
            parent_index = child_index
            left_child_index = parent_index * 2
            right_child_index = parent_index * 2 + 1
            return parent_index, left_child_index, right_child_index

        while length >= left_child_index:
            if length < right_child_index:
                if self._heap[left_child_index][0] < self._heap[parent_index][0]:
                    parent_index, left_child_index, right_child_index = \
                        swap_down(parent_index, left_child_index)
                else:
                    break
            elif self._heap[left_child_index][0] <= self._heap[right_child_index][0]:
                parent_index, left_child_index, right_child_index = \
                    swap_down(parent_index, left_child_index)
            else:
                parent_index, left_child_index, right_child_index = \
                    swap_down(parent_index, right_child_index)

        return data

    def peek(self):
        return self._heap[1][1]


if __name__ == "__main__":
    pq = PriorityQueue()
    pq.put((0, 'a'))
    pq.put((5, 'b'))
    pq.put((2, 'c'))
    pq.put((1, 'd'))
    pq.put((3, 'e'))
    pq.put((4, 'f'))
    print(pq._heap)
    print(pq.get())
    print(pq.get())
    print(pq.get())
    print(pq.get())
    print(pq.get())
    print(pq.get())
    print(pq.get())
