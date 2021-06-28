// https://programmers.co.kr/learn/courses/30/lessons/43105?language=cpp
#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

/**
 *     7
 *    3 8
 *   8 1 0
 *  2 7 4 4
 * 4 5 2 6 5
 *
 *      0 7 0 -> padding
 *   0 10 15 0
 *  0 18 16 15 0
 * 0 20 0
 *  ...
 * 0 0 30 0 0 0 0
 *
 * dp[i][j + 1] = max(dp[i-1][j], dp[i-1][j+1]) + triangle[i][j]
 */
int solution(vector<vector<int>> triangle) {
  vector<vector<int>> dp;
  dp.push_back(vector<int>({0, triangle.at(0).at(0), 0}));
  for (int row = 1; row < triangle.size(); ++row) {
    dp.push_back(vector(triangle.at(row).size() + 2, 0));
    for (int col = 0; col < triangle.at(row).size(); ++col) {
      const int greater = max(dp[row - 1][col], dp[row - 1][col + 1]);
      dp[row][col + 1] = greater + triangle[row][col];
    }
  }
  vector<int> &last_row = dp.at(triangle.size() - 1);
  return *max_element(last_row.begin(), last_row.end());
}

int main() {

  // [ [7], [ 3, 8 ], [ 8, 1, 0 ], [ 2, 7, 4, 4 ], [ 4, 5, 2, 6, 5 ] ]
  vector<vector<int>> triangle;
  triangle.push_back(vector({7}));
  triangle.push_back(vector({3, 8}));
  triangle.push_back(vector({8, 1, 0}));
  triangle.push_back(vector({2, 7, 4, 4}));
  triangle.push_back(vector({4, 5, 2, 6, 5}));

  cout << solution(triangle) << endl;

  return 1;
}