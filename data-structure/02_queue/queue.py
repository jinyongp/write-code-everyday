class Queue:
    def __init__(self):
        self._queue = list()

    def enqueue(self, data):
        self._queue = [data] + self._queue

    def dequeue(self):
        try:
            data = self._queue[-1]
            del self._queue[-1]
            return data
        except IndexError:
            return None


if __name__ == '__main__':
    queue = Queue()
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    print(queue._queue)
    print(queue.dequeue())
    print(queue.dequeue())
    print(queue.dequeue())
    print(queue.dequeue())
