# https://www.acmicpc.net/problem/17413
# temp = ""
# in_tag = False

# for s in input():
#     if s == " ":
#         if not in_tag:
#             print(temp[::-1], end=" ")
#             temp = ""
#         else:
#             temp += s
#     elif s == "<":
#         in_tag = True
#         print(temp[::-1] + s, end="")
#         temp = ""
#     elif s == ">":
#         in_tag = False
#         print(temp + s, end="")
#         temp = ""
#     else:
#         temp += s

# print(temp[::-1])


import re

"""
<tag>, 문자열, 공백으로 구분하여 문자열만 반전한 뒤 출력한다.
"""
regex = re.compile(r"(<.*?>)|(\w+)|(\s)")
result = regex.findall(input())
for tag, str, space in result:
    print(tag + str[::-1] + space, end="")
