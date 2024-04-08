#include<iostream>
using namespace std;
int main()
{
    int y;
    cout<<"enetr the year to check";
    cin>>y;
    if((y%4==0)&&(y%100!=0))
    {
        cout<<"it is a leap year";
    }
    else{
        cout<<"it is not a leap year";
    }
    return 0;
}