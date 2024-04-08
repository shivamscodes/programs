#include <stdio.h>        ///wrong
int main()
{
    int n;
    printf("enter the n");
    scanf("%d",&n);
    int a=1;
    for (int i=1;i<=n;i++){
      for (int j=1;j<=n-i;j++) 
      {
    printf(" ");
}
int f=1;
for (int k=1;k<=a;k++) 
      {
        int d=f+64;
        char ch=(char)f;
    printf("%c",ch);
      }
      a=a+2;
printf("\n");
       
        }
    return 0;
}

