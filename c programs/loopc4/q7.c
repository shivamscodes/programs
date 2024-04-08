#include<stdio.h>  /*program to calculate sum of numbers occuring in
                         multiplication table of 8*/ 
int main()
{
    int sum=0,limit=10;
    for(int i=1;i<=limit;i++)
    {
        int product=8*i;
        sum=sum+product;
    }
    printf("sum upto %d is %d",limit,sum);
    return 0;
}