#include<stdio.h>
int main()
{
    // int r,c;
    // printf("enter the no row");
    // scanf("%d",&r);
    // printf("enter the no column");
    // scanf("%d",&c);
    // int a[r][c];
    // printf("enter the matrix");
    int a[3][3]={{1,2,3},
                 {4,5,6},
                 {7,8,9}};
    // for(int i=0;i<3;i++){
    //     for(int j=0;j<3;j++){
    //         scanf("%d",&a[i][j]);
    //     }
    // }
    for(int i=0;i<3;i++){
        for(int j=0;j<3;j++){
            printf("%d ",a[j][i]);
            }
            printf("\n");
            }
    return 0;
}