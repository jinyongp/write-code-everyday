// https://www.acmicpc.net/problem/1915
#include <algorithm>
#include <iostream>
#define SIZE 1001
using namespace std;

int main() {
  int N, M;
  cin >> N >> M;
  int S[SIZE][SIZE] = {0};
  int DP[SIZE][SIZE] = {0};
  for (int i = 1; i < N + 1; ++i) {
    for (int j = 1; j < M + 1; ++j) {
      char temp;
      cin >> temp;
      S[i][j] = temp - '0';
    }
  }
  int maximum = 0;
  for (int i = 1; i < N + 1; ++i) {
    for (int j = 1; j < M + 1; ++j) {
      if (S[i][j]) {
        DP[i][j] = 1 + min({DP[i - 1][j], DP[i][j - 1], DP[i - 1][j - 1]});
        maximum = max(maximum, DP[i][j]);
      }
    }
  }
  cout << maximum * maximum << endl;
  return 0;
}