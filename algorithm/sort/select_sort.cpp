#include <iostream>
#include <vector>
using namespace std;

template <typename T>
void print_vector(const vector<T> &arr);
template <typename T>
void select_sort(vector<T> &arr);

int main() {
  vector<int> vec1 = {30, 0, 5, 2, 10, 4, 20};

  select_sort(vec1);
  print_vector(vec1);

  return 0;
}

template <typename T>
void print_vector(const vector<T> &arr) {
  for (const auto &item : arr) {
    cout << item << " ";
  }
  cout << endl;
}

// arr = {30, 0, 5, 2, 10, 4, 20};
template <typename T>
void select_sort(vector<T> &arr) {
  for (int i = 0; i < arr.size(); ++i) {
    int min_index = i;
    for (int j = i + 1; j < arr.size(); ++j) {
      if (arr[min_index] > arr[j]) min_index = j;
    }
    T temp = arr[min_index];
    arr[min_index] = arr[i];
    arr[i] = temp;
  }
}