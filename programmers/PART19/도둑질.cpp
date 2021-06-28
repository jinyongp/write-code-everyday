// https://programmers.co.kr/learn/courses/30/lessons/42897?language=cpp
#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

/**
 * 각 집은 동그랗게 연결되어 있다.
 *
 * dp[i] = 여태 훔친 돈의 최댓값
 * dp[i] = max(dp[i - 3], dp[i - 2]) + money[i]
 *
 * {1, 2, 3, 1}
 *
 *       [1, 2, 3, 1]
 * [0, 0, 1, 2, 4]
 *
 * {11, 0, 2, 5, 100, 100, 85, 1}
 *
 *        0                         < size()
 *       [11, 0,  2,  5, 100, 100,  85, 1]
 * [0, 0, 11, 0, 13, 16, 113, 116, 198];
 *        +2
 *
 *      > 0                          size() - 1
 * [11,   0,   2,   5, 100, 100, 85, 1]
 *     [185, 187, 106, 185, 101, 85, 1, 0, 0]
 *      0                            size() - 1
 *
 * false일 때도 동일하다.
 *
 * @param money 각 집에 있는 돈이 담긴 배열 (크기: 3 이상 1,000,000 이하)
 * @return 도둑이 훔칠 수 있는 돈의 최댓값
 */
int solution(vector<int> money) {
  vector<vector<int>> dp(2, vector(money.size() + 2, 0));

  for (int i = 0; i < money.size() - 1; ++i)
    dp[true][i + 3] = max(dp[true][i + 1], dp[true][i]) + money[i];

  for (int i = money.size() - 1; i > 0; --i)
    dp[false][i - 1] = max(dp[false][i + 1], dp[false][i + 2]) + money[i];

  return max(
      *max_element(dp[true].begin(), dp[true].end()),
      *max_element(dp[false].begin(), dp[false].end()));
}

int main() {
  cout << solution({1, 2, 3, 1}) << " " << 4 << endl;
  cout << solution({1, 1, 4, 1, 4}) << " " << 8 << endl;
  cout << solution({1000, 0, 0, 1000, 0, 0, 1000, 0, 0, 1000}) << " " << 3000
       << endl;
  cout << solution({1000, 1, 0, 1, 2, 1000, 0}) << " " << 2001 << endl;
  cout << solution({1000, 0, 0, 0, 0, 1000, 0, 0, 0, 0, 0, 1000}) << " " << 2000
       << endl;
  cout << solution({1, 2, 3, 4, 5, 6, 7, 8, 9, 10}) << " " << 30 << endl;
  cout << solution({0, 0, 0, 0, 100, 0, 0, 100, 0, 0, 1, 1}) << " " << 201
       << endl;
  cout << solution({11, 0, 2, 5, 100, 100, 85, 1}) << " " << 198 << endl;
  cout << solution({1, 2, 3}) << " " << 3 << endl;
  cout << solution({91, 90, 5, 7, 5, 7}) << " " << 104 << endl;
  cout << solution({90, 0, 0, 95, 1, 1}) << " " << 185 << endl;

  return 0;
}