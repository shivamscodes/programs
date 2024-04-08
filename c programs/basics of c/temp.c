#include<stdio.h>
int main()
{
    int celcius;
    printf("enter the temperature");
    scanf("%d",&celcius);
    float far = (celcius*9/5)+32;
    printf("tempertature in farenthite is %f",far);
    return 0;
}
