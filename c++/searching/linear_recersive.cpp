#include<bits/stdc++.h>
using namespace std;

int linear(int arr[],int key,int n,int i){
    if(i==n){
        return -1;
    }
    else if (arr[i]==key){
        return i;
    }
    else{
        linear(arr,key,n,i+1);
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

       cout<< linear(arr,key,n,0);
    return 0;
}