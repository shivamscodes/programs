#include <iostream>
using namespace std;
int main()
{
    int op,x,y;
    cout<<"enter op\n";
    cin>>op;
    cout<<"enter x";
    cin>>x;
    cout<<"enter y";
    cin>>y;
    if(op==1)
    {
        cout<<x+y;

    }
    else if(op==2)
    {
        cout<<x-y;
    }
    else if(op==3)
    {
        cout<<x*y;
    }
    else if(op==4)
    {
        cout<<x/y;
    }
    else
    {
        cout<<"invalin input";
    }
    return 0;
}
