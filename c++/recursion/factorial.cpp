#include<iostream>
using namespace std;

int fact(int n){
    int factorial=1;
    if(n==1){
        return 1;
    }
    else{
      factorial=n*fact(n-1);

    }
    return factorial;
}

int main(){
    cout<<fact(5);
    return 0;

}