# Algorithm

## Time Complexity

- 알고리즘의 실행 및 완료에 필요한 시간
- 알고리즘의 시간 복잡도는 반복문이 지배한다.
- `Big O` 표기법은 알고리즘 성능 표기법 중 하나로 최악의 실행 시간을 표기한다.
- `O(입력)`: 입력 n에 따른 시간 복잡도 함수로 표현된다.
- $O(1) < O(logN) < O(N) < O(NlogN) < O(N^2) < O(2^N) < O(N!)$
- 가장 높은 차수만 표기한다.

## Space Complexity

- 알고리즘이 실행 및 완료에 필요한 메모리 저장 공간
- 메모리 공간 용량이 과거에 비해 크게 늘어나면서 시간 복잡도가 더 우선된다.
- 알고리즘과 무관한 단순한 코드 저장 공간인 `고정 공간`과 알고리즘의 실행에 동적으로 필요한 공간인 `가변 공간`으로 나뉜다.
- 고정 공간은 상수이므로 공간 복잡도는 가변 공간에 좌우된다. 시간 복잡도와 똑같이 `Big O` 표기법으로 표현한다.
