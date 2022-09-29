def solution(s):
    length = len(s)//2
    print(s[length:length+1] if len(s) % 2 else s[length-1:length+1])


solution('abcde')
solution('qwer')
