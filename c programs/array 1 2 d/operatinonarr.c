#include<stdio.h>
int main()
{
    int arr[9]={1,2,3,4,5,6,7,8,9};
    for(int i=0;i<9;i++){
        if(i%2==0){
            arr[i]=arr[i]+10;
        }
        else{
            arr[i]=arr[i]*2;
        }
    }
 for(int i=0;i<9;i++)   
    printf("%d  ",arr[i]);
    return 0;
}