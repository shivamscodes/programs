#include<iostream>
using namespace std;
int main()
{
    int x;
    cout<<"enter the number\n";
    cin>>x;
    if(x>0)
    {
        if(x%2==0){
            cout<<"positive even";
        }else{
            cout<<"positive odd";

        }

    }
    else if(x<0)
    {
        if(x%2==0){
        cout<<"negative even";
        }
        else{
            cout<<"negative odd";
        }
    }
    else{
        cout<<"zero";
    }
return 0;
}