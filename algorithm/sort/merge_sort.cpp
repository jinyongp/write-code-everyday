#include <iostream>
#include <vector>
using namespace std;

template <typename T>
void print_vector(const vector<T> &arr);
template <typename T>
void merge_sort(vector<T> &arr, int left, int right);

int main() {
  vector<int> vec = {-1, 1, 5, 0, -4, 10, 3};
  merge_sort(vec, 0, vec.size() - 1);
  print_vector(vec);

  return 0;
}

template <typename T>
void print_vector(const vector<T> &arr) {
  for (const auto &item : arr) {
    cout << item << " ";
  }
  cout << endl;
}

/**
 * arr
 * [1 3 4 10] [-4 -2 -1 5]
 *  ^      ^    ^       ^
 *  p      q    r       s
 *
 * temp_arr
 * [-4, -2, -1 1, 3, 4, 5]
 *      ^
 * index
 */

template <typename T>
void merge(vector<T> &arr, int left, int right) {
  vector<T> temp_arr(right - left + 1, 0);
  int p = left;
  int q = (left + right) / 2;
  int r = q + 1;
  int s = right;
  int index = 0;

  while (p <= q && r <= s) {
    if (arr[p] >= arr[r]) {
      temp_arr[index++] = arr[r++];
    } else {
      temp_arr[index++] = arr[p++];
    }
  }

  if (p <= q) {
    for (int i = p; i <= q; ++i) {
      temp_arr[index++] = arr[i];
    }
  }
  if (r <= s) {
    for (int i = r; i <= s; ++i) {
      temp_arr[index++] = arr[i];
    }
  }

  for (int i = left, j = 0; i <= right; ++i) {
    arr[i] = temp_arr[j++];
  }
}

template <typename T>
void merge_sort(vector<T> &arr, int left, int right) {
  if (left >= right) return;
  int mid = (left + right) / 2;
  merge_sort(arr, left, mid);
  merge_sort(arr, mid + 1, right);
  merge(arr, left, right);
}