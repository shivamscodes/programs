#include<bits/stdc++.h>
using namespace std;


int main(){
    int n;
    cout<<"enter the size od arr "<<endl;
    cin>>n;
    int arr[n];
    cout<<"enter the elrmts of arr "<<endl;
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }
     //insertion sort
     for(int i=0;i<n-1;i++){
       int  j=i+1;
        while( j>=1  && arr[j] < arr[j-1]){
                swap(arr[j],arr[j-1]);
          j--;
             }
           
        }
     

     for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
     }
    return 0;
}