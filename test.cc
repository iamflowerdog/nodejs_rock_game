#include <iostream>
using namespace std;
int main()
{
  int i = 0, b = 1, c = 0;
  int a = 4000;
  for (a; a > 6; a--)
  {
    if (a / 10 > 0)
    {
      if (a % 10 == 7)
      {
        cout << a << "过" << '\t';
        c = a;
        ++b;
      }
      else if (a / 100 > 0)
      {
        if (a % 100 == 7)
        {
          cout << a << "过" << '\t';
          c = a;
          ++b;
        }
      }
      else if (a / 1000 > 0)
      {
        if (a % 1000 == 7)
        {
          cout << a << "过" << '\t';
          c = a;
          ++b;
        }
      }
    }
    if (a % 7 == 0 && a != c)
    {
      cout << a << "过" << '\t';
      ++b;
    }
    if (b == 8)
    {
      cout << endl;
      b = 1;
    }
  }
  return 0;
}
