# Baekjoon

### create 파일에 실행 권한을 주기 위해 최초 한번만 실행

```sh
$ echo $PWD
/path/to/write-code-everyday/baekjoon

$ chmod +x ./create
```

### Python 파일 생성 및 실행

```sh
$ ./create python [문제번호]
```

위 명령어는 `src` 폴더에 문제를 생성하고 해당 문제로 링크한다.

`res/input.txt` 파일에 예제 입력을 복사해 붙여놓고 사용한다.

VScode - Debugger에서 `[Baekjoon] Python: Current File`를 통해 디버그 및 컴파일한다.

결과는 `res/output.txt`에 저장된다.

### Cpp 파일 생성 및 실행

```sh
$ ./create cpp [문제번호]
```

VScode Debugger에서 `[Baekjoon] C++: Current File`를 통해 디버그 및 컴파일한다.

**`lldb`를 사용하기 위해선 extension 중에 CodeLLDB를 설치해야 한다.**

결과는 `res/output.txt`에 저장된다.
