#include <iostream>
#include <vector>
using namespace std;

vector<vector<bool>> board;

int solution(int n);
int dfs(int r, int size);
bool conflict(int r, int c);

int solution(int n) {
  board.resize(n, vector(n, false));
  return dfs(0, n);
}

/**
 * dfs 구현
 */
int dfs(int r, int size) {
  if (r >= size) return 1;

  int count = 0;
  for (int col = 0; col < size; ++col) {
    if (conflict(r, col)) continue;
    board[r][col] = true;
    count += dfs(r + 1, size);
    board[r][col] = false;
  }
  return count;
}

/**
 *   0 1 2 3 4 5 6 7
 * 0 1 0 0 0 0 0 0 0
 * 1 0 0 1 0 0 0 0 0
 * 2 0 0 0 0 1 0 0 0
 * 3 0 0 0 0 0 0 1 0
 * 4 0 1 0 0 0 0 0 0
 * 5 0 0 0 1 0 0 0 0
 * 6 0 0 0 0 0 0 0 0 <-
 * 7 0 0 0 0 0 0 0 0
 */
bool conflict(int r, int c) {
  for (int row = 0; row < r; ++row) {
    for (int col = 0; col < board[row].size(); ++col) {
      if ((col == c) and board[row][col]) return true;
      if ((abs(r - row) == abs(c - col)) and board[row][col]) return true;
    }
  }
  return false;
}

int main() {
  cout << solution(8) << endl; // 92

  return 0;
}