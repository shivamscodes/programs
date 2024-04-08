#include<stdio.h>
int main()
{
    int a[3][3]={1,2,3,4,5,6,7,8,9};
    int maxsum=0;
    int count =0;
    for (int i=0;i<3;i++){
    int sum=0;
    for (int j=0;j<3;j++){
    sum=sum+a[i][j];
    }
    if(sum>maxsum){
        maxsum=sum;
       count++;
    }
    }
    printf("sum is %d and the row is %d ",maxsum,count);
    return 0;
}