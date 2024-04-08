#include<stdio.h>
int main()
{
    int r,c;
    printf("enter the no row");
    scanf("%d",&r);
    printf("enter the no column");
    scanf("%d",&c);
    int a[r][c];
    int b[c][r];
    printf("enter the matrix");
    for(int i=0;i<r;i++){
        for(int j=0;j<c;j++){
            scanf("%d",&a[i][j]);
        }
    }
    for(int i=0;i<c;i++){
        for(int j=0;j<r;j++){
         b[i][j]=a[j][i];
            }
            }
             for(int i=0;i<c;i++){
        for(int j=0;j<r;j++){
        printf("%d ",b[i][j]);
         }
         printf("\n");
         }
    return 0;
}