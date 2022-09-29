#include <iostream>
#include <vector>
using namespace std;

template <typename T>
void insert_sort(vector<T> &arr);
template <typename T>
void insert_recursive(vector<T> &arr, int index = 1);
template <typename T>
void print_vector(const vector<T> &arr);

int main() {
  vector<int> int_arr = {1, 2, 6, 2, -1};

  insert_recursive(int_arr);
  print_vector(int_arr);

  // vector<double> double_arr = {0.0, -1.5, 2.7, 10.6, -0.7};

  // insert_sort(double_arr);
  // print_vector(double_arr);

  // vector<string> string_arr = {"ceon", "jinyong", "park", "bang", "netflix"};

  // insert_sort(string_arr);
  // print_vector(string_arr);

  return 0;
}

/**
 * {1, 5, -1, 0, 6, 8, 10}
 *
 * 1. 1하고 5를 비교  => 1이 더 작으므로 패스
 * 2. 5하고 -1을 비교 => -1이 더 작으므로 둘을 스왑 {1, -1, 5, 0, 6, 8, 10}
 * 3. 1하고 -1을 비교 => -1이 더 작으므로 둘을 스왑 {-1, 1, 5, 0, 6, 8, 10}
 * 4. 0하고 5를 비교  =>
 *
 *
 *
 * for (1. 초기문; 2. 조건문; 3. 증감문) {
 *   4. 반복할 문장
 * }
 *
 * 1 -> 2 -> 4 -> 3 -> 2 -> 4 -> 3 -> 2 -> 4 -> 3 -> ...
 */
template <typename T>
void insert_sort(vector<T> &arr) {
  for (int i = 1; i < arr.size(); ++i) {
    for (int j = i - 1; j >= 0; --j) {
      if (arr[j + 1] >= arr[j]) break;
      T temp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = temp;
    }
  }
}

template <typename T>
void print_vector(const vector<T> &arr) {
  for (const auto &item : arr) {
    cout << item << " ";
  }
  cout << endl;
}

template <typename T>
void recursive(vector<T> &arr, int index) {
  if (arr[index + 1] >= arr[index] || index < 0) return;
  T temp = arr[index + 1];
  arr[index + 1] = arr[index];
  arr[index] = temp;
  recursive(arr, index - 1);
}

template <typename T>
void insert_recursive(vector<T> &arr, int index) {
  if (index >= arr.size()) return;

  recursive(arr, index - 1);
  // for (int i = index - 1; i >= 0; --i) {
  //   if (arr[i + 1] >= arr[i]) break;
  //   T temp = arr[i + 1];
  //   arr[i + 1] = arr[i];
  //   arr[i] = temp;
  // }

  insert_recursive(arr, index + 1);
}
