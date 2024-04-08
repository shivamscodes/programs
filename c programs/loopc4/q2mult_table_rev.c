#include<stdio.h>
int main()
{
    int r;
    printf("enter the value of table");
    scanf("%d",&r);
    for (int i=10;i;i--) {

        printf("%d x %d = %d \n",r,i,r*i);
    }
    return 0;

}