#include<stdio.h>
int main()
{
    float n1,n2,n3,n4;
    printf("enter the first number");
    scanf("%f",&n1);
     printf("enter the second number");
    scanf("%f",&n2);
     printf("enter the third number");
    scanf("%f",&n3);
     printf("enter the fourth number");
    scanf("%f",&n4);
    
    float max=n1;
    if (n2>max)
    {
        max=n2;
    }
    if (n3>max)
    {
        max=n3;
    }
if (n4>max)
{
    max=n4;
}
    printf("the geratest number is %f",max); 
    return 0;

}