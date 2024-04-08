#include<bits/stdc++.h>
using namespace std;

int binary(int arr[],int key,int n){
    int l=0,h=n-1;
    while(l<=h){
    int mid=(l+h)/2;

    if(arr[mid]==key){
        return mid;
    }else if(arr[mid]<key){
           l=mid+1;
    }else if(arr[mid]>key){
        h=mid-1;
    }
  return -1;
}

}

int main(){
    int n,key;
    cout<<"enter the size od arr "<<endl;
    cin>>n;
    int arr[n];
    cout<<"enter the elrmts of arr "<<endl;
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }
        cout<<"enter key to search"<<endl;
        cin>>key;

       cout<< binary(arr,key,n);
    return 0;
}