for _ in range(int(input())):
    inputs = input()
    # from cursor
    left_stack = []
    right_stack = []
    for key in inputs:
        if key == "<":
            if left_stack:
                right_stack.append(left_stack.pop())
        elif key == ">":
            if right_stack:
                left_stack.append(right_stack.pop())
        elif key == "-":
            if left_stack:
                left_stack.pop()
        else:
            left_stack.append(key)
    password = "".join(left_stack + right_stack[::-1])
    print(password)
