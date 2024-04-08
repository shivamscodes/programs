// #include<iostream>
// using namespace std;

// void fun(int n){
//     if(n<1){
//     return;
//     }else{
//         cout<<n<<endl;
//         fun(n-1);
//     }
// }

// int main(){
  
//   fun(6);
//     return 0;
// }

//654321






// #include<iostream>
// using namespace std;

// void fun(int i,int n){
//     if(n<i){
//     return;
//     }else{
//         cout<<i<<endl;
//         fun(i+1,n);
//     }
// }

// int main(){
  
//   fun(1,6);
//     return 0;
// }


//123456



#include<iostream>
using namespace std;

void fun(int n){
    if(n<1){
    return;
    }else{
      
        fun(n-1);
          cout<<n<<endl;
    }
}

int main(){
  
  fun(6);
    return 0;
}