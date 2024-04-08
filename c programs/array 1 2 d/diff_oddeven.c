#include<stdio.h>
int main()
{
    int arr[9]={1,2,3,4,5,6,7,8,9};
    int sum=0;
    int sum1=0;
    for(int i=0;i<9;i++){
        if(i%2==0){
            sum=sum+arr[i];
        }
        else{
             sum1=sum1+arr[i];

        }
    }  
 printf("difference is %d ",sum-sum1);   
return 0;
}