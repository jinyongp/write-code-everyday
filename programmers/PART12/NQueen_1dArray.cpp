#include <iostream>
#include <vector>
using namespace std;

bool queens(int n);
bool queens(int *arr, int size, int k);
vector<int> queens2(int n);
bool conflict(int *arr, int row, int column);
void visualize(int *arr, int size);

int main() {
  int size = 8;
  int *arr = new int[size];

  if (queens(arr, size, 0)) visualize(arr, size);
  if (queens(8)) visualize(arr, size);

  cout << "[";
  for (const auto &data : queens2(8)) {
    cout << data << ", ";
  }
  cout << "]" << endl;

  delete[] arr;

  return 0;
}

vector<int> queens2(int n) {
  int *arr = new int[n];
  queens(arr, n, 0);
  vector<int> vec(arr, arr + n);
  return vec;
}

bool queens(int n) {
  int *arr = new int[n];
  return queens(arr, n, 0);
}

bool queens(int *arr, int size, int k) {
  if (k >= size) return true;

  for (int i = 0; i < size; i++) {
    arr[k] = i;
    if (!conflict(arr, k, i))
      if (queens(arr, size, k + 1)) return true;
  }
  return false;
}

bool conflict(int *arr, int row, int column) {
  for (int i = 0; i < row; i++)
    if (column == arr[i]) return true;   //same column
    else if (column - row == arr[i] - i) //diagonal
      return true;
    else if (column + row == arr[i] + i) //diagonal /
      return true;

  return false;
}

void drawLine(int size) {
  cout << "   +";
  for (int i = 0; i < size; i++)
    cout << "----+";
  cout << endl;
}

void visualize(int *arr, int size) {
  cout << "    ";
  //column number
  for (int i = 0; i < size; i++)
    cout << "  " << i << "  ";
  cout << endl;

  drawLine(size);
  for (int i = 0; i < size; i++) {
    cout << " " << i << " ";
    cout << "|";
    //in ith row and column arr[i], draw a mark
    for (int j = 0; j < size; j++)
      if (j == arr[i]) cout << " Q" << i << " |";
      else
        cout << "    |"; //4 spaces

    cout << endl;
    drawLine(size);
  }
}
