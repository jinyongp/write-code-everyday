# Baekjoon

## create 파일에 실행 권한을 주기 위해 최초 한번만 실행

```sh
$ echo $PWD
/path/to/write-code-everyday/baekjoon

$ chmod +x ./create
```

## 파일 생성 및 디버그

`create` 스크립트는 `src` 폴더에 문제 템플릿을 생성한다.

`res/input.txt` 파일에 예제 입력을 복사 붙여넣기한다.

결과는 `res/output.txt`에 저장된다.

### Python

```sh
$ ./create python [문제번호]
```

Debugger에서 `Python: Current File`를 통해 디버그 및 컴파일한다.

### Cpp

```sh
$ ./create cpp [문제번호]
```

Debugger에서 `C++: Current File`를 통해 디버그 및 컴파일한다.

**`lldb`를 사용하기 위해선 extension 중에 CodeLLDB를 설치해야 한다.**

### JavaScript

```sh
$ ./create js [문제번호]
```

Debugger에서 `JS: Current File`를 통해 디버그 및 컴파일한다.
