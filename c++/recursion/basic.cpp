#include<iostream>
using namespace std;

void print(int n){
    if(n<1){
        return;
    }
    else{
        cout<<"shivam"<<endl;
        print(n-1);
    }
}

int main(){
   print(5);

    return 0;
}