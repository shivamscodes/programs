#include<stdio.h>
void rev(int arr[],int a,int b){
    for (int i=a,j=b;i<j;i++,j--){
        int temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    } 
}
int main()
{
    int arr[5]={1,2,3,4,5};
     int n=5;
     int k=2;
     k=k%n;
     rev(arr,0,n-1);
     rev(arr,0,k-1);
     rev(arr,k,n-1);
for (int i=0;i<5;i++){
    printf("%d ",arr[i]);
}
    return 0;
}  