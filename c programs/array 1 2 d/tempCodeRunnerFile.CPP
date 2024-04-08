#include <iostream>
using namespace std;
int main()
{
    int r, c;
    cout << "enter the no row ";
    cin >> r;
    cout << "enter the no column ";
    cin >> c;
    int a[r][c];
    printf("enter the matrix \n");
    // int a[3][3]={{1,2,3},
    //              {4,5,6},
    //              {7,8,9}};
    for (int i = 0; i < r; i++)
    {
        for (int j = 0; j < c; j++)
        {
            cin >> a[i][j];
        }
    }
    cout << "transpose is ";
    for (int i = 0; i < r; i++)
    {
        for (int j = 0; j < c; j++)
        {
            cout << a[j][i] << " ";
        }
        cout << endl;
    }
    return 0;
}