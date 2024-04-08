#include<stdio.h>
int main()
{
    int arr[7]={21,34,546,67,678,567,56};
    int x=50;
    int count=0;
    for (int i=0;i<7;i++){
        if(arr[i]>x){
printf("%d  ",arr[i]);
count++;
        }
    }
    printf(" \n%d",count);
    return 0;
}