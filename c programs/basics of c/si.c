#include<stdio.h>
int main()
{
    int principle,time;
    float rate;
    printf("enter the principle\n");
    scanf("%d",&principle);
    printf("enter the time\n");
    scanf("%d",&time);
    printf("enter the rate\n");
    scanf("%f",&rate);
    float si = principle*rate*time/100;
    printf("simple interst is %f\n",si);
    return 0;
}