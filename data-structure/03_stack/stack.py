class Stack:
    def __init__(self, max_size):
        self._stack = list()
        self._top = 0
        self._max_size = max_size

    def push(self, data):
        if self._top == self._max_size:
            raise Exception("maximum size exceeded")
        else:
            self._top += 1
            self._stack.append(data)

    def pop(self):
        if self._top:
            self._top -= 1
            data = self._stack[self._top]
            del self._stack[self._top]
            return data
        else:
            raise Exception("stack is empty")

    def is_empty(self):
        return not bool(self._top)


if __name__ == "__main__":
    stack = Stack(5)
    print(stack.is_empty())
    stack.push(1)
    stack.push(2)
    stack.push(3)
    stack.push(4)
    stack.push(5)
    # stack.push(6)
    print(stack.is_empty())
    print(stack.pop())
    print(stack.pop())
    print(stack.pop())
    print(stack.pop())
    print(stack.pop())
    # print(stack.pop())
    print(stack.is_empty())
