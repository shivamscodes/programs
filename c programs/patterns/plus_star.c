
#include <stdio.h>
int main()
{
    int n;
    printf("enter the n");
    scanf("%d",&n);
   for(int i=1;i<=n;i++){
     for(int j=1;j<=n;j++){
       // if(i==3 || j==3)
       if(i==n/2 || j==n/2)
       {
            printf("*");
        }else{
            printf(" ");
        }
     }
     printf("\n");
    }

    return 0;
}