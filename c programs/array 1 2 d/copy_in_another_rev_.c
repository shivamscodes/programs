#include<stdio.h>
int main()
{
    int a[6]={1,2,3,4,5,6};
    int b[6];
    for(int i=0;i<6;i++){
        b[i]=a[5-i];
    }
    for(int i=0;i<6;i++)
    printf("%d ",b[i]);
    return 0;
}