#include<stdio.h>
void rev(int x[]){
    int i=0;
    int j=8;
    while(i<j){
        int temp=x[i];
        x[i]=x[j];
        x[j]=temp;
        i++;
        j--;
return;
    }
}
int main()
{
    int arr[9]={1,2,3,4,5,6,7,8,9};
    rev(arr);
    for(int i=0;i<9;i++){
    printf("%d",arr[i]);
    }
    return 0;
}