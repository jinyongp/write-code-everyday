class Node:
    def __init__(self, data, next=None, prev=None):
        self.data = data
        self.next = next
        self.prev = prev


class LinkedList:
    def __init__(self, data):
        self._head = Node(data)
        self._tail = self._head

    def __iter__(self):
        node = self._head
        while node:
            yield node.data
            node = node.next

    def __call__(self, reverse=False):
        lst = []
        node = self._tail if reverse else self._head
        while node:
            lst.append(node.data)
            node = node.prev if reverse else node.next
        return lst

    def insert_tail(self, data):
        node = Node(data, prev=self._tail)
        self._tail.next = node
        self._tail = node
        return True

    def insert_head(self, data):
        node = Node(data, next=self._head)
        self._head.prev = node
        self._head = node
        return True

    def insert_before(self, data, before_data):
        node = self._head
        while node.next:
            if node.data == before_data:
                new_node = Node(data, prev=node, next=node.next)
                node.next.prev = new_node
                node.next = new_node
                return True
            node = node.next
        else:
            if node.data == before_data:
                return self.insert_tail(data)
            return False

    def delete(self, data):
        pass


if __name__ == '__main__':
    double_linked_list = LinkedList(1)
    double_linked_list.insert_tail(2)
    double_linked_list.insert_tail(3)
    double_linked_list.insert_tail(4)
    double_linked_list.insert_tail(5)
    double_linked_list.insert_tail(6)
    double_linked_list.insert_before(7, 3)
    double_linked_list.insert_before(7, 0)
    print(double_linked_list())
    double_linked_list.delete(1)
    double_linked_list.delete(3)
    print(double_linked_list())
