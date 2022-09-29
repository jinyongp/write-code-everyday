"""
                15(1)
        10(2)           8(3)
    5(4)    4(5)


"""


class Heap:
    def __init__(self):
        self._array = list()
        self._array.append(None)  # 0번 인덱스를 비워둠

    def _swap(self, x, y):
        self._array[x], self._array[y] = self._array[y], self._array[x]

    @staticmethod
    def _get_parent_index(index):
        return index // 2

    @staticmethod
    def _get_left_child_index(index):
        return index * 2

    @staticmethod
    def _get_right_child_index(index):
        return index * 2 + 1

    def insert(self, data):
        self._array.append(data)
        child_index = len(self._array) - 1
        parent_index = Heap._get_parent_index(child_index)

        while parent_index:
            if self._array[child_index] < self._array[parent_index]:
                self._swap(child_index, parent_index)
            child_index = parent_index
            parent_index = Heap._get_parent_index(child_index)
        return True

    def pop(self):
        if len(self._array) <= 1:
            return None

        data = self._array[1]
        self._array[1] = self._array[-1]
        del self._array[-1]

        length = len(self._array)

        parent_index = 1
        left_child_index = Heap._get_left_child_index(parent_index)
        right_child_index = Heap._get_right_child_index(parent_index)

        def swap_down(parent_index, child_index):
            self._swap(parent_index, child_index)
            parent_index = child_index
            left_child_index = Heap._get_left_child_index(parent_index)
            right_child_index = Heap._get_right_child_index(parent_index)
            return parent_index, left_child_index, right_child_index

        while length > left_child_index:
            if length <= right_child_index:  # right node가 없다면
                if self._array[left_child_index] < self._array[parent_index]:
                    parent_index, left_child_index, right_child_index = \
                        swap_down(parent_index, left_child_index)
                else:
                    break
            elif self._array[left_child_index] <= self._array[right_child_index]:
                parent_index, left_child_index, right_child_index = \
                    swap_down(parent_index, left_child_index)
            else:
                parent_index, left_child_index, right_child_index = \
                    swap_down(parent_index, right_child_index)
        return data


if __name__ == "__main__":
    max_heap = Heap()
    max_heap.insert(0)
    max_heap.insert(5)
    max_heap.insert(2)
    max_heap.insert(1)
    max_heap.insert(3)
    max_heap.insert(4)
    print(max_heap._array)
    print(max_heap.pop())
    print(max_heap.pop())
    print(max_heap.pop())
    print(max_heap.pop())
    print(max_heap.pop())
    print(max_heap.pop())
    print(max_heap.pop())
