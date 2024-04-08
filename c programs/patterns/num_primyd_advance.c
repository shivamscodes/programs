#include <stdio.h>             ///not domne

int main()
{
    int n;
    printf("enter the n");
    scanf("%d",&n);

    int nsp=n-1;
    for (int i=1;i<=n;i++){
     for(int q=1;q<=nsp;q++){
        printf(" ");
     }
     nsp--;
     for(int j=1;j<=i;j++){
        printf("%d",j);
     }int a=i-1;
     
     for(int k=1;k<=n-i;k++)
     {
        
        printf("%d",k);
    a--;
     }

      

printf("\n");
    }


        
    return 0;
}