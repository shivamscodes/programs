#include<iostream>
#include<vector>
using namespace std;

void merge(int arr[],int l,int mid,int h){
       vector<int>v(h-l+1);
         int left=l,right=mid+1,index=0;
           //comparing two splited arr
         while(left<=mid && right<= h){
            if(arr[left]<=arr[right]){
                v[index]=arr[left];
                index++;
                left++;
               
            }else{
                v[index]=arr[right];
                right++;
                index++;
            }
         } 

         //if elements left i left arr part
         while(left<=mid){
            v[index]=arr[left];
            index++;
            left++;
         }
             
             //if elements left in right part
            while(right<=h){
                v[index]=arr[right];
                index++;
                right++;
            }

            //copying vector into arr
             index=0;
             while(l<=h){
                arr[l]=v[index];
                l++;
                index++;
             }
}

 void mergesort(int arr[],int l,int h){
   if(l==h){
    return;
   }else{
    int mid=(l+h)/2;
    mergesort(arr,l,mid);
    mergesort(arr,mid+1,h);
    merge(arr,l,mid,h);
   }
}


int main (){

    int a[]={12,4,65,0,23,99,17 };
     
     mergesort(a,0,6);

     for(int i=0;i<=6;i++){
        cout<<a[i]<<" ";
     }
    return 0;
}