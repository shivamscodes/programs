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
     //selection sort
      for(int i=0;i<n-1;i++){
        int min=INT_MAX;
        int mindx=-1;
        for(int j=i;j<n;j++){
            if(min>arr[j]){
                min=arr[j];
                mindx=j;
            }
        }
        //if(arr[i]>arr[mindx]){
        swap(arr[i],arr[mindx]);
     // }
      }

     for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
     }
    return 0;
}