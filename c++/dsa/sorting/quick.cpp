#include<bits/stdc++.h>
#include<iostream>


using namespace std;

int partition(int arr[],int l,int h)
{
    int pos=l;

    for(int i=l;i<=h;i++){
        if(arr[i]<=arr[h]){
           swap(arr[i],arr[pos]);
            // int temp=arr[i];
            // arr[i]=arr[pos];
            // arr[pos]=temp;
            pos++;
        }
    }
    return pos-1;
}

void quicksort(int a[],int l,int h)
{
     if(l>=h){
        return;
     }else{
       
       int pivot = partition(a,l,h);
       //left sort
       quicksort(a,l,pivot-1);
       //right sort
       quicksort(a,pivot,h);
     }
    
    
}

int main(){
int arr[]={4,65,23,43,7,87,22,10,0};
  quicksort(arr,0,8);
    for(int i=0;i<9  ;i++){
    cout<<arr[i]<<" ";
}

    return 0;
}