#include <stdio.h>
int main()
{
    int n;
    printf("enter the n");
    scanf("%d",&n);
    for(int i=1;i<=n;i++){
          //for(int j=1;j<=n+1-i;j++)

          /*int int a=n;
           for(int i=1;i<=n;i++){
          for(int j=1;j<=a;j++)5
          .........
          a--;
          */

          for(int j=n;j>=i;j--)
           {
            printf("*");
           }
           printf("\n");
    }
 
    return 0;
}