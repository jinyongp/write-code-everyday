#include <string>
#include <vector>

#include <iostream>

using namespace std;

vector<int> solution(vector<int> prices)
{
  vector<int> answer(prices.size(), 0);
  int size = prices.size();

  for (int i = 0; i < size - 1; ++i) {
    for (int j = i + 1; j < size; ++j) {
      answer[i] += 1;
      if (prices[i] > prices[j]) break;
    }
  }

  return answer;
}

int main()
{
  vector<int> prices = { 1,2,3,2,3 };
  vector<int> result = solution(prices);

  for (auto i : result) {
    cout << i << ' ';
  }

  return 0;
}
