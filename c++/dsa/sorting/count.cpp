#include<iostream>
using namespace std;


void countsort(int arr[],int n){
    int b[n];

    int max=arr[0];
    for(int i=0;i<n;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }


    int count[max+1];
    for(int i=0;i<=max+1;i++){
        count[i]=0;
    }

    for(int i=0;i<n;i++){
        count[arr[i]]++;
    }
  
   for(int i=1;i<=max;i++){
    count[i]=count[i]+count[i-1];
   }

    
   
   for(int i=n-1;i>=0;i--){
     b[--count[arr[i]]]=arr[i];
   }
   
   for(int i=0;i<n;i++){
    arr[i]=b[i];
   }

 }

  int main(){
    
    int a[]={1,4,5,6,3,3,7,8,4,5,6,1,1};
    countsort(a,13);

    for(int i=0;i<13;i++){
      cout<<a[i]<<" ";
    }
    return 0;
  }



  //tc=> o(max ele)
        //  O(n)