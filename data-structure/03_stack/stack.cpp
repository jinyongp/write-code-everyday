#include <iostream>
using namespace std;

/**
 * Stack
 * - 선입후출 정책 (FILO, First In Last Out)
 * - 후입선출이라고도 할 수 있음 (LIFO)
 * - 최대 크기가 정해져있음(스택의 최대 크기를 벗어나면 stack overflow)
 * - 항상 가장 마지막에 들어온 아이템만 추출가능 (스택의 중간에서 아이템을 빼올 수 없음)
 * - push와 pop 메서드를 가짐 (push: 아이템 삽입, pop: 아이템 추출)
 */
class Stack {

public:
  Stack(int size) : size(size), top(-1) {}

  /**
   * 스택에 자료 추가
   */
  void push(int data) {}

  /**
   * 스택에서 자료 추출
   */
  int pop() {}

private:
  int size;
  int top;
};

int main() {

  return 0;
}
