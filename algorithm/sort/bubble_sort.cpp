#include <iostream>
#include <vector>
using namespace std;

template <typename T>
void print_vector(const vector<T> &arr);
template <typename T>
void bubble_sort(vector<T> &arr);

int num = 0;

int main() {
  vector<int> vec = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

  bubble_sort(vec);
  print_vector(vec);

  cout << num;

  return 0;
}

template <typename T>
void print_vector(const vector<T> &arr) {
  for (const auto &item : arr)
    cout << item << " ";
  cout << endl;
}

template <typename T>
void bubble_sort(vector<T> &arr) {
  while (true) {
    bool isSwapped = false;
    for (int i = 0; i < arr.size() - 1; ++i) {
      num += 1;
      if (arr[i] <= arr[i + 1]) continue;
      T temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      isSwapped = true;
    }
    if (!isSwapped) break;
  }
}