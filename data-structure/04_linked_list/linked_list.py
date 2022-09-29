class Node:
    def __init__(self, data, next=None):
        self.data = data
        self.next = next


class LinkedList:
    def __init__(self, data):
        self._head = Node(data)

    def __iter__(self):
        node = self._head
        while node:
            yield node.data
            node = node.next

    def desc(self):
        for item in self:
            print(item, end=' ')
        print()

    def add(self, data):
        node = self._head
        while node.next:
            node = node.next
        node.next = Node(data)

    def delete(self, data):
        node = self._head
        if node.data == data:
            self._head = node.next
            del node
            return True
        while node.next:
            if node.next.data == data:
                temp = node.next
                node.next = temp.next
                del temp
                return True
            node = node.next

        return False


if __name__ == '__main__':
    linked_list = LinkedList(1)
    linked_list.add(2)
    linked_list.add(3)
    linked_list.add(4)
    linked_list.add(5)
    linked_list.add(6)
    linked_list.desc()
    linked_list.delete(1)
    linked_list.delete(3)
    linked_list.delete(6)
    linked_list.delete(2)
    linked_list.delete(3)
    linked_list.delete(4)
    linked_list.delete(5)
    linked_list.desc()
