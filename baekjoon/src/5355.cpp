// https://www.acmicpc.net/problem/5355

#include <iomanip>
#include <iostream>
#include <sstream>
using namespace std;

int main() {
  cout.precision(2);

  string T;
  getline(cin, T);

  for (int i = 0; i < stoi(T); ++i) {
    string str;
    getline(cin, str);
    istringstream iss(str);
    double N;
    char operators[3] = {};
    iss >> N >> operators[0] >> operators[1] >> operators[2];

    for (int j = 0; j < 3; ++j) {
      if (operators[j] == '@') N *= 3;
      if (operators[j] == '%') N += 5;
      if (operators[j] == '#') N -= 7;
    }

    cout << fixed << N << endl;
  }

  return 0;
}