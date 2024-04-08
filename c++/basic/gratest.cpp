#include <iostream>
using namespace std;
int main()
{
    int a,b,c;
    cout<<"enter a";
    cin>>a;
    cout<<"enter b";
    cin>>b;
    cout<<"enter c";
    cin>>c;
    if((a>b)&&(a>c))
    {
        cout<<"greatest is a"<<a;
    }
    else if((b>a)&&(b>c))
    {
        cout<<"greatest is b"<<b;
    }
    else{
        cout<<"gretest is c"<<c;
    }
    return 0;

}