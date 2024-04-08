#include<stdio.h>
int main()
{
    int a[4][5];
    int l1,l2,r1,r2;
    int sum=0;
     printf("enter the matrix");
     for(int i=0;i<4;i++){
        for (int j=0;j<5;j++)
        scanf("%d",&a[i][j]);
     }
printf("enter the valude of l1");
scanf("%d",&l1);
printf("enter the valude of l2");
scanf("%d",&l2);
printf("enter the valude of r1");
scanf("%d",&r1);
printf("enter the valude of lr2");
scanf("%d",&r2);
for(int i=l1;i<=l2;i++){
        for (int j= r1;j<=r2;j++)
        {
            sum=sum+a[i][j];
        }
        }
printf("sum is ",sum);
    return 0;
}