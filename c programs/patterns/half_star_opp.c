
#include <stdio.h>
int main()
{
    int n;
    printf("enter the n");
    scanf("%d",&n);
   for(int i=1;i<=n;i++){
       for(int j=1;j<=n-i;j++)   //space
       {
        printf(" ");
        }
        for(int k=1;k<=i;k++)    //stars
    {
        printf("*");
    }
   printf("\n");
   }
    return 0;
}