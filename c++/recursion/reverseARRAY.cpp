#include<iostream>
#include<bits/stdc++.h>
using namespace std;

void rev(int a[],int f,int l)
{
if(f>l){
    return;
} else{
        swap(a[f],a[l]);
        rev(a,f+1,l-1);
    }
}


int main(){
    int arr[]={1,2,3,4,5,6,7,8};

    rev(arr,0,7);

    for(int i=0;i<8;i++){
        cout<<arr[i]<<" ";
    }
    return 0;

}