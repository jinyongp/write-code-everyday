#include <iostream>
#include <set>
#include <tuple>
using namespace std;

int main() {
  typedef tuple<int, int> Coord_t;
  set<Coord_t> sets;

  sets.insert(Coord_t{1, 2});
  sets.insert(Coord_t{3, 2});
  sets.insert(Coord_t{1, 2});

  cout << sets.size() << endl;

  return 0;
}
