#include<stdio.h>
int main()
{
    int a[2][4]={1,2,3,4,5,6,7,8};
    int b[2][4]={9,8,7,6,1,2,3,4};
     int res[2][4];
    for(int i=0;i<2;i++){
        for (int j=0;j<4;j++){
res[i][j]=a[i][j]+b[i][j];
        }
    }
    for(int i=0;i<2;i++){
        for (int j=0;j<4;j++){
            printf("%d ",res[i][j]);
        }
        printf("\n");
        }
    return 0;
}