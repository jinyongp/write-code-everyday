// https://www.acmicpc.net/problem/14620

#include <iostream>
#include <set>
#include <tuple>
#include <utility>
#include <vector>
#define MAX 3001
using namespace std;

struct Coord {
  int x;
  int y;
};

int N;
vector<vector<int>> G;
// 본인을 포함, 시계 방향으로 처리 상->우->하->좌
vector<int> dx{0, 0, 1, 0, -1};
vector<int> dy{0, -1, 0, 1, 0};

int answer = MAX;

Coord getCoord(const int);
int getLandPrice(const int, const int, const int);

int main() {
  cin >> N;

  G.assign(N, vector<int>(N, 0));
  for (int i = 0; i < N; ++i) {
    for (int j = 0; j < N; ++j) {
      cin >> G[i][j];
    }
  }

  const int NN = N * N;
  for (int i = 0; i < NN; ++i) {
    for (int j = 0; j < NN; ++j) {
      for (int k = 0; k < NN; ++k) {
        if (i != j or j != k or i != k) {
          answer = min(answer, getLandPrice(i, j, k));
        }
      }
    }
  }
  cout << answer;
  return 0;
}

/**
 * 대치된 수를 좌표로 바꾸는 법
 * => x, y = div([0~N^2-1], N)
 */
Coord getCoord(const int num) {
  const auto [x, y] = div(num, N);
  const Coord coord{x, y};
  return coord;
}

int getLandPrice(const int f1, const int f2, const int f3) {
  const vector<int> flowers{f1, f2, f3};
  typedef tuple<int, int> Coord_t;

  int value = 0;
  set<Coord_t> sets;

  for (auto flower : flowers) {
    const Coord coord = getCoord(flower);
    if (coord.x == 0 or coord.y == 0 or coord.x == N - 1 or coord.y == N - 1) {
      return MAX;
    }
    for (int i = 0; i < 5; ++i) {
      const int mx = coord.x + dx[i];
      const int my = coord.y + dy[i];
      value += G[mx][my];
      auto result = sets.insert(Coord_t{mx, my});
      if (!result.second) {
        return MAX;
      }
    }
  }
  return value;
}
