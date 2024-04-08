#include<stdio.h>
int main()
{
    int r;
    printf("enter the no row?column");
    scanf("%d",&r);
    int a[r][r];

    printf("enter the matrix");
    for(int i=0;i<r;i++){
        for(int j=0;j<r;j++){
            scanf("%d",&a[i][j]);
        }
    }
    for(int i=0;i<r;i++){
        for(int j=0;j<i;j++){
            int temp=a[i][j];
            a[i][j]=a[j][i];
            a[j][i]=temp;
            }
            }
             for(int i=0;i<r;i++){
        for(int j=0;j<r;j++){
        printf("%d ",a[i][j]);
         }
         printf("\n");
         }
    return 0;
}