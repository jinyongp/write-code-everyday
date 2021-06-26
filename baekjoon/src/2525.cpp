// https://www.acmicpc.net/problem/2525

#include <iostream>
using namespace std;

int main() {
  int A, B, C;
  cin >> A >> B >> C;

  A += C / 60;
  C %= 60;
  B += C;
  A += B / 60;
  A %= 24;
  B %= 60;

  cout << A << ' ' << B;

  return 0;
}