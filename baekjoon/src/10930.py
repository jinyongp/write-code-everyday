from hashlib import sha256

print(sha256(input().encode()).hexdigest())
