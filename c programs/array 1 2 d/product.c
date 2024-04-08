#include<stdio.h>
int main()
{
    int a[5]={1,2,3,4,5};
  int prod=1;
    for (int i=0;i<5;i++){
       prod=prod*a[i];
    }
    printf("%d",prod);
    return 0;
}