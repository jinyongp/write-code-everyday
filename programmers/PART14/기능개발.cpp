#include <iostream>

#include <string>
#include <vector>
#include <cmath>

using namespace std;

vector<int> solution(vector<int> progresses, vector<int> speeds)
{
  vector<int> answer{ 1 };
  vector<int> available;
  int last_index = 0;
  const int size = progresses.size();

  for (int i = 0; i < size; ++i) {
    const int progress = progresses.at(i);
    const int speed = speeds.at(i);
    available.push_back(ceil((100 - progress) / (float)speed));
  }

  int last_day = available.at(0);
  for (int i = 1; i < size; ++i) {
    const int day = available.at(i);
    if (last_day < day) {
      answer.push_back(1);
      last_index += 1;
      last_day = day;
    } else {
      answer[last_index] += 1;
    }
  }

  return answer;
}

int main()
{
  vector<int> progresses{ 95, 90, 99, 99, 80, 90 };
  vector<int> speeds{ 1, 1, 1, 1, 1, 1 };
  vector<int> result = solution(progresses, speeds);

  for (auto i : result) {
    cout << i << ' ';
  }

  return 0;
}