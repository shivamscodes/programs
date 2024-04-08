#include <stdio.h>
int main()
{
    int a[8]={1,2,3,4,5,6,7,8};

    for(int i=1,j=4;i<=j;i++,j--){
        int temp=a[i];
        a[i]=a[j];
        a[j]=temp;
    
    }
    for(int i=0;i<=7;i++){
        printf("%d",a[i]);
    }
    return 0;

}