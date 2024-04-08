#include <iostream>
// using namespace std;
// int main()
// {
//     int r, c;
//     cout << "enter the number of rows";
//     cin >> r;
//     cout << "enter the number of columns";
//     cin >> c;
//     int arr[r][c];
//     cout << "enter the matrix" << endl;
//     for (int i = 0; i < r; r++)
//     {
//         for (int j = 0; j < c; j++)
//         {
//             cin >> arr[i][j];
//         }
//     }

//     int minr = 0;
//     int maxr = r - 1;
//     int minc = 0;
//     int maxc = c - 1;
//     int elements = r * c;
//     int count = 0;

//     while (count < elements)
//     {
//         for (int j = minc; j <= maxc; j++)
//         {
//             cout << arr[minr][j];
//             count++;
//         }
//         minr++;

//         for (int i = minr; i <= maxr; i++)
//         {
//             cout << arr[i][maxc];
//             count++;
//         }
//         minc--;

//         for (int j = maxc; j >= minc; j--)
//         {
//             cout << arr[maxr][j];
//             count++;
//         }
//         maxr--;

//         for (int i = maxr; i >= minr; i--)
//         {
//             cout << arr[i][minc];
//             count++;
//         }
//         minc++;
//     }

//     return 0;
// }