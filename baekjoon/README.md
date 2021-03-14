# Baekjoon

### 실행 권한을 주기 위해 최초 한번만 실행

```sh
$ echo $PWD
/path/to/write-code-everyday/baekjoon

$ chmod +x ./create
```

### Baekjoon 파일 생성

```sh
$ ./create python [문제번호]
```

```sh
$ ./create cpp [문제번호]
```

위 명령어는 `src` 폴더에 문제를 생성하고 해당 문제로 링크한다.

`res/input.txt` 파일에 예제 입력을 복사해 붙여놓고 사용한다.

VScode - Debugger에서 `Baekjoon - Python: Current File`를 통해 디버그 및 컴파일한다.

결과는 `res/output.txt`에 저장된다.
