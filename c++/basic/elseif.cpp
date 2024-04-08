#include<iostream>
using namespace std;
int main()
{
    int x;
    cout<<"enter the number\n";
    cin>>x;
    if(x>0){
        cout<<"positive";
    }
    else if (x<0)
    {
        cout<<"negative";

    }
    else    //else if (x==0) can also be written the program will execute
    {
      cout<<"zero";

    }
    
        return 0;
}