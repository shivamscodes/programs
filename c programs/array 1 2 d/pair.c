#include<stdio.h>
int main()
{
    int arr[]={1,2,3,4,5,6,7,8,9};
    int x=12;
    int count=0;
    for(int i=0;i<9;i++){
        for(int j=i+1;j<9;j++){
            if(arr[i]+arr[j]==x){
                printf("(%d,%d)",arr[i],arr[j]);
                count++;
            }
        }
    }
    printf("\n %d",count);
    return 0;
}