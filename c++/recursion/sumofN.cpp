// #include<iostream>
// using namespace std;

// void add(int n,int sum){
//     if(n<1){
//         cout<< sum;
//         return ;
//         }else{
//        add(n-1,sum+n);
//     }
  
// }

// int main(){
//  add(5,0);
 
//     return 0;
// }


#include<iostream>
using namespace std;

int add(int n){
    int sum=0;
    if(n==1){
        return 1;
    }
    else{
        sum=n+add(n-1);
    }
    return sum;
}

int main(){
    
    cout<<add(4);
    return 0;
}