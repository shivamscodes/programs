#include<stdio.h>                        //do this with do while loop also
int main()
{
    int n ,i=1,sum=0;
    printf("enter the value of n");
    scanf("%d",&n);
   /* for(int i=0;i<=n;i++)
    {
    sum=sum+i;
    }*/
    while( i<=n)
    {
        sum=sum+i;
        i++;
    }
    printf("the sum is %d",sum);
    return 0;
}                                                       

                     


