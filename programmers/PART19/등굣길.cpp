// https://programmers.co.kr/learn/courses/30/lessons/42898?language=cpp
#include <iostream>
#include <vector>
using namespace std;

/**
 * dp = [
 *   [1 0 0 0]
 *   [0 x 0 0]
 *   [0 0 0 0]
 * ]
 * (x는 물웅덩이 위치)
 * dp[row][col] = 시작 지점으로부터 현재 위치까지 도달하는 최소 경로의 개수
 * dp[row][col] = dp[row - 1][col] + dp[row][col - 1];
 *
 * dp = [
 *   [0 0 0 0 0] -> padding
 *   [0 1 1 1 1]
 *   [0 1 x 1 2]
 *   [0 1 1 2 4]
 * ]
 *
 * @param m 격자의 가로 크기
 * @param n 격자의 세로 크기
 * @param puddles 물에 잠긴 지역
 * @return 오른쪽과 아래쪽으로만 움직여 집에서 학교까지 갈 수 있는 최단경로의 개수를 1,000,000,007로 나눈 나머지
 */
int solution(int m, int n, vector<vector<int>> puddles) {
  vector<vector<int>> dp(n + 1, vector<int>(m + 1, 0));
  for (const auto &p : puddles)
    dp[p[1]][p[0]] = -1;
  dp[1][1] = 1;

  for (int row = 1; row <= n; ++row) {
    for (int col = 1; col <= m; ++col) {
      if (dp[row][col]) continue;
      if (dp[row - 1][col] < 0) {
        dp[row][col] = dp[row][col - 1];
      } else if (dp[row][col - 1] < 0) {
        dp[row][col] = dp[row - 1][col];
      } else {
        dp[row][col] = dp[row - 1][col] + dp[row][col - 1];
      }
      dp[row][col] %= 1000000007;
    }
  }

  return dp[n][m];
}

int main() {
  vector<vector<int>> puddles({{2, 2}});

  cout << solution(4, 3, puddles) << endl;

  return 0;
}