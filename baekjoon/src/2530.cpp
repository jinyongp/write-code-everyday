// https://www.acmicpc.net/problem/2530

#include <iostream>
using namespace std;

int main() {
  int H, M, S, s;
  cin >> H >> M >> S >> s;

  H += s / (60 * 60);
  s %= 60 * 60;
  M += s / 60;
  s %= 60;
  S += s;

  M += S / 60;
  S %= 60;
  H += M / 60;
  M %= 60;

  H %= 24;

  cout << H << ' ' << M << ' ' << S;

  return 0;
}