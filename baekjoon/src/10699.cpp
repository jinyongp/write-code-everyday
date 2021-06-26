// https://www.acmicpc.net/problem/10699

#include <ctime>
#include <iomanip>
#include <iostream>
using namespace std;

/**
 * 서울의 오늘 날짜를 출력하는 프로그램을 작성하시오.
 *
 * YYYY-MM-DD 형식으로 출력
 */
int main() {
  time_t now = time(0);
  struct tm *t = localtime(&now);

  cout << 1900 + t->tm_year << '-';
  cout << setfill('0') << setw(2) << 1 + t->tm_mon;
  cout << '-' << t->tm_mday;

  return 0;
}
