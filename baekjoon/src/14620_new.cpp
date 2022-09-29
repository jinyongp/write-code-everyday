// https://www.acmicpc.net/problem/14620

#include <algorithm>
#include <iostream>
#include <vector>
#define MAX 3001
using std::vector;
using std::

    struct Coord {
  int x;
  int y;
};

int N;
vector<vector<int>> G;
int answer = MAX;

bool canBePlaced2(Coord, Coord);
bool canBePlaced3(Coord, Coord, Coord);
int getLandPrice(Coord);
template <typename Iterator, typename value_type = Iterator::value_type>
vector<vector<value_type>> combinations(Iterator, const int);

int main() {
  cin >> N;
  G.assign(N, vector<int>(N, 0));
  for (int i = 0; i < N; ++i) {
    for (int j = 0; j < N; ++j) {
      cin >> G[i][j];
    }
  }
  vector<vector<Coord>> land(N - 2, vector<Coord>(N - 2, Coord{0, 0}));
  for (int i = 0; i < N - 2; ++i) {
    for (int j = 0; j < N - 2; ++j) {
      land[i][j] = Coord{i + 1, j + 1};
    }
  }

  return 0;
}

vector<vector<value_type>> combinations()